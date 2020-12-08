import { Meta, Story, Props, Canvas } from '@storybook/addon-docs/blocks';
import { Box, BoxProps } from '../src/box';

export default {
  title: 'Box'
};

export const Basic = () => (
  <Box p="20px" bg="brand.primary" width={9}>
    Hello
  </Box>
);
