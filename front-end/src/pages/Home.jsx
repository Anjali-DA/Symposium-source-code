import { Container, Button, Image, Text } from '@mantine/core';

const Home = () => {
  return (
    <Container size='xl' style={{ height: '100vh', width: '100vw' }} mt={40}>
      <header className='text-gray-600 body-font'>
        <Container
          mt={10}
          padding='md'
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <Text
            size='xl'
            weight={700}
            component='a'
            href='#'
            style={{ marginRight: '1rem' }}
          >
            R-Prediction
          </Text>
          <nav style={{ marginRight: 'auto' }}>
            <Text
              component='a'
              href='#'
              variant='link'
              size='lg'
              style={{ marginRight: '1rem' }}
            >
              Home
            </Text>
            <Text
              component='a'
              href='#'
              variant='link'
              size='lg'
              style={{ marginRight: '1rem' }}
            >
              About
            </Text>
            <Text
              component='a'
              href='#'
              variant='link'
              size='lg'
              style={{ marginRight: '1rem' }}
            >
              Services
            </Text>
            <Text
              component='a'
              href='#'
              variant='link'
              size='lg'
              style={{ marginRight: '1rem' }}
            >
              Contact
            </Text>
          </nav>
          <Button variant='light' size='lg'>
            Enroll now
          </Button>
        </Container>
      </header>
      <section className='text-gray-600 body-font'>
        <Container
          padding='xl'
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <div style={{ flex: '1', marginRight: '4rem' }}>
            <Text size='4xl' weight={700} style={{ marginBottom: '1rem' }}>
              Let's get ready to be organized
            </Text>
            <Text
              size='4xl'
              weight={700}
              variant='gradient'
              style={{ marginBottom: '2rem' }}
            >
              Health is Wealth
            </Text>
            <Text size='lg' style={{ marginBottom: '2rem' }}>
              To combat HAI and improve PS by the intervention of EHR. HAI is a
              major concern for people.
            </Text>
            <div>
              <Button
                variant='gradient'
                size='xl'
                style={{ marginRight: '1rem' }}
              >
                Button
              </Button>
              <Button variant='light' size='xl' style={{ marginRight: '1rem' }}>
                Button
              </Button>
            </div>
          </div>
          <div style={{ flex: '1' }}>
            <Image
              src='https://dummyimage.com/720x600'
              alt='hero'
              fit='cover'
              radius='md'
            />
          </div>
        </Container>
      </section>
    </Container>
  );
};

export default Home;
