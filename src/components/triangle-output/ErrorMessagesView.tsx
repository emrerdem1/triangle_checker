import React from 'react';
import { BulletPointsDiv } from './ErrorMessagesView.styled';

interface IErrorMessagesProps {
  messages: string[];
}

const ErrorMessagesView: React.FC<IErrorMessagesProps> = ({ messages }) => {
  return (
    <BulletPointsDiv>
      {messages.map((message, idx) => (
        <p key={message + idx}>* {message}</p>
      ))}
    </BulletPointsDiv>
  );
};

export default ErrorMessagesView;
