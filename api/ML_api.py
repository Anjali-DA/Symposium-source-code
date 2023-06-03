# -*- coding: utf-8 -*-
"""
creating api for HAI_prediction_model

@author: naveen
"""

from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, Field, validator
import pickle
import json
from fastapi.middleware.cors import CORSMiddleware

import pandas as pd
import numpy as np
import string
# Standardization 
from sklearn.preprocessing import StandardScaler
import nltk
# remove stopwords
from nltk.corpus import stopwords
# lemmatization & pos tagging
from nltk import pos_tag
from nltk.corpus import wordnet
from nltk.tokenize import word_tokenize
from nltk.stem import WordNetLemmatizer

from sklearn.feature_extraction.text import TfidfVectorizer

from datetime import datetime
import logging



app = FastAPI()

# cors middleware
origins = [
    "http://localhost:5173/",  # Replace with your React app's URL
]
app.add_middleware(
    CORSMiddleware,
    # allow_origins=origins,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

logger = logging.getLogger(__name__)


class model_input(BaseModel):
    PatientID: str
    Age: str
    Sex: str
    MedicalHistory: str
    HospitalizationData: str
    LaboratoryData: str
    ImagingData: str
    MicrobiologyData: str
    RiskFactors: str
    Symptoms: str  
    Signs: str
    Treatment: str

    

# loading the hai_model
hai_model = pickle.load(open('hai_pred_model.sav', 'rb'))
predicted_values = ''


# preprocess input data 

class Processing:
    def __init__(self, df):
        df1 = df.drop(df.columns[0], axis=1)
        df1 = df1.replace(['NaN', 'N/A', 'null','None'], None)
        df2 = df1
        for index, row in df2.iterrows():
            try:
                start_date_str, end_date_str = row['HospitalizationData'].split(' to ')
                start_date = datetime.strptime(start_date_str, '%Y-%m-%d')
                end_date = datetime.strptime(end_date_str, '%Y-%m-%d')
                days = (end_date - start_date).days
                df2.at[index, 'HospitalizationData'] = days
            except ValueError:
                print(f"Invalid date range at index {index}: {row['HospitalizationData']}")
        
        df2['Sex'] = df2['Sex'].replace(['Female'], 'F')
        df2['Sex'] = df2['Sex'].replace(['Male'], 'M')
        df2['Sex'] = df2['Sex'].map({'F': 1, 'M': 0}).astype(int)
        df2 = df2.replace('None', -1)
    
        nc = df2.select_dtypes(include=['int', 'float']).columns
        tc = df2.select_dtypes(include='object').columns
        nd = df2[nc]
        td = df2[tc]
        scaler = StandardScaler()
        std_nd = scaler.fit_transform(nd)
        std_nd = pd.DataFrame(std_nd, columns=nd.columns)
        
        # Text preprocessing
        # 1. Lowercase
        # for column in td.columns:
        #     if df2[column].dtype in [np.int64, np.float64]:
        #         continue
        #     else:
        #         td[column] = td[column].str.lower()
        
        # 2. Remove punctuation
        for column in td.columns:
            td[column] = td[column].apply(lambda x: x.translate(str.maketrans('', '', string.punctuation)) if isinstance(x, str) else x)
        
        # 3. Remove stopwords
        for column in td.columns:
            stop_words = set(stopwords.words('english'))
            td[column] = td[column].apply(lambda x: ' '.join([word for word in str(x).split() if word.lower() not in stop_words]))
        
        # 4. Lemmatizer
        lemmatizer = WordNetLemmatizer()
        
        def lemmatize_word(word, pos_tag):
            if pos_tag.startswith('J'):
                pos = wordnet.ADJ
            elif pos_tag.startswith('V'):
                pos = wordnet.VERB
            elif pos_tag.startswith('N'):
                pos = wordnet.NOUN
            elif pos_tag.startswith('R'):
                pos = wordnet.ADV
            else:
                pos = wordnet.NOUN
            return lemmatizer.lemmatize(word, pos)

        def lemmatize_column(column):
            if column == 'NaN':
                return column
            elif isinstance(column, str):
                tokens = word_tokenize(column)
                pos_tags = nltk.pos_tag(tokens)
                lemmatized_words = [lemmatize_word(word, pos_tag) for word, pos_tag in pos_tags]
                return ' '.join(lemmatized_words)
            else:
                return column
        
        for column in td.columns:
            td.loc[:, column] = td[column].apply(lemmatize_column)
        
        # 5. Vectorizer
        text_columns = ['MedicalHistory', 'LaboratoryData', 'ImagingData', 'MicrobiologyData',
                        'RiskFactors', 'Symptoms', 'Signs', 'Treatment']

        td['Combined Text'] = td[text_columns].apply(lambda x: ' '.join(x.dropna().astype(str)), axis=1)

        vectorizer = TfidfVectorizer()
        vectorized_data = vectorizer.fit_transform(td['Combined Text'])

        self.vectorized_df = pd.DataFrame(vectorized_data.toarray(), columns=vectorizer.get_feature_names_out())
        self.vectorized_text_data = pd.concat([td, self.vectorized_df], axis=1)
        
        # 6. Combine data
        self.combined_data = pd.concat([nd, self.vectorized_df], axis=1)
        self.combined_data = self.combined_data.fillna(-1)
        # self.combined_data = self.combined_data.dropna()
    
    def process_data(self):
        return self.combined_data


logger.info('application run')
@app.post('/hai_prediction')
def hai_prediction(input_param: model_input):
    logger.info("Incoming data: %s", input_param)
    input_dict = input_param.dict()
    
    logger.info("Incoming data: %s", input_dict)  # Log the incoming data
    
    
    columns = ['PatientID','Age', 'Sex', 'MedicalHistory', 'HospitalizationData', 'LaboratoryData', 'ImagingData', 'MicrobiologyData', 'RiskFactors', 'Symptoms', 'Signs', 'Treatment']
    
    input_data = [input_dict[column.replace(' ', '')] for column in columns]
    
    df_new = pd.DataFrame([input_data], columns=columns)
    test_df = Processing(df_new)
    X_data = test_df.process_data()

    X_train = pd.read_csv('hai_X_train.csv')
 
    feature_names_training = X_train.columns.tolist()

    feature_names_test = X_data.columns.tolist()

    unseen_features = set(feature_names_test) - set(feature_names_training)

    X_data = X_data.drop(unseen_features, axis=1)

    X_data = X_data.reindex(columns=feature_names_training, fill_value=0)
    
    predict = hai_model.predict(X_data)
    predict = predict.astype(int)
    
    # changing predict to human readable format
    label_mapping = {-1: 'None', 0: 'other' , 1 : 'VAP', 2 : 'UTI', 3 : 'CLABSI', 4: 'SSI', 5 : 'Respiratory Infection'}

    predict_strings = [label_mapping[label] for label in predict]
 
    predicted_values = ', '.join(predict_strings)

    return predicted_values

@app.get('/predicted')
def predicted():
    return predicted_values
    
    
    