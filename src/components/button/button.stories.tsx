import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import Button from './button';

export default {
  title: 'Button',
  component: Button
} as Meta;

export const Default: React.FC<{}> = () => {
  return (
    <Button id="hello" loading variant="solid">
      Hello
    </Button>
  );
};
