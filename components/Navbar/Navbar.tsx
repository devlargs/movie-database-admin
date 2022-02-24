import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Box, Flex, Text, useColorMode } from '@chakra-ui/react';
import MenuLink from '@components/MenuLink';
import DEFAULTS from '@styles/defaults';
import Image from 'next/image';
import { FC } from 'react';

const menuLinks = [
  {
    title: 'Genres',
    href: '/genres',
  },
  {
    title: 'movies',
    href: '/',
  },
  {
    title: 'directors',
    href: '/directors',
  },
];

const Navbar: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <header>
      <Box h={DEFAULTS.headerHeight} bg={colorMode === 'light' ? 'blue.100' : 'blue.900'}>
        <Flex justifyContent="space-between" maxW={DEFAULTS.containerMaxWidth} m="auto" alignItems="center" h="100%">
          <Box>
            <Flex alignItems="center">
              <Image src={`/images/logo-${colorMode}.png`} alt="Logo" width={130} height={28} />
              <Flex ml={4}>
                {menuLinks.map((link) => (
                  <MenuLink href={`/${link.href}`} title={link.title} key={link.href} />
                ))}
              </Flex>
            </Flex>
          </Box>
          <Text cursor="pointer" onClick={toggleColorMode} fontSize="2xl">
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </Text>
        </Flex>
      </Box>
    </header>
  );
};

export default Navbar;
