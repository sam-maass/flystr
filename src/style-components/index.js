import styled from 'styled-components';
import { color, fontSize, lineHeight } from './vars';

export const Container = styled.div`
  margin: auto;
  max-width: 1024px;
  padding: 0 24px;
`;

export const FlexRow = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
`;

export const Heading1 = styled.h1`
  font-family: 'Raleway', sans-serif;
  font-size: ${fontSize.large};
  color: ${color.darkgray};
  line-height: ${lineHeight.large};
`;

export const Heading2 = styled.h2`
  font-family: 'Raleway', sans-serif;
  font-size: ${fontSize.large};
  color: ${color.darkgray};
  line-height: ${lineHeight.large};
`;

export const Heading3 = styled.h2`
  font-family: 'Raleway', sans-serif;
  font-size: ${fontSize.large};
  color: ${color.darkgray};
  line-height: ${lineHeight.large};
`;

export const FlowText = styled.p`
  font-family: 'Raleway', sans-serif;
  font-size: ${fontSize.base};
  color: ${color.black};
  line-height: ${lineHeight.base};
`;
