import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Button } from '../src';

export default {
  title: 'Button',
  component: Button
} as Meta;

export const Default: React.FC<{}> = () => {
  return (
    <Button loading id="hello" variant="solid">
      Hello
    </Button>
  );
};

export const Outlined: React.FC<{}> = () => {
  return (
    <Button loading id="hello" variant="outline">
      Hello
    </Button>
  );
};
