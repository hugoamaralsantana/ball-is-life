import TeamRow from './TeamRow';
import '../styles/InterfaceTheme.scss';

function TeamTable({ teams, ...props }) {
	return (
		<div className='mb-5' id='table-container'>
			<table className='table table-striped table-hover'>
				<thead>
					<tr>
						<th
							scope='col'
							className={
								props.currSort === 'name'
									? 'text-center noselect under-anim selected'
									: 'text-center noselect under-anim'
							}
							onClick={() => props.setSort('name')}
						>
							Team Name
						</th>
						<th
							scope='col'
							className={
								props.currSort === 'city'
									? 'text-center noselect under-anim selected'
									: 'text-center noselect under-anim'
							}
							onClick={() => props.setSort('city')}
						>
							City
						</th>
						<th
							scope='col'
							className={
								props.currSort === 'abbreviation'
									? 'text-center noselect under-anim selected'
									: 'text-center noselect under-anim'
							}
							onClick={() => props.setSort('abbreviation')}
						>
							Abbreviation
						</th>
						<th
							scope='col'
							className={
								props.currSort === 'conference'
									? 'text-center noselect under-anim selected'
									: 'text-center noselect under-anim'
							}
							onClick={() => props.setSort('conference')}
						>
							Conference
						</th>
						<th
							scope='col'
							className={
								props.currSort === 'division'
									? 'text-center noselect under-anim selected'
									: 'text-center noselect under-anim'
							}
							onClick={() => props.setSort('division')}
						>
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
							handleShow={props.handleShow}
						/>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default TeamTable;
