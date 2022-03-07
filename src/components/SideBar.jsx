import { useQuery } from 'react-query';
import Loading from './Loading';

function SideBar(props) {
	console.log(props.selectedTeam);

	const selectedTeamGamesQuery = useQuery('selectedTeamGames', () =>
		fetch(
			'' +
				(props.selectedTeam
					? 'https://www.balldontlie.io/api/v1/games/?team_ids[]=' +
					  props.selectedTeam.id
					: 'https://www.balldontlie.io/api/v1/games/')
		).then((res) => res.json())
	); //Pull in team game data from api

	let selectedTeamGames = selectedTeamGamesQuery.data?.data;

	if (selectedTeamGames === null) {
		selectedTeamGames = [];
	}

	// extract array of team JSON objects from api call response (with null handling)

	return (
		<div
			className='offcanvas offcanvas-end'
			tabIndex='-1'
			id='team-details'
			aria-labelledby='Team Details'
		>
			{props.selectedTeam ? (
				<>
					<div className='offcanvas-header'>
						<h5 id='team-name'>{props.selectedTeam.name}</h5>
						<button
							type='button'
							className='btn-close text-reset'
							data-bs-dismiss='offcanvas'
							aria-label='Close'
							onClick={() => {
								props.selectTeam(null);
							}}
						></button>
					</div>
					<div className='offcanvas-body'>
						<h5>{props.selectedTeam.full_name}</h5>
						<h5>{selectedTeamGames.length}</h5>
					</div>
				</>
			) : (
				<Loading />
			)}
		</div>
	);
}

export default SideBar;
