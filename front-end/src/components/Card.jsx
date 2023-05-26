import { Text, Button, Paper } from '@mantine/core';

const Card = ({ name, github, role }) => {
  return (
    <Paper
      radius='md'
      withBorder
      p='lg'
      sx={(theme) => ({
        backgroundColor:
          theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
      })}
    >
      <Text ta='center' fz='lg' weight={500} mt='md'>
        {name}
      </Text>
      <Text ta='center' c='dimmed' fz='sm'>
        {role}
      </Text>

      <Button variant='default' fullWidth mt='md'>
        <Anchor href={github} target='_blank'>
          GitHub
        </Anchor>
      </Button>
    </Paper>
  );
};

export default Card;
