import React, { useMemo } from 'react';
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
  const hasError = useMemo(
    () => errorMessages.length > 0,
    [errorMessages.length]
  );

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
