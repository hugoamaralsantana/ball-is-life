import '../styles/InterfaceTheme.scss';

function TeamRow(props) {
	let teamData = props.team;

	return (
		<tr
			className={teamData.id === props.selectedRow ? 'selected' : ''}
			onClick={() => {
				props.selectTeam(teamData);
				props.setSelectRow(teamData.id);
				props.handleShow();
			}}
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
