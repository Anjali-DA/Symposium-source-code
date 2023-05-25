import React, { useState } from 'react';
import axios from 'axios';
import './form3.css'


const Pform = () => {
    const [formData, setFormData] = useState({
      PatientID: '',
      Age: '',
      Sex: '',
      MedicalHistory: '',
      HospitalizationData: '',
      LaboratoryData: '',
      ImagingData: '',
      MicrobiologyData: '',
      RiskFactors: '',
      Symptoms: '',
      Signs: '',
      Treatment: ''
    });
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const response = await axios.post('http://127.0.0.1:8000/hai_prediction', formData, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
  
        // Handle the response as needed
        console.log(response.data);
      } catch (error) {
        // Handle error
        console.error(error);
      }
    };
  
    const handleChange = (e) => { const { name, value } = e.target;
    const newValue = name === 'Age' ? parseInt(value) : value;
  
    setFormData({ ...formData, [name]: newValue });
    };
  
    return (
        <form onSubmit={handleSubmit} >
        <div className='container'>
        <div className='form-container'>
    <input type="text" name="PatientID" value={formData.PatientID} onChange={handleChange} placeholder="Patient ID" />
    <input type="number" name="Age" value={formData.Age} onChange={handleChange} placeholder="Age" />
    <input type="text" name="Sex" value={formData.Sex} onChange={handleChange} placeholder="Sex" />
    <input type="text" name="MedicalHistory" value={formData.MedicalHistory} onChange={handleChange} placeholder="Medical History" />
    <input type="text" name="HospitalizationData" value={formData.HospitalizationData} onChange={handleChange} placeholder="Hospitalization Data" />
    <input type="text" name="LaboratoryData" value={formData.LaboratoryData} onChange={handleChange} placeholder="Laboratory Data" />
    <input type="text" name="ImagingData" value={formData.ImagingData} onChange={handleChange} placeholder="Imaging Data" />
    <input type="text" name="MicrobiologyData" value={formData.MicrobiologyData} onChange={handleChange} placeholder="Microbiology Data" />
    <input type="text" name="RiskFactors" value={formData.RiskFactors} onChange={handleChange} placeholder="Risk Factors" />
    <input type="text" name="Symptoms" value={formData.Symptoms} onChange={handleChange} placeholder="Symptoms" />
    <input type="text" name="Signs" value={formData.Signs} onChange={handleChange} placeholder="Signs" />
    <input type="text" name="Treatment" value={formData.Treatment} onChange={handleChange} placeholder="Treatment" />
    </div>
    <div class="submit-button">
      <button type="submit">Predict</button>
    </div>
    </div>
    
  </form>
    );
  };

export default Pform
