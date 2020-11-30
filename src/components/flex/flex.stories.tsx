import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import Flex from './flex';
import Box from '../box';

export default {
	title: 'Flexbox',
	component: Flex
} as Meta;

export const Demo: React.FC<{}> = () => (
	<Flex bg="blue" justifyContent="space-between" flexDirection="row">
		<Box>A</Box>
		<Box>B</Box>
		<Box>C</Box>
	</Flex>
);
