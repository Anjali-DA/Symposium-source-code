import { Container, Text, Title } from '@mantine/core';
import { Fragment } from 'react';

function Content() {
    return (
        <Fragment>
            <Container bg={'#f7fafc'} fluid pt={10} >
                <div>
                    <Title order={5} color="Blue" weight={800} bg={"gray.3"} p={2} pl={10} >
                        Introduction
                    </Title>
                    <Text size="sm" pt={7} pb={15} style={{ textAlign: 'justify' }} >
                        Hospital-acquired infections (HAIs) affect millions worldwide, with 10% of patients in impoverished countries and 7% in affluent nations contracting healthcare-related infections. In the US alone, HAIs cause 1.7 million infections and 99,000 deaths annually, with an economic burden of $28 billion to $45 billion per year. The most common HAIs include bloodstream infections, pneumonia, urinary tract infections, and surgical site infections. This research aims to develop a machine-learning model using patient and hospital data to predict HAI risk accurately. By utilizing advanced algorithms like Random Forest, the model can identify factors increasing infection likelihood and generate personalized risk scores, enabling targeted prevention and early interventions to improve patient safety and reduce HAIs in hospitals.
                    </Text>
                </div>

                <div>
                    <Title order={5} color="Blue" weight={800} bg={"gray.3"} p={2} pl={10}>
                        ML model
                    </Title>
                    <Text size="sm" style={{ textAlign: 'justify' }}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga illum, earum dignissimos nam sapiente hic. Inventore in temporibus voluptatem, molestiae debitis minus optio. Vitae praesentium, veritatis nam beatae ipsa recusandae?
                    </Text>
                </div>

                <div>
                    <Title order={5} color="Blue" weight={800} bg={"gray.3"} p={2} pl={10}>
                        Future Goal
                    </Title>
                    <Text size="sm" pt={7} pb={15} style={{ textAlign: 'justify' }}>
                        In future goals, we plan to collect Electronic Health Record (EHR) data incorporating the necessary features to enhance the accuracy of our algorithm in predicting infections. We aim to improve the model's capabilities to predict a wider range of Hospital-acquired infections (HAIs), covering almost all types of infections. we strive to achieve higher precision in identifying infection risks and generating personalized risk scores. Ultimately, our goal is to provide healthcare facilities with a powerful tool that can effectively predict and prevent HAIs, leading to improved patient safety and reduced infection rates.
                    </Text>
                </div>
            </Container>
        </Fragment>
    );
}
export default Content