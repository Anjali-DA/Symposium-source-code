import {
  TextInput,
  Button,
  Group,
  Box,
  Select,
  NumberInput,
  Title,
  Paper,
} from '@mantine/core';
import {
  useForm,
  isNotEmpty,
  isEmail,
  isInRange,
  matches,
} from '@mantine/form';

const PatientForm = () => {
  const form = useForm({
    initialValues: {
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
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      sex: (value) =>
        value === 'male' || value === 'female' || value === 'others'
          ? null
          : 'Enter a sex',
    },
  });

  return (
    <Paper
      mx='auto'
      shadow='lg'
      p='lg'
      bg={'white'}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Title order={4} my={10}>
        Enter your medical data to get info about infections
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
            PatientID: Math.random().toString(36).slice(0, 10),
            Age: age,
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
          form.reset();
          try {
            const URL = 'someURL.com/getData';
            const res = await fetch(URL);
            if (!res.ok) {
              return new Error('Error in posting data');
            }
            const resData = await res.json();
            console.log(resData);
          } catch (e) {
            console.log(e);
          }
        }}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Group w={300}>
          <NumberInput
            w={200}
            withAsterisk
            variant='filled'
            label='Age'
            placeholder='22'
            {...form.getInputProps('age')}
          />
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
          <TextInput
            w={200}
            variant='filled'
            label='Imaging Data'
            placeholder='Imaging'
            {...form.getInputProps('imagingData')}
          />
        </Group>
        <Group w={300}>
          <TextInput
            w={200}
            variant='filled'
            label='Microbiology Data'
            placeholder='Microbiology'
            {...form.getInputProps('microbiologyData')}
          />
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
          <Button type='submit' w={200}>Submit</Button>
        </Group>
      </form>
    </Paper>
  );
};

export default PatientForm;
