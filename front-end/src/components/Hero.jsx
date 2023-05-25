import { createStyles, Container, Title, Text, Button, rem, Anchor } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  root: {
    backgroundColor: '#11284b',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundImage:
      'linear-gradient(250deg, rgba(130, 201, 30, 0) 0%, #062343 70%), url(https://th.bing.com/th/id/R.be51cc2ef9ffd13784d2f5c5a5c133da?rik=89zjjUi20y4FCQ&riu=http%3a%2f%2fwww.radiomiapanama.com%2fm%2fp%2f770x410%2fmedia%2ffiles%2f7640-media.jpg&ehk=Q01OEQQ4DscUtKmQ9AmrzcSybKkSJLTQjHr2BfIap%2fA%3d&risl=&pid=ImgRaw&r=0)',
    // paddingTop: `calc(${theme.spacing.xl} * 3)`,
    // paddingBottom: `calc(${theme.spacing.xl} * 3)`,

  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '770px',
    [theme.fn.smallerThan('md')]: {
      flexDirection: 'column',
    },
  },

  image: {
    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },

  content: {
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
    marginRight: `calc(${theme.spacing.xl} * 3)`,

    [theme.fn.smallerThan('md')]: {
      marginRight: 0,
    },
  },

  title: {
    color: theme.white,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    lineHeight: 1.05,
    maxWidth: rem(600),
    fontSize: rem(48),

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      fontSize: rem(34),
      lineHeight: 1.15,
    },
  },

  description: {
    color: theme.white,
    opacity: 0.85,
    maxWidth: rem(500),

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
    },
  },

  control: {
    paddingLeft: rem(50),
    paddingRight: rem(50),
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(22),

    [theme.fn.smallerThan('md')]: {
      width: '100%',
    },
  },
}));

export default function Hero() {
  const { classes } = useStyles();
  return (
    <div className={classes.root} >
      <Container size="lg">
        {/* <Navbar /> */}
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              Predicting{' '}
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: 'pink', to: 'yellow' }}
              >
                Hospital Acquired Infection
              </Text>{' '}
              using Machine Learning
            </Title>

            <Text className={classes.description} mt={20}>
              The Machine Learning model developed utilizes an efficient working algorithm called Random Forest, which achieves an impressive accuracy rate of 92.5%. <Text>This can predict the name of HAI-Infection for better precaution and treatment.
                <span style={{ fontWeight: '800' }}> Precaution is better than cure!</span></Text>
            </Text>

            <Button
              variant="gradient"
              gradient={{ from: 'pink', to: 'yellow' }}
              size="xl"
              className={classes.control}
              mt={18}
            >
              <Anchor href='/report' color={'white'} underline={false} >Predict HAI</Anchor>

            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}