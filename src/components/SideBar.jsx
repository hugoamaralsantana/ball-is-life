import { useQuery } from 'react-query';
import Loading from './Loading';
import { Offcanvas } from 'react-bootstrap';

function SideBar(props) {
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
		<>
			{props.selectedTeam ? (
				<>
					<Offcanvas
						show={props.show}
						onHide={props.handleClose}
						placement={'end'}
					>
						<Offcanvas.Header closeButton>
							<Offcanvas.Title>Offcanvas</Offcanvas.Title>
						</Offcanvas.Header>
						<Offcanvas.Body>
							Some text as placeholder. In real life you can have the elements
							you have chosen. Like, text, images, lists, etc.
						</Offcanvas.Body>
					</Offcanvas>
				</>
			) : (
				<></>
			)}
		</>
	);
}

export default SideBar;
