import { QueryClient, QueryClientProvider } from 'react-query';
import { useState } from 'react';
import Header from './components/Header';
import SideBar from './components/SideBar';
import TablePage from './components/TablePage';
import './styles/InterfaceTheme.scss';

const queryClient = new QueryClient();
const fetchTeams = () =>
	fetch('https://www.balldontlie.io/api/v1/teams').then((res) => res.json());

function App() {
	const [selectedTeam, selectTeam] = useState(null);

	return (
		<QueryClientProvider client={queryClient}>
			<div className='d-flex text-center'>
				<img
					src={require('./cryingjordan.png')}
					alt='Crying Jordan Loader'
				></img>
				<figure class='text-center'>
					<blockquote class='blockquote'>
						<p>A well-known quote, contained in a blockquote element.</p>
					</blockquote>
					<figcaption class='blockquote-footer'>
						Someone famous in <cite title='Source Title'>Source Title</cite>
					</figcaption>
				</figure>
			</div>
			<div className='m-5' id='fullApp'>
				<Header />
				<TablePage teamData={fetchTeams} selectTeam={selectTeam} />
			</div>
			<SideBar selectedTeam={selectedTeam} selectTeam={selectTeam} />
		</QueryClientProvider>
	);
}

export default App;
