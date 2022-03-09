import { QueryClient, QueryClientProvider } from 'react-query';
import { useState } from 'react';
import Header from './components/Header';
import SideBar from './components/SideBar';
import TablePage from './components/TablePage';
import './styles/InterfaceTheme.scss';

const queryClient = new QueryClient();

function App() {
	const [selectedTeam, selectTeam] = useState({ id: 0 });
	const [selectedRow, setSelectRow] = useState(-1);
	const [teamQuery, updateTeamQuery] = useState('');

	const [show, setShow] = useState(true);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

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
				className='d-flex align-items-center justify-content-center'
			>
				<div
					id='inner-overlay'
					className='d-flex align-items-center justify-content-center'
				>
					<img
						src={require('./cryingjordan.png')}
						alt='Crying Jordan Loader'
						className='text-center'
					></img>
				</div>
				<div
					id='inner-overlay'
					className='d-flex align-items-center justify-content-center'
				>
					<figure className='text-center'>
						<blockquote className='blockquote'>
							<p>{mjQuotes[Math.floor(Math.random() * 4)]}</p>
						</blockquote>
						<figcaption className='blockquote-footer'>
							Michael Jordan
						</figcaption>
					</figure>
				</div>
			</div>
			<div className='m-5' id='fullApp'>
				<Header updateTeamQuery={updateTeamQuery} teamQuery={teamQuery} />
				<TablePage
					selectTeam={selectTeam}
					handleShow={handleShow}
					teamQuery={teamQuery}
					selectedRow={selectedRow}
					setSelectRow={setSelectRow}
				/>
			</div>
			<SideBar
				selectedTeam={selectedTeam}
				selectTeam={selectTeam}
				show={show}
				handleClose={handleClose}
				setSelectRow={setSelectRow}
			/>
		</QueryClientProvider>
	);
}

export default App;
