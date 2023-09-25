import { FC } from 'react';
import NewChatButton from '../NewChatButton';
import ListItem from '../ListItem';
import DeleteConvBtn from '../DeleteConvBtn';

const Sidebar: FC = () => {
  return (
    <div className="sidebar_container">
      <NewChatButton />
      <DeleteConvBtn />
    </div>
  );
};

export default Sidebar;
