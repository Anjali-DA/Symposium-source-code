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
    },

    validate: {
      name: matches(
        /^[A-Z][a-zA-Z]*\s([A-Z][a-zA-Z]*\s)?[A-Z][a-zA-Z]*$/,
        'Enter a valid name'
      ),
      name: isNotEmpty('Please enter name'),
      age: isInRange(
        { min: 10, max: 80 },
        'You must be 10-80 years old to register'
      ),
      age: isNotEmpty('Please enter age'),
      email: isEmail('Invalid email'),
      email: isNotEmpty('Please enter email'),
      sex: isNotEmpty('Please enter sex'),
      sex: isNotEmpty('Please enter sex'),
    },
  });

  return (
    <Paper w={350} maw={600} mx='auto' shadow='lg' p='lg' bg={'white'}>
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
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
        <Group position='right' mt='md'>
          <Button type='submit' variant='filled'>
            Next
          </Button>
        </Group>
      </form>
    </Paper>
  );
};

export default PatientForm;
