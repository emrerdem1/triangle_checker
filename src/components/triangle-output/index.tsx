import { ITriangleState } from 'containers/triangle/index.types';
import React from 'react';
import ErrorMessagesView from './ErrorMessagesView';
import { TriangleOutputDiv } from './index.styled';

interface ITriangleOutputProps {
  triangleData: ITriangleState;
}

const TriangleOutputView: React.FC<ITriangleOutputProps> = ({
  triangleData,
}) => {
  return (
    <TriangleOutputDiv>
      <h3>Result: {triangleData.type || '-'}</h3>
      {triangleData.errorMessages?.length && (
        <ErrorMessagesView messages={triangleData.errorMessages} />
      )}
    </TriangleOutputDiv>
  );
};

export default TriangleOutputView;
