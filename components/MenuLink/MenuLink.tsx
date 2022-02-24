import { Box, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { FC } from 'react';

type MenuLinkProps = { title: string; href: string };

const MenuLink: FC<MenuLinkProps> = ({ title, href }) => {
  return (
    <Box pr={4}>
      <Link href={href} passHref>
        <Text cursor="pointer" transition="0.5s ease" fontSize="1.5rem" className="hover-underline-animation">
          {title}
        </Text>
      </Link>
    </Box>
  );
};

export default MenuLink;
