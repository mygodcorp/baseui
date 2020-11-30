import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import Button from './button';
import Flex from '../flex';
import Box from '../box';
import { Amazon, Audible } from '@emotion-icons/boxicons-logos';
import { Call } from '@emotion-icons/material-outlined';
import { useState } from 'react';

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
