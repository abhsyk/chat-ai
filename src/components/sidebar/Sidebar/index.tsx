import { FC } from 'react';
import NewChatButton from '../NewChatButton';
import ListItem from '../ListItem';

const Sidebar: FC = () => {
  return (
    <div className="sidebar_container">
      Sidebar
      <NewChatButton />
      <ListItem />
    </div>
  );
};

export default Sidebar;
