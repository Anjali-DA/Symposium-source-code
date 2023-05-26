
import { Text, Title, Paper } from '@mantine/core';
import Card from './../components/Card';

const contributors = [
  {
    name: 'Sriya',
    github: 'sriya@mail.com',
    role: 'Frontend',
  },
  {
    name: 'Dishant Yadav',
    github: 'dishant-yadav',
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
 "what is in API," an API (Application Programming Interface) is a set of rules and protocols that allows 
 different software applications to communicate with each other. 
 In this context, the API that I have mentioned likely receives data from the frontend as input,
 performs preprocessing or other operations on that data, 
 and returns the predicted outcome or any relevant information back to the frontend.
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
