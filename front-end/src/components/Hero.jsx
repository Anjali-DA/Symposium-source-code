import {
  createStyles,
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
  rem,
} from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
  inner: {
    display: 'flex',
    justifyContent: 'space-around',
    paddingTop: `calc(${theme.spacing.md} / 4)`,
    paddingBottom: `calc(${theme.spacing.xl} * 4)`,
  },

  content: {
    maxWidth: rem(480),
    marginRight: `calc(${theme.spacing.xl} * 3)`,

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(30),
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan('xs')]: {
      fontSize: rem(28),
    },
  },

  control: {
    [theme.fn.smallerThan('xs')]: {
      flex: 1,
    },
  },

  image: {
    flex: 1,

    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },

  highlight: {
    position: 'relative',
    backgroundColor: theme.fn.variant({
      variant: 'light',
      color: theme.primaryColor,
    }).background,
    borderRadius: theme.radius.sm,
    padding: `${rem(4)} ${rem(12)}`,
  },
}));

const Hero = () => {
  const { classes } = useStyles();
  return (
    <div>
      <Container>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title} order={3} size={"h5"}>
              Unlocking  <span className={classes.highlight}>the Power of Machine Learning:</span> React <br />{' '}
              Predicting HAI Risk using EHR Data
            </Title>
            <Text color='dimmed' mt='md'>
              At [R-Prediction], we are revolutionizing healthcare with our groundbreaking machine learning model for HAI Risk prediction.
              By harnessing the power of electronic health record (EHR) data,we can accurately assess individual
              HAI risk and take proactive measures to prevent potential HAI-related issues.
            </Text>

            <Group mt={30}>
              <Button
                radius='xl'
                size='md'
                className={classes.control}
                onClick={() => {
                  window.location.href = '/report';
                }}
              >
                Get Report
              </Button>
            </Group>
          </div>
          <Image
            src={'https://ui.mantine.dev/_next/static/media/image.9a65bd94.svg'}
            className={classes.image}
          />
        </div>
      </Container>
    </div>
  );
};

export default Hero;
