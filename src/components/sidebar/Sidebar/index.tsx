import { FC } from 'react';
import { NewChatButton, DeleteConvBtn, ListItem } from '../../sidebar';
import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';

const Sidebar: FC = () => {
  const { setSelectedConversationId } = useActions();
  const { conversations } = useTypedSelector((state) => state.dashboards);

  return (
    <div className="sidebar_container">
      <NewChatButton onChooseChat={setSelectedConversationId} />
      {conversations.map((c) => (
        <ListItem key={c.id} title={c.messages[0].content} />
      ))}
      <DeleteConvBtn />
    </div>
  );
};

export default Sidebar;
