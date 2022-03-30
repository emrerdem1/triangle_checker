import { ITriangleState } from 'containers/triangle/index.types';
import React from 'react';
import ErrorMessagesView from './ErrorMessagesView';
import { TriangleOutputDiv, TriangleResultSpan } from './index.styled';

interface ITriangleOutputProps {
  triangleData: ITriangleState;
}

const TriangleOutputView: React.FC<ITriangleOutputProps> = ({
  triangleData,
}) => {
  const hasError = !!triangleData.errorMessages?.length;

  return (
    <TriangleOutputDiv>
      <h3>
        Result:{' '}
        <TriangleResultSpan hasError={hasError}>
          {triangleData.type}
        </TriangleResultSpan>
      </h3>
      {hasError && <ErrorMessagesView messages={triangleData.errorMessages!} />}
    </TriangleOutputDiv>
  );
};

export default TriangleOutputView;
