import { FC } from 'react';
import { Sidebar } from '../sidebar';
import { Chat } from '../chat';

const Dashboard: FC = () => {
  return (
    <div className="dashboard_container">
      <Sidebar />
      <Chat />
    </div>
  );
};

export default Dashboard;
