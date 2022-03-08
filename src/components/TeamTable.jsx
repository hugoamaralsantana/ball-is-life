import TeamRow from './TeamRow';
import '../styles/InterfaceTheme.scss';

function TeamTable({ teams, ...props }) {
	return (
		<div className='mb-5' id='table-container'>
			<table className='table table-striped table-hover'>
				<thead>
					<tr>
						<th scope='col' className='text-center noselect'>
							Team Name
						</th>
						<th scope='col' className='text-center noselect'>
							City
						</th>
						<th scope='col' className='text-center noselect'>
							Abbreviation
						</th>
						<th scope='col' className='text-center noselect'>
							Conference
						</th>
						<th scope='col' className='text-center noselect'>
							Division
						</th>
					</tr>
				</thead>
				<tbody>
					{teams.map((team, i) => (
						<TeamRow
							key={i}
							team={team}
							selectTeam={props.selectTeam}
							setSelectRow={props.setSelectRow}
							selectedRow={props.selectedRow}
						/>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default TeamTable;
