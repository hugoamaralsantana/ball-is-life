import { useQuery } from 'react-query';
import { fetchGames } from '../api';
import { Offcanvas } from 'react-bootstrap';

function SideBar(props) {
	const selectedTeamGamesQuery = useQuery(
		['selectedTeamGames', props.selectedTeam?.id],
		({ queryKey }) => fetchGames(queryKey[1]),
		{ enabled: !!props.selectedTeam?.id }
	);

	if (!selectedTeamGamesQuery.data) {
		return <></>;
	} else {
		const teamGameData = selectedTeamGamesQuery?.data;
		const teamGame = teamGameData[0];
		const gameDate = new Date(teamGame?.date).toLocaleDateString('en-CA');

		return (
			<>
				{props.selectedTeam ? (
					<>
						<Offcanvas
							show={props.show}
							onHide={props.handleClose}
							placement={'end'}
							className={'offcanvas'}
						>
							<Offcanvas.Header closeButton>
								<Offcanvas.Title className='ml-2 mt-2'>
									<h1>{props.selectedTeam?.name}</h1>
								</Offcanvas.Title>
							</Offcanvas.Header>
							<Offcanvas.Body>
								<div class='container'>
									<div class='row mb-4'>
										<div class='col-sm'>Team Full Name:</div>
										<div class='col-sm'>{props.selectedTeam?.full_name}</div>
									</div>
									<div class='row mb-5'>
										<div class='col-sm'>Total Games in 2021:</div>
										<div class='col-sm'>{teamGameData?.length}</div>
									</div>
									<div class='row mb-4'>
										<div class='col-sm'>
											<h4>Random Game Details:</h4>
										</div>
									</div>
									<div class='row mb-4'>
										<div class='col-sm'>Date:</div>
										<div class='col-sm'>{gameDate}</div>
									</div>
									<div class='row mb-4'>
										<div class='col-sm'>Home Team:</div>
										<div class='col-sm'>{teamGame.home_team.full_name}</div>
									</div>
									<div class='row mb-4'>
										<div class='col-sm'>Home Team Score:</div>
										<div class='col-sm'>{teamGame.home_team_score}</div>
									</div>
									<div class='row mb-4'>
										<div class='col-sm'>Visitor Team:</div>
										<div class='col-sm'>{teamGame.visitor_team.full_name}</div>
									</div>
									<div class='row mb-4'>
										<div class='col-sm'>Visitor Team Score:</div>
										<div class='col-sm'>{teamGame.visitor_team_score}</div>
									</div>
								</div>
							</Offcanvas.Body>
						</Offcanvas>
					</>
				) : (
					<></>
				)}
			</>
		);
	}
}

export default SideBar;
