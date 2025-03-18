import React from 'react';

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    // Now we'll just send all messages to be handled by the API
    actions.handleUserMessage(message);
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;
