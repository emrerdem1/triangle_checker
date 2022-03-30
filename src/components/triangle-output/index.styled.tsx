import styled from '@emotion/styled';
import { CenteredContainerDiv } from 'components/common/styled';

export const TriangleOutputDiv = styled(CenteredContainerDiv)`
  flex-direction: column;
`;

interface IResultSpanProps {
  hasError: boolean;
}
export const TriangleResultSpan = styled.span<IResultSpanProps>`
  text-transform: capitalize;
  color: ${(props) => (props.hasError ? 'red' : 'green')};
`;
