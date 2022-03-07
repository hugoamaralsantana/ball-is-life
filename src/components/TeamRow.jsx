import '../styles/InterfaceTheme.scss';

function TeamRow(props) {
  function handleRowClick(id) {
    console.log(id);
  }

  let teamData = props.team;

  return (
    <tr onClick={() => handleRowClick(props.id)}>
      <td className='text-center noselect'>{teamData.name}</td>
      <td className='text-center noselect'>{teamData.city}</td>
      <td className='text-center noselect'>{teamData.abbreviation}</td>
      <td className='text-center noselect'>{teamData.conference}</td>
      <td className='text-center noselect'>{teamData.division}</td>
    </tr>
  );
}

export default TeamRow;
