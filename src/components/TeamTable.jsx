import TeamRow from './TeamRow';
import '../styles/InterfaceTheme.scss';
import $ from 'jquery';
import { useEffect } from 'react';

function TeamTable({ teams, ...props }) {
  useEffect(() => {
    $('table tbody tr').hide();
    $('table tbody tr').each(function (index) {
      $(this)
        .delay(index * 60)
        .show(120);
    });
  });

  return (
    <div class='mb-5' id='table-container'>
      <table
        className='table table-striped table-hover table-bordered'
        {...props}
      >
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
            <TeamRow key={i} team={team} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TeamTable;
