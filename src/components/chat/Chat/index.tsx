import { FC } from 'react';
import { Messages, NewMessageInput } from '../../chat';

const ChatLogo: FC = () => {
  return (
    <div className="chat_gpt_logo_container">
      <p className="chat_gpt_logo">ChatGPT</p>
    </div>
  );
};

const Chat: FC = () => {
  return (
    <div className="chat_container">
      <div className="chat_selected_container">
        <Messages />
        <NewMessageInput />
      </div>
      {/* <ChatLogo /> */}
    </div>
  );
};

export default Chat;
