import React, { FC } from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { Spinner2 } from '@emotion-icons/evil';
import Box, { BoxProps } from '../box';
import { color, size, space } from 'styled-system';

type Allowed = BoxProps;

interface SpinnerProps extends Allowed {
  color?: string;
  size: number;
  title?: string;
}

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const RotatingLoader = styled(Spinner2)<SpinnerProps>(
  {
    animation: `${spin} 500ms linear 0s infinite`
  },
  color,
  size,
  space
);

const Spinner: FC<SpinnerProps> = ({ title, size, color, ...props }) => (
  <Box {...props}>
    <RotatingLoader color={color} size={size} />
  </Box>
);

Spinner.defaultProps = {
  title: 'Loading…',
  color: 'ui.error',
  size: 2
};
export default Spinner;
