import SearchBar from './SearchBar';
import AutoComplete from './AutoComplete';
import { useQuery } from 'react-query';
import { useState } from 'react';

function Header() {
	const [playerQuery, updatePlayerQuery] = useState('');
	const [acPlayers, setACPlayers] = useState([]);

	const playerSearchQuery = useQuery('playerSearch', () =>
		fetch(
			'https://www.balldontlie.io/api/v1/players?page=0&per_page=100&search=' +
				playerQuery
		).then((res) => res.json())
	);

	const queriedPlayers = playerSearchQuery.data?.data;

	if (queriedPlayers !== null) {
		//setACPlayers(queriedPlayers);
	}

	return (
		<div className='container mb-4 ml-0'>
			<div className='row'>
				<div className='col'>
					<h1 className='display-1 m-0'>NBA TEAMS.</h1>
				</div>
				<div className='col d-flex align-items-end justify-content-end px-0 pb-3'>
					<SearchBar
						updatePlayerQuery={updatePlayerQuery}
						playerQuery={playerQuery}
					/>
					<>
						{acPlayers === [] ? (
							<div styles='display:none' />
						) : (
							<AutoComplete
								updatePlayerQuery={updatePlayerQuery}
								autoCompleteList={acPlayers.slice(0, 10)}
								playerQuery={playerQuery}
							/>
						)}
					</>
				</div>
			</div>
		</div>
	);
}

export default Header;
