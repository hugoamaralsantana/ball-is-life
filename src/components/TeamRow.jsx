import '../styles/InterfaceTheme.scss';

function TeamRow(props) {
	let teamData = props.team;

	return (
		<tr
			className={teamData.id === props.selectedRow ? 'selected' : ''}
			onClick={() => {
				props.selectTeam(teamData);
				props.setSelectRow(teamData.id);
			}}
			data-bs-toggle='offcanvas show'
			data-href='#team-details'
		>
			<td className='text-center noselect'>{teamData.name}</td>
			<td className='text-center noselect'>{teamData.city}</td>
			<td className='text-center noselect'>{teamData.abbreviation}</td>
			<td className='text-center noselect'>{teamData.conference}</td>
			<td className='text-center noselect'>{teamData.division}</td>
		</tr>
	);
}

export default TeamRow;
