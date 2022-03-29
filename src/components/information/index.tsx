import React from 'react';
import { InformationDiv } from './index.styled';

const InformationView: React.FC = () => {
  return (
    <InformationDiv>
      <h2>Triangle Visualizer</h2>
      <p>
        You can type the length of three sides in respective inputs to visualize
        a triangle. Note that the sum of lengths of two sides must be greater
        than the remaining side.
      </p>
    </InformationDiv>
  );
};

export default InformationView;
