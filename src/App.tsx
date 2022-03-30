import React from 'react';
import styled from '@emotion/styled';
import TriangleScreen from './containers/triangle';
import InformationView from './components/information';

const LayoutDiv = styled.div`
  padding: 2em;
  max-width: 1440px;
  margin: 0 auto;
`;

const App: React.FC = () => (
  <LayoutDiv>
    <InformationView />
    <TriangleScreen />
  </LayoutDiv>
);

export default App;
