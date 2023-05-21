import { TextInput, Button, Group, Title, Paper } from '@mantine/core';
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
      microbiologyData: '',
      riskFactors: '',
      symptoms: '',
      signs: '',
      treatment: '',
    },

    validate: {
      microbiologyData: isNotEmpty('Please enter history'),
      riskFactors: isNotEmpty('Please enter history'),
      symptoms: isNotEmpty('Please enter history'),
      signs: isNotEmpty('Please enter history'),
      treatment: isNotEmpty('Please enter history'),
    },
  });

  return (
    <Paper maw={340} mx='auto' shadow='lg' p='lg' bg={'white'} w={320}>
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
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
        <Group position='right' mt='md'>
          <Button type='submit' variant='light'>
            Next
          </Button>
        </Group>
      </form>
    </Paper>
  );
};

export default PatientForm;
