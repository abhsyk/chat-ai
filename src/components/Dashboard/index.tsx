import { FC } from 'react';
import { Sidebar } from '../sidebar';
import { Chat } from '../chat';
import { LoadingSpinner } from '../ui';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const Dashboard: FC = () => {
  const { sessionEstablished } = useTypedSelector((state) => state.dashboards);

  return (
    <div className="dashboard_container">
      <Sidebar />
      <Chat />
      {!sessionEstablished && <LoadingSpinner />}
    </div>
  );
};

export default Dashboard;
