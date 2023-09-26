import { FC } from 'react';
import { MessagesList, NewMessageInput } from '../../chat';
import { useTypedSelector } from '../../../hooks/useTypedSelector';

const ChatLogo: FC = () => {
  return (
    <div className="chat_gpt_logo_container">
      <p className="chat_gpt_logo">ChatGPT</p>
    </div>
  );
};

const Chat: FC = () => {
  const { selectedConversationId } = useTypedSelector(
    (state) => state.dashboards
  );

  return (
    <div className="chat_container">
      {!selectedConversationId ? (
        <ChatLogo />
      ) : (
        <div className="chat_selected_container">
          <MessagesList />
          <NewMessageInput />
        </div>
      )}
    </div>
  );
};

export default Chat;
