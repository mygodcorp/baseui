import { Meta, Story, Props, Canvas } from '@storybook/addon-docs/blocks';
import { Box, BoxProps } from '../src/box';

export default {
  title: 'Box'
};

export const Basic = () => (
  <Box p="20px" bg="red" width="200px">
    Hello
  </Box>
);
