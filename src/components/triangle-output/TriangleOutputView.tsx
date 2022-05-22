import React, { useState, useEffect } from 'react';
import { TriangleTypes } from 'containers/triangle/TriangleScreen.types';
import ErrorMessagesView from './ErrorMessagesView';
import {
  TriangleOutputDiv,
  TriangleResultSpan,
} from './TriangleOutputView.styled';

interface ITriangleOutputProps {
  type: TriangleTypes | null;
  errorMessages: string[];
}

const TriangleOutputView: React.FC<ITriangleOutputProps> = ({
  type,
  errorMessages,
}) => {
  const [hasError, setHasError] = useState<boolean>(false);

  useEffect(() => {
    setHasError(!!errorMessages.length);
  }, [errorMessages.length]);

  return (
    <TriangleOutputDiv>
      <h3>
        Result:{' '}
        <TriangleResultSpan hasError={hasError}>{type}</TriangleResultSpan>
      </h3>
      {hasError && <ErrorMessagesView messages={errorMessages} />}
    </TriangleOutputDiv>
  );
};

export default TriangleOutputView;
