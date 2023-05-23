# Symposium:R-Prediction 

# Abstract:
-Aim of the study :To combat HAI and improve PS by the intervention of EHR.HAI is a major concern for people.

-To show the viability of infections the study used a data driven strategy using EHR and SVM.
The HRF(High Risk Factor) can be identified by ML. The data that will be used for developing and training consists of 300rows & 9 variables which would include Age, WBC , Coma scale , heart rate etc.

-Probable accuracy to be achieved 89%on test set,75%Precision ,80% Recall,77%F1-score ,RoC AUC score of 0.86 Confusion Matrix would accurately predict 37/45 instances. Overall it will be result oriented and SVM is a promising ML algorithm for HAI , to predict RP and using EHR data could be a valid identification for HAI and preventive measures for HAI

-Limitations to the study:
The use of a dummy dataset, which may not fully represent the complexities of real-world EHR data and further research can improve it.

-Keyword: HAI(Hospital Acquired infections), RP, SVM,ML, Health care

# Introduction:
-HAI is a significant healthcare challenge causing increased morbidity, mortality, and healthcare costs.

-ML techniques have shown promise in identifying HAI risks using EHR data.

-This poster proposes the development of an ML model for HAI risk prediction to enhance patient safety and resource allocation.

# Proposed Work:
-Collect comprehensive EHR data from patients admitted to a healthcare facility.

-Preprocess the data to handle missing values, standardize features, and remove redundant information.

-Utilize supervised ML algorithms such as GridSearchCV, Support Vector Machine, Naïve Bayes and Random Forest Classifier to train the model to get accuracy, f1 score, precision and recall.

-Optimize the model by fine-tuning hyperparameters and evaluating its performance using appropriate metrics.

-Assess the cost-effectiveness of implementing the ML model in a healthcare setting by integrating and deploying the model

 # Dataset
 

 
 
# Contribution:

# Flowchart/Pictorial Representation:



# Results:
-SVM : Accuracy 89%,Precision 75%,F1-Score 77%,ROC AUC  is 0.86

-The confusion matrix revealed that the model correctly predicted 37/45 instances of HAIs, while 8 instances were classified as false negatives, correctly predicted 79/90 instances of non-hospital-associated infections, while 11 instances were classified as false positives.

-Results suggest that SVM is a promising machine learning algorithm for HAI risk prediction using EHR data, and could potentially assist healthcare providers in identifying patients at high risk for HAI and implementing preventative measures to reduce the incidence of HAI

# Conclusion:
-After generating the data, we successfully pre-processed the data with python libraries- converted al the text to numeric data.

 -Successfully predicted the maximum accuracy and cross validation score with 100% and 97.50%.
 
-After training the model, we successfully predicted the output with test and train data with Random Forest Classifier then performed fast API followed by integrating the model and proceed for the deployment..

# References:
Detecting Hospital Acquired Infections using Machine Learning - MARKUS NÄSMAN
"A Bayesian network approach for predicting the risk of hospital-acquired Clostridium difficile infection" by Sung et al. (2016)
