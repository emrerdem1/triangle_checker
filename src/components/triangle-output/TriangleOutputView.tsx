import React, { useState, useEffect } from 'react';
import { ITriangleState } from 'containers/triangle/TriangleScreen.types';
import ErrorMessagesView from './ErrorMessagesView';
import {
  TriangleOutputDiv,
  TriangleResultSpan,
} from './TriangleOutputView.styled';

interface ITriangleOutputProps {
  triangleData: ITriangleState;
}

const TriangleOutputView: React.FC<ITriangleOutputProps> = ({
  triangleData,
}) => {
  const [hasError, setHasError] = useState<boolean>(false);

  useEffect(() => {
    setHasError(!!triangleData.errorMessages?.length);
  }, [triangleData]);

  return (
    <TriangleOutputDiv>
      <h3>
        Result:{' '}
        <TriangleResultSpan hasError={hasError}>
          {triangleData.type}
        </TriangleResultSpan>
      </h3>
      {hasError && <ErrorMessagesView messages={triangleData.errorMessages} />}
    </TriangleOutputDiv>
  );
};

export default TriangleOutputView;
