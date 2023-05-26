import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './form3.css'
import { Modal, Text, Title, List, Image, Grid, useMantineTheme } from '@mantine/core';
import DropDown from '../components/DropDown';

const infectionData = [
    // (Chronic Obstructive Pulmonary Disease)
    {
        name: "COPD",
        precautions: [
            "Quit smoking and avoid exposure to secondhand smoke.",
            "Avoid pollutants and irritants, such as dust, chemicals, and strong fumes.",
            "Follow your prescribed medication regimen and attend regular check-ups.",
            "Practice deep breathing exercises and pulmonary rehabilitation, as advised by your healthcare provider."
        ],
        image: "https://utopper.com/study-material/wp-content/uploads/2023/05/copd.webp"
    },
    {
        name: "Corona",
        precautions: [
            "Follow local health guidelines and regulations regarding mask-wearing, social distancing, and vaccination.",
            "Wash your hands frequently with soap and water for at least 20 seconds.",
            "Avoid close contact with individuals showing symptoms of respiratory illness.",
            "Stay updated with reliable sources of information and follow the guidance of healthcare professionals."
        ],
        image: "https://gumlet.assettype.com/Prabhatkhabar/2022-01/5d1771d9-8ceb-443f-9620-5d0cc8f82c93/Coronavirus.jpg"
    },
    {
        name: "Respiratory Infection",
        precautions: [
            "Practice good hand hygiene by washing your hands regularly with soap and water.",
            "Cover your mouth and nose with a tissue or your elbow when coughing or sneezing.",
            "Avoid close contact with individuals who have respiratory infections.",
            "Maintain a healthy lifestyle with a balanced diet, regular exercise, and sufficient sleep."
        ],
        image: "https://pubmiddleware.mims.com/resource/image/08520949-6455-4071-B2A5-A90C0125B31F/OriginalThumbnail/THUMBNAIL_shutterstock_1062330365.jpg"
    },
    {
        name: "Pneumonia",
        precautions: [
            "Get vaccinated against pneumococcal pneumonia as recommended by your healthcare provider.",
            "Practice good respiratory hygiene, such as covering your mouth and nose when coughing or sneezing.",
            "Wash your hands regularly with soap and water or use alcohol-based hand sanitizers.",
            "Avoid smoking and limit exposure to secondhand smoke."
        ],
        image: 'https://www.nutritionfact.in/wp-content/uploads/2022/11/Pneumonia.jpg'
    },
    {
        name: "Influenza",
        precautions: [
            "Get an annual flu vaccination.",
            "Wash your hands frequently with soap and water, especially before touching your face.",
            "Avoid close contact with individuals who have flu-like symptoms.",
            "Cover your mouth and nose when coughing or sneezing, preferably with a tissue or your elbow."
        ],
        image: "https://i0.wp.com/www.nfid.org/wp-content/uploads/2019/08/Flu.jpg?ssl=1"
    },
    {
        name: "Other",
        precautions: [
            "Consult with a healthcare professional for accurate diagnosis and appropriate precautions.",
            "Follow the advice and guidance provided by your doctor regarding your specific condition.",
            "We are refining our ML model to provide you with accurate disease identification."
        ],
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd1-b64vpDYT-ZfvR79A5T4Uoq6IY-z-qMz5lkE70SD4ipxhjzxCawTHCzy57PDzynctw&usqp=CAU",
    },
    {
        name: "None",
        precautions: [
            "There are no infections predicted for you.",
            "If symptoms persist or worsen, it's advisable to consult with a healthcare provider for further evaluation "
        ],
        image: "https://img.freepik.com/premium-vector/anti-virus-symbol-no-infection-icon-disease-free-sign_53562-16862.jpg?w=2000",

    }
];



const Pform = () => {

    const theme = useMantineTheme();
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

    useEffect(() => {
        infection && setModalOpen(true);
    }, [infection]);

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
                        <input type="text" name="PatientID" value={formData.PatientID} onChange={handleChange} placeholder="Patient ID*" required />
                        <input type="number" name="Age" value={formData.Age} onChange={handleChange} placeholder="Age*" required />
                        <input type="text" name="Sex" value={formData.Sex} onChange={handleChange} placeholder="Sex*" required />
                        <input type="text" name="MedicalHistory" value={formData.MedicalHistory} onChange={handleChange} placeholder="Medical History" />
                        <input type="text" name="HospitalizationData" value={formData.HospitalizationData} onChange={handleChange} placeholder="Hospitalization Data*" required />
                        <input type="text" name="LaboratoryData" value={formData.LaboratoryData} onChange={handleChange} placeholder="Laboratory Data" />
                        <input type="text" name="ImagingData" value={formData.ImagingData} onChange={handleChange} placeholder="Imaging Data" />
                        <input type="text" name="MicrobiologyData" value={formData.MicrobiologyData} onChange={handleChange} placeholder="Microbiology Data" />
                        <input type="text" name="RiskFactors" value={formData.RiskFactors} onChange={handleChange} placeholder="Risk Factors" />
                        <input type="text" name="Symptoms" value={formData.Symptoms} onChange={handleChange} placeholder="Symptoms" />
                        <input type="text" name="Signs" value={formData.Signs} onChange={handleChange} placeholder="Signs" />
                        <input type="text" name="Treatment" value={formData.Treatment} onChange={handleChange} placeholder="Treatment*" required />
                    </div>
                    <div className="submit-button">
                        <button type="submit">Predict</button>
                    </div>
                </div>

            </form>
            <Modal size={"55rem"} centered opened={modalOpen} onClose={() => { setModalOpen(false) }}
                overlayProps={{
                    color: theme.colors.gray[2],
                    opacity: 0.55,
                    blur: 3,

                }}
                transitionProps={{ transition: 'slide-down' }}

            >
                <Title order={3}>Based on the inputs you provided</Title>
                <DropDown label={"See inputs"} text={Object.entries(formData)} />
                <Text mt={30}>The predicted infection is : <span style={{
                    fontSize: 22,
                    fontWeight: 600,
                    color: "blue",
                }}>{infection}</span></Text>
                <Text color='#800000
' mt={15}>Neccessary Precautions : </Text>
                <Grid sx={{
                    display: "flex",
                    // justifyContent: "center",
                    // alignItems: "center"
                }}>
                    <Grid.Col span={8} pt={9}>
                        <List>
                            {
                                infection && infectionData.map((infectionItem, index) => {
                                    if (infectionItem.name === infection) {
                                        return infectionItem.precautions.map((precaution, index) => {
                                            return (<List.Item key={index}>{precaution}</List.Item>)
                                        })
                                    }
                                })}
                        </List>
                    </Grid.Col>
                    <Grid.Col span={4} >
                        <Image width={200} height={150} fit="contain" maw={240} mx="auto" radius="md" src={infection && infectionData.find((infectionItem) => {
                            return infection === infectionItem.name
                        }).image} alt="Random image" />
                    </Grid.Col>
                </Grid>
            </Modal>
        </section>
    );
};

export default Pform;

