import { QueryClient, QueryClientProvider } from 'react-query';
import Header from './components/Header';
import SideBar from './components/SideBar';
import TablePage from './components/TablePage';

const queryClient = new QueryClient();
const fetchTeams = () =>
  fetch('https://www.balldontlie.io/api/v1/teams').then((res) => res.json());

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className='m-5'>
        <Header />
        <TablePage teamData={fetchTeams} />
      </div>
      <SideBar />
    </QueryClientProvider>
  );
}

export default App;
