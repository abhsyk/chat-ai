import { FC } from 'react';
import { NewChatButton, DeleteConvBtn, ListItem } from '../../sidebar';
import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';

const Sidebar: FC = () => {
  const { setSelectedConversationId } = useActions();
  const { conversations } = useTypedSelector((state) => state.dashboards);

  return (
    <div className="sidebar_container">
      <NewChatButton onSelect={setSelectedConversationId} />
      {conversations
        ? conversations.map((c) => (
            <ListItem
              key={c.id}
              title={c.messages[0].content}
              conversationId={c.id}
              onSelect={setSelectedConversationId}
            />
          ))
        : null}
      <DeleteConvBtn />
    </div>
  );
};

export default Sidebar;
