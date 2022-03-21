import { Box, Flex } from '@chakra-ui/react';
import MenuLink from '@components/MenuLink';
import DEFAULTS from '@styles/defaults';
import { FC } from 'react';

const menuLinks = [
  {
    title: 'Movies',
    href: '/',
  },
  {
    title: 'Genres',
    href: '/genres',
  },

  {
    title: 'Directors',
    href: '/directors',
  },
];

const Navbar: FC = () => {
  return (
    <header>
      <Box h={DEFAULTS.headerHeight} bg="blue.900">
        <Flex
          justifyContent="space-between"
          maxW={DEFAULTS.containerMaxWidth}
          px={DEFAULTS.containerPaddingX}
          m="auto"
          alignItems="center"
          h="100%"
        >
          <Flex>
            {menuLinks.map((link) => (
              <MenuLink href={`${link.href}`} title={link.title} key={link.href} />
            ))}
          </Flex>
        </Flex>
      </Box>
    </header>
  );
};

export default Navbar;
