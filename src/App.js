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

	const mjQuotes = [
		'The key to success is failure.',
		'Failure makes me work even harder',
		"I've never been afraid to fail",
		'If you do the work, you get rewarded. There are no shortcuts in life.',
	];

	return (
		<QueryClientProvider client={queryClient}>
			<div
				id='loading-overlay'
				class='d-flex align-items-center justify-content-center'
			>
				<div
					id='inner-overlay'
					class='d-flex align-items-center justify-content-center'
				>
					<img
						src={require('./cryingjordan.png')}
						alt='Crying Jordan Loader'
						className='text-center'
					></img>
				</div>
				<div
					id='inner-overlay'
					class='d-flex align-items-center justify-content-center'
				>
					<figure class='text-center'>
						<blockquote class='blockquote'>
							<p>{mjQuotes[Math.floor(Math.random() * 4)]}</p>
						</blockquote>
						<figcaption class='blockquote-footer'>Michael Jordan</figcaption>
					</figure>
				</div>
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
