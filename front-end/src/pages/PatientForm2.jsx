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
      medicalHistoryData: '',
      hospitalizationData: '',
      laboratoryData: '',
      imagingData: '',
    },

    validate: {
      medicalHistoryData: isNotEmpty('Please enter history'),
      hospitalizationData: isNotEmpty('Please enter history'),
      laboratoryData: isNotEmpty('Please enter history'),
      imagingData: isNotEmpty('Please enter history'),
    },
  });

  return (
    <Paper maw={340} mx='auto' shadow='lg' p='lg' bg={'white'} w={320}>
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <Title order={4}>Medical Details</Title>
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
