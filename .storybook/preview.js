import React from 'react';
import emotionReset from 'emotion-reset';
import { Global, ThemeProvider, css } from '@emotion/react';
import { addDecorator } from '@storybook/react';
import theme from '../src/theme';

addDecorator((Comp) => (
  <ThemeProvider theme={theme.light}>
    <Global
      styles={css`
        ${emotionReset}
        *, *::after, *::before {
          box-sizing: border-box;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}
    />
    <Comp />
  </ThemeProvider>
));
