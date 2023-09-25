import { FC } from 'react';
import { MessageItem } from '../../chat';

const Messages: FC = () => {
  return (
    <div className="chat_messages_container">
      {/* <MessageItem isAiMessage={false} content="Hello AI" />
      <MessageItem isAiMessage={true} content="Hello, here is AI" /> */}
    </div>
  );
};

export default Messages;
