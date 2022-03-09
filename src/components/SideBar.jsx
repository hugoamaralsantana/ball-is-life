import { useQuery } from 'react-query';
import { fetchGames } from '../api';
import { Offcanvas } from 'react-bootstrap';

function SideBar(props) {
	const selectedTeamGamesQuery = useQuery('selectedTeamGames', () => {
		fetchGames(props.selectTeam);
	});

	const teamGame = selectedTeamGamesQuery;
	console.log('TEAM ' + teamGame);

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
							<Offcanvas.Title className='ml-4 mt-2'>
								<h1>Title</h1>
							</Offcanvas.Title>
						</Offcanvas.Header>
						<Offcanvas.Body>
							<h5 className='mb-4'>
								<strong>Team Full Name: </strong>
							</h5>
							<h5>Total Games in 2021: </h5>
							<h3 className='mt-5 mb-3'>Random Game Details:</h3>
							<h5 className='mb-4'></h5>
							<h5 className='mb-4'>Home Team: </h5>
							<h5 className='mb-4'>Home Team Score: </h5>
							<h5 className='mb-4'>Visitor Team: </h5>
							<h5 className='mb-4'>Visitor Team Score: </h5>
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
