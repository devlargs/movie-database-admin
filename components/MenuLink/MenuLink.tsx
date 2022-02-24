import { Box } from '@chakra-ui/react';
import Link from 'next/link';
import { FC } from 'react';

type MenuLinkProps = { title: string; href: string };

const MenuLink: FC<MenuLinkProps> = ({ title, href }) => {
  return (
    <Box px={4}>
      <Link href={href}>{title.replace(/./, (c) => c.toUpperCase())}</Link>
    </Box>
  );
};

export default MenuLink;
