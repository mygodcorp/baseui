import styled from '@emotion/styled';
import { FlexboxProps, flexbox } from 'styled-system';
import { Box } from '@benjammartin/box';

export const Flex = styled(Box)<FlexboxProps>({ display: 'flex' }, flexbox);
