import TeamRow from './TeamRow';
import '../styles/InterfaceTheme.scss';

function TeamTable({ teams, ...props }) {
	return (
		<div className='mb-5' id='table-container'>
			<table className='table table-striped table-hover table-bordered'>
				<thead className='thead-dark'>
					<tr>
						<th scope='col' className='text-center'>
							Team Name
						</th>
						<th scope='col' className='text-center'>
							City
						</th>
						<th scope='col' className='text-center'>
							Abbreviation
						</th>
						<th scope='col' className='text-center'>
							Conference
						</th>
						<th scope='col' className='text-center'>
							Division
						</th>
					</tr>
				</thead>
				<tbody>
					{teams.map((team, i) => (
						<TeamRow key={i} team={team} selectTeam={props.selectTeam} />
					))}
				</tbody>
			</table>
		</div>
	);
}

export default TeamTable;
