import TeamRow from './TeamRow';
import '../styles/InterfaceTheme.scss';

// IF STATEMENT SORT UPDATE
//onClick={props.setSort(props.currSort === 'name' ? '' : 'name')}

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
							onClick={() => {
								props.setSort(props.currSort === 'name' ? '' : 'name');
							}}
						>
							Team Name
							<CaretSort />
						</th>
						<th
							scope='col'
							className={
								props.currSort === 'city'
									? 'text-center noselect under-anim selected'
									: 'text-center noselect under-anim'
							}
							onClick={() => {
								props.setSort(props.currSort === 'city' ? '' : 'city');
							}}
						>
							City
							<CaretSort />
						</th>
						<th
							scope='col'
							className={
								props.currSort === 'abbreviation'
									? 'text-center noselect under-anim selected'
									: 'text-center noselect under-anim'
							}
							onClick={() => {
								props.setSort(
									props.currSort === 'abbreviation' ? '' : 'abbreviation'
								);
							}}
						>
							Abbreviation
							<CaretSort />
						</th>
						<th
							scope='col'
							className={
								props.currSort === 'conference'
									? 'text-center noselect under-anim selected'
									: 'text-center noselect under-anim'
							}
							onClick={() => {
								props.setSort(
									props.currSort === 'conference' ? '' : 'conference'
								);
							}}
						>
							Conference
							<CaretSort />
						</th>
						<th
							scope='col'
							className={
								props.currSort === 'division'
									? 'text-center noselect under-anim selected'
									: 'text-center noselect under-anim'
							}
							onClick={() => {
								props.setSort(props.currSort === 'division' ? '' : 'division');
							}}
						>
							Division
							<CaretSort />
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

function CaretSort(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='16'
			height='16'
			fill='currentColor'
			className='bi bi-caret-down-fill'
			viewBox='0 0 16 16'
		>
			<path d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z' />
		</svg>
	);
}

export default TeamTable;
