import { createChatBotMessage } from 'react-chatbot-kit';
import CustomBotMessage from '../components/CustomBotMessage';

const config = {
  initialMessages: [
    createChatBotMessage(`Hello! I'm your AI assistant. How can I help you today?`),
  ],
  botName: 'Tracy',
  customComponents: {
    // Use our custom component for bot messages
    botChatMessage: (props) => <CustomBotMessage {...props} />,
  },
  customStyles: {
    botMessageBox: {
      backgroundColor: '#007aff',
    },
  },
};

export default config;
