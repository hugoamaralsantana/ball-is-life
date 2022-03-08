import SearchBar from './SearchBar';
import AutoComplete from './AutoComplete';
import '../styles/InterfaceTheme.scss';
import { useQuery } from 'react-query';
import { useState } from 'react';

function Header() {
  const [playerQuery, updatePlayerQuery] = useState('');

  const playerSearchQuery = useQuery('playerSearch', () =>
    fetch(
      'https://www.balldontlie.io/api/v1/players?search=' + playerQuery
    ).then((res) => res.json())
  );

  const queriedPlayers = playerSearchQuery.data?.data;

  return (
    <div className='container mb-4 ml-0'>
      <div className='row'>
        <div className='col'>
          <h1 className='display-1 m-0'>NBA TEAMS.</h1>
        </div>
        <div className='col d-flex align-items-end justify-content-end px-0 pb-3 holder'>
          <SearchBar
            updatePlayerQuery={updatePlayerQuery}
            playerQuery={playerQuery}
          />
          <>
            {playerQuery === '' ? (
              <div styles='display:none' />
            ) : (
              <AutoComplete
                updatePlayerQuery={updatePlayerQuery}
                autoCompleteList={queriedPlayers.slice(0, 10)}
              />
            )}
          </>
        </div>
      </div>
    </div>
  );
}

export default Header;
