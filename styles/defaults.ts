import { StylesConfig } from 'react-select';

type Props = {
  containerMaxWidth: string;
  containerPaddingX: number;
  headerHeight: string;
  select: StylesConfig;
};

const DEFAULTS: Props = {
  containerMaxWidth: '80rem',
  containerPaddingX: 4,
  headerHeight: '4.5rem',
  select: {
    option: () => ({
      background: '#2D3748',
      paddingLeft: 20,
      paddingTop: 4,
      paddingBottom: 4,
      ':hover': {
        background: '#B8220B',
      },
    }),
    menuList: () => ({
      background: '#2D3748',
      border: '1px solid gray',
    }),
    control: (styles) => ({ ...styles, backgroundColor: '#2D3748', border: '1px solid gray', paddingLeft: 5 }),
    multiValue: (styles) => ({ ...styles, background: '#80E6D9 ' }),
    multiValueRemove: (styles) => ({ ...styles, background: '#FEB2B2', color: 'red' }),
  },
};

export default DEFAULTS;
