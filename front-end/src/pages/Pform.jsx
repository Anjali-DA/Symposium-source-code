import React, { Fragment, useState } from 'react';
import axios from 'axios';
import './form3.css'
import { Modal, Text, Title, List, SimpleGrid, Image, Center, Grid } from '@mantine/core';


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
    const [modalOpen, setModalOpen] = useState(false);
    const [infection, setInfection] = useState("");

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
            setInfection(response.data);

        } catch (error) {
            // Handle error
            console.error(error);
        }
        setModalOpen(true);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        const newValue = name === 'Age' ? parseInt(value) : value;

        setFormData({ ...formData, [name]: newValue });
    };

    return (
        <section className='form'>
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
            <Modal size={"55rem"} opened={modalOpen} onClose={() => { setModalOpen(false) }}>
                <Title order={3}>Based on the inputs you provided</Title>
                <p>De===ropwdonw</p>
                <Text>The predicted infection is : <span style={{
                    fontSize: 22,
                    fontWeight: 600,
                    color: "blue",
                }}>{infection}</span></Text>
                <Text color='#800000
'>Neccessary Precautions : </Text>
                <Grid>
                    <Grid.Col span={8}>
                        <List>
                            <List.Item>Clone or download repository from GitHub</List.Item>
                            <List.Item>Install dependencies with yarn</List.Item>
                            <List.Item>To start development server run npm start command</List.Item>
                            <List.Item>Run tests to make sure your changes do not break the build</List.Item>
                            <List.Item>Submit a pull request once you are done</List.Item>
                        </List>
                    </Grid.Col>
                    <Grid.Col span={4}>
                        <Image maw={240} mx="auto" radius="md" src="https://ui.mantine.dev/_next/static/media/image.9a65bd94.svg" alt="Random image" />
                    </Grid.Col>
                </Grid>
            </Modal>
        </section>
    );
};

export default Pform
