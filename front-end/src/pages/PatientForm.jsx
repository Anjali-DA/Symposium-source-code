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
      name: '',
      age: '',
      email: '',
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
    <Paper mx='auto' shadow='lg' p='lg' bg={'white'}>
      <form
        onSubmit={form.onSubmit((values) => console.log(values))}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Group w={300}>
          <Title order={2}>Personal Details</Title>
          <TextInput
            withAsterisk
            variant='filled'
            label='Name'
            placeholder='John Doe'
            {...form.getInputProps('name')}
          />
          <NumberInput
            withAsterisk
            variant='filled'
            label='Age'
            placeholder='22'
            hideControls
            {...form.getInputProps('age')}
          />
          <TextInput
            withAsterisk
            variant='filled'
            label='Email'
            placeholder='your@email.com'
            {...form.getInputProps('email')}
          />
          <Select
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
        </Group>
        <Group w={300}>
          <Title order={2}>Medical Details</Title>
          <TextInput
            withAsterisk
            variant='filled'
            label='Medical History'
            placeholder='Medical'
            {...form.getInputProps('medicalHistory')}
          />
          <TextInput
            withAsterisk
            variant='filled'
            label='Hospitalization Data'
            placeholder='Hospitalization'
            hideControls
            {...form.getInputProps('hospitalizationData')}
          />
          <TextInput
            withAsterisk
            variant='filled'
            label='Laboratory Data'
            placeholder='Laboratory'
            {...form.getInputProps('laboratoryData')}
          />
          <TextInput
            withAsterisk
            variant='filled'
            label='Imaging Data'
            placeholder='Imaging'
            {...form.getInputProps('imagingData')}
          />
        </Group>
        <Group w={300}>
          <Title order={2}>Medical Details</Title>
          <TextInput
            withAsterisk
            variant='filled'
            label='Microbiology Data'
            placeholder='Microbiology'
            {...form.getInputProps('microbiologyData')}
          />
          <TextInput
            withAsterisk
            variant='filled'
            label='Risk Factors'
            placeholder='Risks'
            hideControls
            {...form.getInputProps('riskFactors')}
          />
          <TextInput
            withAsterisk
            variant='filled'
            label='Symptoms'
            placeholder='Symptoms Faced'
            {...form.getInputProps('symptoms')}
          />
          <TextInput
            withAsterisk
            variant='filled'
            label='Signs'
            placeholder='Signs'
            {...form.getInputProps('signs')}
          />
          <TextInput
            withAsterisk
            variant='filled'
            label='Treatment'
            placeholder='Treatment Done'
            {...form.getInputProps('treatment')}
          />
          <Button type='submit'>Submit</Button>
        </Group>
      </form>
    </Paper>
  );
};

export default PatientForm;
