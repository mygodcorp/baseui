import * as React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import Box from '../src';

export default {
  title: 'Box',
  component: Box
} as Meta;

export const Demo: React.FC<{}> = () => (
  <Box size={4} bg="brand.primary">
    Hello Box
  </Box>
);
