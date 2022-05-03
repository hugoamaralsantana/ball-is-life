import { useQuery } from 'react-query';
import { fetchGames } from '../api';
import { Offcanvas } from 'react-bootstrap';
import Loading from './Loading';

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
									<h1>
										<strong>{props.selectedTeam?.name}</strong>
									</h1>
								</Offcanvas.Title>
							</Offcanvas.Header>
							<Offcanvas.Body>
								<div className='container'>
									<div className='row mb-4'>
										<div className='col-sm'>
											<strong>Team Full Name:</strong>
										</div>
										<div className='col-sm'>
											{props.selectedTeam?.full_name}
										</div>
									</div>
									<div className='row mb-5'>
										<div className='col-sm'>
											<strong>Total Games in 2021:</strong>
										</div>
										{!!teamGameData ? (
											<div className='col-sm'>{teamGameData?.length}</div>
										) : (
											<Loading />
										)}
									</div>
									<div className='row mb-4'>
										<div className='col-sm'>
											<h4>
												<strong>Highlight Game Details:</strong>
											</h4>
										</div>
									</div>
									<div className='row mb-4'>
										<div className='col-sm'>
											<strong>Date:</strong>
										</div>
										{!!teamGame ? (
											<div className='col-sm'>{gameDate}</div>
										) : (
											<Loading />
										)}
									</div>
									<div className='row mb-4'>
										<div className='col-sm'>
											<strong>Home Team:</strong>
										</div>
										{!!teamGame ? (
											<div className='col-sm'>
												{teamGame?.home_team.full_name}
											</div>
										) : (
											<Loading />
										)}
									</div>
									<div className='row mb-4'>
										<div className='col-sm'>
											<strong>Home Team Score:</strong>
										</div>
										{!!teamGame ? (
											<div className='col-sm'>{teamGame?.home_team_score}</div>
										) : (
											<Loading />
										)}
									</div>
									<div className='row mb-4'>
										<div className='col-sm'>
											<strong>Visitor Team:</strong>
										</div>
										{!!teamGame ? (
											<div className='col-sm'>
												{teamGame?.visitor_team.full_name}
											</div>
										) : (
											<Loading />
										)}
									</div>
									<div className='row mb-4'>
										<div className='col-sm'>
											<strong>Visitor Team Score:</strong>
										</div>
										{!!teamGame ? (
											<div className='col-sm'>
												{teamGame?.visitor_team_score}
											</div>
										) : (
											<Loading />
										)}
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
