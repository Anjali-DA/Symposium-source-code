# -*- coding: utf-8 -*-
"""
creating api for HAI_prediction_model

@author: naveen
"""

from fastapi import FastAPI
from pydantic import BaseModel
import pickle
import json

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

app = FastAPI()

class model_input(BaseModel):
    PatientID: str
    Age: int
    Sex: str
    Race: str
    Ethnicity: str
    MedicalHistory: str
    HospitalizationData: str
    LaboratoryData: str
    ImagingData: str
    MicrobiologyData: str
    RiskFactors: str
    Symptoms: str
    Signs: str
    Treatment: str
    Outcomes: str
    Unnamed: str
    

# loading the hai_model
hai_model = pickle.load(open('hai_model.sav', 'rb'))
predicted_values = ''


# preprocess input data 

class Processing:
    def __init__(self, df):
        df1 = df.drop(['Patient ID', 'Unnamed: 16'], axis=1)
        df2 = df1.drop(['Race', 'Ethnicity', 'Outcomes'], axis=1)
        for index, row in df2.iterrows():
            try:
                start_date_str, end_date_str = row['Hospitalization Data'].split(' to ')
                start_date = datetime.strptime(start_date_str, '%Y-%m-%d')
                end_date = datetime.strptime(end_date_str, '%Y-%m-%d')
                days = (end_date - start_date).days
                df2.at[index, 'Hospitalization Data'] = days
            except ValueError:
                print(f"Invalid date range at index {index}: {row['Hospitalization Data']}")
        
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
        text_columns = ['Medical History', 'Laboratory Data', 'Imaging Data', 'Microbiology Data',
                        'Risk Factors', 'Symptoms', 'Signs', 'Treatment']

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


#creating the api
@app.post('/hai_prediction')
def hai_prediction(input_param : model_input):
    input_data = input_param.json()
   # input_dict = json.loads(input_data)
    input_dict = pd.DataFrame([input_data])
    
    processing = Processing(input_dict)
    combined_data = processing.process_data()
    

    # data list
    pId = input_dict['PatientID']
    age = input_dict['Age']
    sex = input_dict['Sex']
    race = input_dict['Race']
    ethnicity = input_dict['Ethnicity']
    medical_history = input_dict['MedicalHistory']
    hospitalization_data = input_dict['HospitalizationData']
    laboratory_data = input_dict['LaboratoryData']
    imaging_data = input_dict['ImagingData']
    microbiology_data = input_dict['MicrobiologyData']
    risk_factors = input_dict['RiskFactors']
    symptoms = input_dict['Symptoms']
    signs = input_dict['Signs']
    treatment = input_dict['Treatment']
    outcomes = input_dict['Outcomes']
    unnamed = input_dict['Unnamed']
 
    input_list = [pId, age, sex, race, ethnicity, medical_history, hospitalization_data, laboratory_data, imaging_data, microbiology_data, risk_factors, symptoms, signs, treatment, outcomes, unnamed]
    
    columns = ['Patient ID','Age', 'Sex', 'Race', 'Ethnicity', 'Medical History', 'Hospitalization Data', 'Laboratory Data', 'Imaging Data', 'Microbiology Data', 'Risk Factors', 'Symptoms', 'Signs', 'Treatment', 'Outcomes','Unnamed: 16']
    df_new = pd.DataFrame([input_list], columns=columns)
    test_df = Processing(df_new)
    X_data = test_df.process_data()
    ############################
    # Get X_train from hai_model.sav
    X_train = hai_model.X_train  # Replace 'X_train' with the attribute name used in your model
    
    # Step 1: Get feature names used during training
    feature_names_training = X_train.columns.tolist()

    # Step 2: Align feature names in test data
    feature_names_test = X_data.columns.tolist()

    # Step 3: Identify unseen features in test data
    unseen_features = set(feature_names_test) - set(feature_names_training)

    # Step 4: Drop unseen features from test data
    X_data = X_data.drop(unseen_features, axis=1)

    # Step 5: Reorder features in test data to match the order in training data
    X_data = X_data.reindex(columns=feature_names_training, fill_value=0)
    
    predict = hai_model.predict(X_data)
    
    # changing predict to human readable format
    
    label_mapping = {-1: 'None', 0: 'Other', 1: 'Pneumonia', 2: 'Influenza', 3: 'Unspecified Infection', 4: 'COVID-19', 5: 'Respiratory Infection'}

    # Map the predicted values to their corresponding strings
    predict_strings = [label_mapping[label] for label in predict]
    
    # Print the predicted strings
    
    for prediction in predict_strings:
        predicted_values = prediction
       # print(prediction)

    return predicted_values

@app.get('/predicted')
def predicted():
    return predicted_values
    
    
    
