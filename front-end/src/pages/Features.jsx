import { Timeline, Text } from '@mantine/core';
import { IconGitBranch, IconGitPullRequest, IconGitCommit, IconMessageDots } from '@tabler/icons-react';

function Features() {
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
export default Features;
