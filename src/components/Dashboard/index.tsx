import { FC } from 'react';
import Sidebar from '../Sidebar';
import Chat from '../Chat';

const Dashboard: FC = () => {
  return (
    <div className="dashboard_container">
      <Sidebar />
      <Chat />
    </div>
  );
};

export default Dashboard;
