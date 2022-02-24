import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Box, Flex, Text, useColorMode } from '@chakra-ui/react';
import MenuLink from '@components/MenuLink';
import DEFAULTS from '@styles/defaults';
import { FC } from 'react';

const menuLinks = [
  {
    title: 'Genres',
    href: '/genres',
  },
  {
    title: 'Movies',
    href: '/',
  },
  {
    title: 'Directors',
    href: '/directors',
  },
];

const Navbar: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <header>
      <Box h={DEFAULTS.headerHeight} bg={colorMode === 'light' ? 'blue.100' : 'blue.900'}>
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

          <Text cursor="pointer" onClick={toggleColorMode} fontSize="1.5rem">
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </Text>
        </Flex>
      </Box>
    </header>
  );
};

export default Navbar;
