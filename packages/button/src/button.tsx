import React, { ReactNode, ReactElement, forwardRef } from 'react';
import styled, { CSSObject } from '@emotion/styled';
import { SpaceProps, variant, BorderProps, border, compose } from 'styled-system';
import { Spinner } from '@benjammartin/spinner';
import { Box } from '@benjammartin/box';

type AllowedOps = SpaceProps;

const defaultStyles: CSSObject = {
  appearance: 'none',
  outline: 'none',
  cursor: 'pointer',
  display: 'inline-flex',
  fontWeight: 'bold',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  borderRadius: 1,
  height: 4,
  px: 3,
  fontSize: 2,
  border: 'none',
  transition: 'all 1s ease-out'
};

const variants = variant({
  variants: {
    solid: {
      ...defaultStyles,
      bg: 'brand.primary',
      color: 'text.primary',
      borderColor: 'transparent',
      svg: {
        color: 'text.primary'
      },
      '&:hover': {
        backgroundColor: 'brand.hover'
      },
      '&:disabled': {
        color: 'text.disabled',
        backgroundColor: 'brand.primary',
        cursor: 'not-allowed',
        borderColor: 'ui.disabled'
      }
    },
    outline: {
      ...defaultStyles,
      bg: 'transparent',
      color: 'brand.primary',
      borderWidth: 2,
      borderStyle: 'solid',
      borderColor: 'brand.primary',
      svg: {
        color: 'brand.primary'
      },
      '&:hover': {
        bg: 'brand.primary',
        color: 'text.primary'
      },
      '&:disabled': {
        color: 'brand.primary',
        bg: 'transparent',
        cursor: 'not-allowed',
        borderColor: 'ui.disabled'
      }
    }
  }
});

const BaseButton = styled.button<SpaceProps & BorderProps & { full?: boolean }>(variants, compose(border), (props) => ({ width: props.full ? '100%' : 'auto' }));

type Native = React.ComponentPropsWithoutRef<'button'>;

export interface ButtonProps extends AllowedOps {
  variant?: 'outline' | 'solid' | 'ghost';
  type?: 'button' | 'submit' | 'reset';
  disabled?: Native['disabled'];
  onClick?: Native['onClick'];
  id?: Native['id'];
  borderRadius?: BorderProps['borderRadius'];
  full?: boolean;
  loadingText?: string;
  children?: ReactNode;
  loading?: boolean;
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ children, full, loading, loadingText, borderRadius, leftIcon, rightIcon, ...props }, ref) => {
  return (
    <BaseButton ref={ref} borderRadius={borderRadius} full={full} disabled={loading} {...props}>
      {!loading && leftIcon && (
        <Box width={2} as="span" mr={2}>
          {leftIcon}
        </Box>
      )}
      {loading && (
        <Box position={loadingText ? 'relative' : 'absolute'} mr={2} justifyContent="center" alignItems="center">
          <Spinner title={loadingText} size={2} />
        </Box>
      )}
      {loading
        ? loadingText || (
            <Box as="span" opacity={0}>
              {children}
            </Box>
          )
        : children}
      {!loading && rightIcon && (
        <Box width={2} as="span" ml={2}>
          {rightIcon}
        </Box>
      )}
    </BaseButton>
  );
});

Button.defaultProps = {
  variant: 'solid',
  type: 'button',
  full: false
};
