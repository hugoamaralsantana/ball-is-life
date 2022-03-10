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
									<h1>{props.selectedTeam?.name}</h1>
								</Offcanvas.Title>
							</Offcanvas.Header>
							<Offcanvas.Body>
								<div className='container'>
									<div className='row mb-4'>
										<div className='col-sm'>Team Full Name:</div>
										<div className='col-sm'>
											{props.selectedTeam?.full_name}
										</div>
									</div>
									<div className='row mb-5'>
										<div className='col-sm'>Total Games in 2021:</div>
										{!!teamGameData ? (
											<div className='col-sm'>{teamGameData?.length}</div>
										) : (
											<Loading />
										)}
									</div>
									<div className='row mb-4'>
										<div className='col-sm'>
											<h4>Random Game Details:</h4>
										</div>
									</div>
									<div className='row mb-4'>
										<div className='col-sm'>Date:</div>
										{!!teamGame ? (
											<div className='col-sm'>{gameDate}</div>
										) : (
											<Loading />
										)}
									</div>
									<div className='row mb-4'>
										<div className='col-sm'>Home Team:</div>
										{!!teamGame ? (
											<div className='col-sm'>
												{teamGame?.home_team.full_name}
											</div>
										) : (
											<Loading />
										)}
									</div>
									<div className='row mb-4'>
										<div className='col-sm'>Home Team Score:</div>
										{!!teamGame ? (
											<div className='col-sm'>{teamGame?.home_team_score}</div>
										) : (
											<Loading />
										)}
									</div>
									<div className='row mb-4'>
										<div className='col-sm'>Visitor Team:</div>
										{!!teamGame ? (
											<div className='col-sm'>
												{teamGame?.visitor_team.full_name}
											</div>
										) : (
											<Loading />
										)}
									</div>
									<div className='row mb-4'>
										<div className='col-sm'>Visitor Team Score:</div>
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
