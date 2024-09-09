import { createTheme, MantineColorsTuple } from '@mantine/core';

const myColor: MantineColorsTuple = [
  '#effee7',
  '#e0f8d4',
  '#c2efab',
  '#a2e67e',
  '#87de57',
  '#75d940',
  '#6bd731',
  '#59be23',
  '#4da91b',
  '#3d920c',
];

export const theme = createTheme({
  colors: {
    myColor,
  },
  primaryColor: 'myColor',
  autoContrast: true,
  luminanceThreshold: 0.31,
  defaultRadius: 'lg',
  fontFamily: 'Poppins, Segoe UI, Roboto, Helvetica, Arial, sans-serif',
  headings: {
    fontFamily: 'Poppins, Segoe UI, Roboto, Helvetica, Arial, sans-serif',
  },
});
