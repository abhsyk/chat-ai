import { FC } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

const NewChatButton: FC = () => {
  return (
    <div className="new_chat_button">
      <div className="new_chat_button_icon">
        <AiOutlinePlus color="white" />
      </div>
      <p className="new_chat_button_text">New Chat</p>
    </div>
  );
};

export default NewChatButton;
