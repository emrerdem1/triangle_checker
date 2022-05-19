import styled from '@emotion/styled';
import { CenteredContainerDiv } from 'components/common/styled';

export const InformationDiv = styled(CenteredContainerDiv)`
  flex-direction: column;
  align-items: center;
  // Prevent the explanation text to expand all the way for the readibility.
  max-width: 550px;
`;
