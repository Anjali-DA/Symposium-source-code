import {
  TextInput,
  Button,
  Group,
  Box,
  Select,
  NumberInput,
  Title,
  Paper,
  SimpleGrid,
  Modal,
  Text,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useState } from 'react';
import axios from 'axios';

const PatientForm = () => {
  const form = useForm({
    initialValues: {
      name: '',
      age: '',
      sex: '',
      medicalHistory: '',
      hospitalizationData: '',
      laboratoryData: '',
      imagingData: '',
      microbiologyData: '',
      riskFactors: '',
      symptoms: '',
      signs: '',
      treatment: '',
    },

    validate: {
      name: (value) =>
        /^[A-Z][a-zA-Z]*\s([A-Z][a-zA-Z]*\s)?[A-Z][a-zA-Z]*$/.test(value)
          ? null
          : 'Enter a valid name',
      age: (value) =>
        value >= 10 && value <= 80
          ? null
          : 'You must be 10-80 years old to register',
      // email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      sex: (value) =>
        value === 'male' || value === 'female' || value === 'others'
          ? null
          : 'Enter a sex',
    },
  });

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Paper
      mx='auto'
      shadow='lg'
      p='lg'
      bg={'blue'}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
      }}
    >
      <Title order={2} my={10}>
        Enter your Medical Data to get information about infections
      </Title>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const {
            age,
            sex,
            medicalHistory,
            hospitalizationData,
            laboratoryData,
            imagingData,
            microbiologyData,
            riskFactors,
            symptoms,
            signs,
            treatment,
          } = form.values;
          const requestDataBody = {
            // PatientID: Math.random().toString(36).slice(2, 10),
            patientID: Math.floor(Math.random() * 900) + 100,
            Age: Number(age),
            Sex: sex,
            MedicalHistory: medicalHistory,
            HospitalizationData: hospitalizationData,
            LaboratoryData: laboratoryData,
            ImagingData: imagingData,
            MicrobiologyData: microbiologyData,
            RiskFactors: riskFactors,
            Symptoms: symptoms,
            Signs: signs,
            Treatment: treatment,
          };
          console.log(requestDataBody);
          console.log({
            age: typeof age,
            sex: typeof sex,
            medicalHistory: typeof medicalHistory,
            hospitalizationData: typeof hospitalizationData,
            laboratoryData: typeof laboratoryData,
            imagingData: typeof imagingData,
            microbiologyData: typeof microbiologyData,
            riskFactors: typeof riskFactors,
            symptoms: typeof symptoms,
            signs: typeof signs,
            treatment: typeof signs,
          });
          // try {
          //   const URL = 'someURL.com/getData';
          //   const res = await fetch(URL, {
          //     method: 'POST',
          //     body: JSON.stringify(requestDataBody),
          //   });
          //   if (!res.ok) {
          //     return new Error('Error in posting data');
          //   }
          //   const resData = await res.json();
          //   console.log(resData);
          // } catch (e) {
          //   console.log(e);
          // }
          const url = 'http://127.0.0.1:8000/hai_prediction'
          try {
            axios.post(url, requestDataBody, {mode: 'no-cors' }, {
          headers: {
            'Content-Type': 'application/json'
          }
        }).then((response) => {
              console.log(response.data);
            });
          } catch (e) {
            console.log(e);
          }
          setModalOpen(true);
        }}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          backgroundColor: 'wheat',
          padding: 20,
          borderRadius: 10,
          boxShadow: '5px 5px 8px #00000050',
        }}
      >
        <SimpleGrid cols={2}>
          <TextInput
            w={200}
            variant='filled'
            label='Name'
            placeholder='John Doe'
            {...form.getInputProps('name')}
          />
          <NumberInput
            w={200}
            withAsterisk
            variant='filled'
            label='Age'
            placeholder='22'
            {...form.getInputProps('age')}
          />
        </SimpleGrid>
        <SimpleGrid cols={2}>
          <Select
            w={200}
            withAsterisk
            label='Sex'
            variant='filled'
            placeholder='Male'
            clearable
            data={[
              { value: 'male', label: 'Male' },
              { value: 'female', label: 'Female' },
              { value: 'others', label: 'Others' },
            ]}
            {...form.getInputProps('sex')}
          />
          <TextInput
            w={200}
            variant='filled'
            label='Medical History'
            placeholder='Medical'
            {...form.getInputProps('medicalHistory')}
          />
        </SimpleGrid>
        <SimpleGrid cols={2}>
          <TextInput
            w={200}
            variant='filled'
            label='Hospitalization Data'
            placeholder='Hospitalization'
            {...form.getInputProps('hospitalizationData')}
          />
          <TextInput
            w={200}
            variant='filled'
            label='Laboratory Data'
            placeholder='Laboratory'
            {...form.getInputProps('laboratoryData')}
          />
        </SimpleGrid>
        <SimpleGrid cols={2}>
          <TextInput
            w={200}
            variant='filled'
            label='Imaging Data'
            placeholder='Imaging'
            {...form.getInputProps('imagingData')}
          />
          <TextInput
            w={200}
            variant='filled'
            label='Microbiology Data'
            placeholder='Microbiology'
            {...form.getInputProps('microbiologyData')}
          />
        </SimpleGrid>
        <SimpleGrid cols={2}>
          <TextInput
            w={200}
            variant='filled'
            label='Risk Factors'
            placeholder='Risks'
            {...form.getInputProps('riskFactors')}
          />
          <TextInput
            w={200}
            variant='filled'
            label='Symptoms'
            placeholder='Symptoms Faced'
            {...form.getInputProps('symptoms')}
          />
        </SimpleGrid>
        <SimpleGrid cols={2}>
          <TextInput
            w={200}
            variant='filled'
            label='Signs'
            placeholder='Signs'
            {...form.getInputProps('signs')}
          />
          <TextInput
            w={200}
            variant='filled'
            label='Treatment'
            placeholder='Treatment Done'
            {...form.getInputProps('treatment')}
          />
        </SimpleGrid>
        <Button type='submit' w={420} fullWidth mt={20}>
          Predict
        </Button>
      </form>
      <Modal
        centered
        opened={modalOpen}
        onClose={() => {
          setModalOpen(false);
          form.reset();
        }}
        title='Report'
        closeOnClickOutside={true}
        closeOnEscape={true}
      >
        <Paper bg={'blue'} p={20}>
          <Text>Name : {form.values.name}</Text>
          <Text>Age : {form.values.age}</Text>
          <Text>Sex : {form.values.sex}</Text>
          <Text>Medical History : {form.values.medicalHistory}</Text>
          <Text>Hospitalization Data : {form.values.hospitalizationData}</Text>
          <Text>Imaging Data : {form.values.imagingData}</Text>
          <Text>Microbiology Data : {form.values.microbiologyData}</Text>
          <Text>Laboratory Data : {form.values.laboratoryData}</Text>
          <Text>Risk Factors : {form.values.riskFactors}</Text>
          <Text>Symptoms : {form.values.symptoms}</Text>
          <Text>Treatments : {form.values.treatment}</Text>
          <Text>Signs : {form.values.signs}</Text>
          <Text>Probable Infections : Anaemia</Text>
        </Paper>
      </Modal>
    </Paper>
  );
};

export default PatientForm;
