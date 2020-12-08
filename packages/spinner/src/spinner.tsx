import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Spinner8 } from 'emotion-icons/icomoon';
import { keyframes } from '@emotion/react';
import { Box, BoxProps } from '@benjammartin/box';
import { color, size, space } from 'styled-system';

type Allowed = BoxProps;

export interface SpinnerProps extends Allowed {
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

const RotatingLoader = styled(Spinner8)<SpinnerProps>(
  {
    animation: `${spin} 500ms linear 0s infinite`
  },
  color,
  size,
  space
);

export const Spinner: FC<SpinnerProps> = ({ title, size, color, ...props }) => (
  <Box {...props}>
    <RotatingLoader color={color} size={size} />
  </Box>
);

Spinner.defaultProps = {
  title: 'Loading…',
  color: 'ui.error',
  size: 2
};
