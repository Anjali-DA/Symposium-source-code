import { Text, Title, Paper } from '@mantine/core';
import Card from './../components/Card';

const contributors = [
  {
    name: 'Dishant Yadav',
    github: 'dishant-yadav',
    role: 'Frontend',
  },
  {
    name: 'Sriya',
    github: 'sriya@mail.com',
    role: 'Frontend',
  },
  {
    name: 'Anjali',
    github: 'anjali@mail.com',
    role: 'ML',
  },
  {
    name: 'Naveen',
    github: 'naveen@mail.com',
    role: 'ML',
  },
];

const AboutUs = () => {
  return (
    <Paper w='100vw' h={'100vh'} bg={'blue'} pl={40} pt={40}>
      <Title
        order={3}
        size='h1'
        underline
        sx={{ textShadow: '2px 2px 4px #00000050' }}
      >
        About the project
      </Title>
      <Text>
        This is a project about determing This is a project about determing This
        This is a project about determing This is a project about determing is a
        project about determing This is a project about determing project about
        determing This is a project about determing
        <span style={{ textDecoration: 'underline' }}>HAI</span>
      </Text>
      <Title
        order={3}
        size='h1'
        underline
        sx={{ textShadow: '2px 2px 4px #00000050' }}
      >
        Contributors
      </Title>
      {/*
        {
          contributors.map((contributor, index) => {
        return <Card name={contributor.name} />;
          })}
           */}
    </Paper>
  );
};

export default AboutUs;
