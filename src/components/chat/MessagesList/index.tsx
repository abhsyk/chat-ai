import { FC } from 'react';
import { MessageItem } from '../../chat';
import { useTypedSelector } from '../../../hooks/useTypedSelector';

const MessagesList: FC = () => {
  const { selectedConversationId, conversations } = useTypedSelector(
    (state) => state.dashboards
  );

  const conversation = conversations.find(
    (c) => c.id === selectedConversationId
  );

  return (
    <div className="chat_messages_container">
      {conversation
        ? conversation.messages.map((m, index) => (
            <MessageItem
              key={m.id}
              content={m.content}
              isAiMessage={m.isAiMessage}
              // if it is the latest message from AI, make it animation
              animateText={
                index === conversation.messages.length - 1 && m.animate!
              }
            />
          ))
        : null}
    </div>
  );
};

export default MessagesList;
