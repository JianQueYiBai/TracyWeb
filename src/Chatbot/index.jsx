import { useState } from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";

import ActionProvider from "./bot/ActionProvider";
import config from "./bot/config";
import MessageParser from "./bot/MessageParser";
import "./chatbot.css"; // Import custom styles

const ChatbotPage = () => {
  const [threadId, setThreadId] = useState(null);
  const [key, setKey] = useState(0); // Key to force re-render chatbot

  const handleNewConversation = () => {
    setThreadId(null);
    setKey((prevKey) => prevKey + 1); // Force re-render by changing key
  };

  return (
    <div>
      <div>
        {/* <button type="primary" onClick={handleNewConversation}>
          New Conversation
        </button> */}
        <div className="chatbot-container">
          <Chatbot
            key={key} // Force re-render when key changes
            config={config}
            messageParser={MessageParser}
            actionProvider={(props) => (
              <ActionProvider
                {...props}
                threadId={threadId}
                setThreadId={setThreadId}
              />
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default ChatbotPage;
