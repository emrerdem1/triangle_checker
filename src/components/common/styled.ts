import styled from '@emotion/styled';
import { GutterSizes } from 'utils/constants';

interface ICenteredContainerProps {
  // Default gutter size is LG.
  // TODO: You might consider adding Record's to access constants.
  verticalGutter?: GutterSizes;
}

export const CenteredContainerDiv = styled.div<ICenteredContainerProps>`
  display: flex;
  justify-content: center;
  max-width: 350px;
  margin: 0 auto
    ${(props) => (props.verticalGutter == GutterSizes.MD ? '3.5em' : '5em')};
`;
