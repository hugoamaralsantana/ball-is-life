import { QueryClient, QueryClientProvider } from 'react-query';
import Header from './components/Header';
import SideBar from './components/SideBar';
import TeamsTable from './components/TeamsTable';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className='m-5'>
        <Header />
        <TeamsTable />
      </div>
      <SideBar />
    </QueryClientProvider>
  );
}

export default App;
