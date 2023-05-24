import { Timeline, Text } from '@mantine/core';
import { IconGitBranch, IconGitPullRequest, IconGitCommit, IconMessageDots } from '@tabler/icons-react';

function Demo() {
  return (
    <Timeline active={1} bulletSize={24} lineWidth={2}>
      <Timeline.Item bullet={<IconGitBranch size={12} />} title="HAI Prediction">
        <Text color="dimmed" size="sm">our goal is to predict HAI . <Text variant="link" component="span" inherit>using ML</Text> using ML</Text>
      </Timeline.Item>

      <Timeline.Item bullet={<IconGitCommit size={12} />} title="API Features Column">
        <Text color="dimmed" size="sm">We need to define the features (input variables) that will be <Text variant="link" component="span" inherit>used in the prediction</Text></Text>
        </Timeline.Item>


      <Timeline.Item title="Splitting Data" bullet={<IconGitPullRequest size={12} />} lineVariant="dashed">
        <Text color="dimmed" size="sm">After generating the dataset, <Text variant="link" component="span" inherit>we divided it into numerical and textual data</Text></Text>
       </Timeline.Item>


      <Timeline.Item title="Text Cleaning" bullet={<IconMessageDots size={12} />}>
        <Text color="dimmed" size="sm"><Text variant="link" component="span" inherit>I performed text cleaning techniques such as </Text>removing punctuation, converting capital letters to lowercase, and removing stop words</Text>
       </Timeline.Item>

      <Timeline.Item title="Tokenization" bullet={<IconMessageDots size={12} />}>
        <Text color="dimmed" size="sm"><Text variant="link" component="span" inherit>The textual data was tokenized,</Text> which means converting the text into its root or base form </Text>
        </Timeline.Item>

      <Timeline.Item title="Vectorization" bullet={<IconMessageDots size={12} />}>
        <Text color="dimmed" size="sm"><Text variant="link" component="span" inherit>The tokenized text was transformed</Text>into a numerical representation </Text>
        </Timeline.Item>

      <Timeline.Item title="Standardization" bullet={<IconMessageDots size={12} />}>
        <Text color="dimmed" size="sm"><Text variant="link" component="span" inherit>All the features (numerical and textual)</Text> were combined and standardized</Text>
        </Timeline.Item>

       <Timeline.Item title="Train-Test Split" bullet={<IconMessageDots size={12} />}>
        <Text color="dimmed" size="sm"><Text variant="link" component="span" inherit>The combined dataset was </Text>split into training and testing sets</Text>
        </Timeline.Item>
      
      <Timeline.Item title="Training the Model" bullet={<IconMessageDots size={12} />}>
        <Text color="dimmed" size="sm"><Text variant="link" component="span" inherit>We trained the model using a random forest algorithm,</Text>which is an ensemble method based on decision trees</Text>
        </Timeline.Item>

       <Timeline.Item title="Saving the Model" bullet={<IconMessageDots size={12} />}>
        <Text color="dimmed" size="sm"><Text variant="link" component="span" inherit>Once the model is trained,</Text> we saved it using the pickle library</Text>
        </Timeline.Item>
     
       <Timeline.Item title="FastAPI Integration" bullet={<IconMessageDots size={12} />}>
        <Text color="dimmed" size="sm"><Text variant="link" component="span" inherit>sed FastAPI, a Python web framework,</Text>to build the API</Text>
        </Timeline.Item>

    </Timeline>
  );
}

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
