import styled from '@emotion/styled';
import { FlexboxProps, flexbox } from 'styled-system';
import Box from '../box';

const Flex = styled(Box)<FlexboxProps>({ display: 'flex' }, flexbox);

export default Flex;
