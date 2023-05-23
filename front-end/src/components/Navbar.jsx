import { useState } from 'react';
import {
  createStyles,
  Header,
  Container,
  Group,
  Burger,
  rem,
  Text,
  Button,
  Anchor,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { NavLink } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },

  links: {
    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('xs')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({
        variant: 'light',
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor })
        .color,
    },
  },
}));
const links = [
  {
    label: 'Home',
    link: '/home',
  },
  {
    label: 'About',
    link: '/about',
  },
  {
    label: 'Features',
    link: '/features',
  },
  {
    label: 'Results',
    link: '/results',
  },
];

const Navbar = () => {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useStyles();

  const items = links.map((link) => (
    <Anchor
      key={link.label}
      href={link.link}
      className={cx(classes.link, {
        [classes.linkActive]: active === link.link,
      })}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
        window.location.href = link.link;
      }}
    >
      {link.label}
    </Anchor>
  ));

  return (
    <Header height={60} mb={120}>
      <Container className={classes.header}>
        <Text color='blue' fz={'xl'} ff={'sans-serif'} fw={900}>
          R-Prediction
        </Text>
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>

        <Burger
          opened={opened}
          onClick={toggle}
          className={classes.burger}
          size='sm'
        />
      </Container>
    </Header>
  );
};

export default Navbar;
