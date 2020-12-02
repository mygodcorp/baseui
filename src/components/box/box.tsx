import styled from '@emotion/styled';
import {
  compose,
  space,
  layout,
  flexbox,
  border,
  position,
  color,
  ColorProps,
  SpaceProps,
  PositionProps,
  LayoutProps,
  FlexboxProps,
  BorderProps,
  BackgroundProps
} from 'styled-system';

export type BoxProps = SpaceProps &
  ColorProps &
  LayoutProps &
  FlexboxProps &
  BorderProps &
  PositionProps;

const Box = styled.div<BoxProps>(
  {
    boxSizing: 'border-box',
    minWidth: 0
  },
  compose(space, color, layout, flexbox, border, position, border)
);

export default Box;
