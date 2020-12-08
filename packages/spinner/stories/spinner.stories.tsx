import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Spinner } from '../src';

export default {
  title: 'Spinner',
  component: Spinner
} as Meta;

export const Default: React.FC<{}> = () => {
  return (
    <Spinner size={2} color="brand.primary">
      Hello
    </Spinner>
  );
};
