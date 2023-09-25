import { useEffect } from 'react';
import Dashboard from './components/Dashboard';
import { connectWithSocketServer } from './util/socketConnection';

function App() {
  useEffect(() => {
    // connect socket server
    connectWithSocketServer();
  }, []);

  return (
    <div className="App">
      <Dashboard />
    </div>
  );
}

export default App;
