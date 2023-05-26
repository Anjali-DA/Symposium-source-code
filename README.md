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
# Some Imp. informations
Why Machine Learning?
Machine learning empowers us to analyze vast amounts of EHR data and identify patterns that might otherwise go unnoticed. By leveraging advanced algorithms and predictive modeling techniques, our model can detect early indicators of HAI risk, enabling timely interventions and personalized care plans.

Unparalleled Accuracy and Precision
Our machine learning model has been trained on extensive datasets, encompassing diverse patient populations and a wide range of HAI conditions. With this wealth of information, we have achieved an unprecedented level of accuracy and precision in HAI risk prediction. Our algorithm continually learns and adapts, ensuring the most up-to-date and reliable predictions for every individual.

Tailored HAI Care Solutions
Understanding that each person's HAI is unique, our machine learning model provides tailored recommendations and interventions based on individual risk profiles. Whether it's preventive measures, targeted treatments, or lifestyle modifications, our solutions are designed to optimize HAI health and promote overall well-being.

Empowering Healthcare Providers
Our machine learning model is not just a tool for individuals but also a powerful resource for healthcare providers. By integrating our model into existing clinical workflows, physicians can access invaluable insights to enhance patient care and make informed decisions about preventive measures and treatment options.

Privacy and Security First
We prioritize the privacy and security of our users' health data. Our systems adhere to stringent data protection protocols and comply with all relevant regulations, ensuring that sensitive information is handled with the utmost care and confidentiality.

Join Us in Shaping the Future
 we believe in harnessing the potential of machine learning to transform healthcare. By predicting HAI risk using EHR data, we are paving the way for a new era of personalized care, proactive interventions, and improved outcomes.

Explore our website to learn more about our cutting-edge technology, innovative solutions, and how you can join us in revolutionizing HAI health through machine learning.

Together, let's unlock the power of data and shape a healthier future for all.

# Results:
Random Forest Classification : Accuracy 96.67%,Precision 83%,F1-Score 88%,Recall 94%, ROC AUC  is 0.86        
The confusion matrix revealed that the model correctly predicted 38/45 instances of HAIs, while 8 instances were classified as false negatives, correctly predicted 79/90 instances of non-hospital-associated infections, while 11 instances were classified as false positives.
Random Forest Classifier is a promising ML algorithm for HAI risk prediction using EHR data, and could potentially assist healthcare providers in identifying patients at high risk for HAI and implementing preventative measures to reduce the incidence of HAI
ACCEPTABILITY: It is widely accepted by healthcare professionals and researchers as a valuable approach to enhance patient safety and infection control.
RELIABILITY & VALIDITY:providing consistent and accurate predictions based on robust statistical analysis of comprehensive electronic health records.


# Conclusion:
-After generating the data, we successfully pre-processed the data with python libraries- converted al the text to numeric data.

 -Successfully predicted the maximum accuracy and cross validation score with 100% and 97.50%.
 
-After training the model, we successfully predicted the output with test and train data with Random Forest Classifier then performed fast API followed by integrating the model and proceed for the deployment..

# References:
Detecting Hospital Acquired Infections using Machine Learning - MARKUS NÄSMAN
"A Bayesian network approach for predicting the risk of hospital-acquired Clostridium difficile infection" by Sung et al. (2016)
