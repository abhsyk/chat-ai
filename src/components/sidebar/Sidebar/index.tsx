import { FC } from 'react';
import { NewChatButton, DeleteConvBtn, ListItem } from '../../sidebar';
import { useActions } from '../../../hooks/useActions';

const Sidebar: FC = () => {
  const { setSelectedConversationId } = useActions();

  return (
    <div className="sidebar_container">
      <NewChatButton onChooseChat={setSelectedConversationId} />
      <DeleteConvBtn />
    </div>
  );
};

export default Sidebar;
