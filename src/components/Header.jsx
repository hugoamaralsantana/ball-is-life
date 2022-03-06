import SearchBar from './SearchBar';

function Header() {
  return (
    <div className='container mb-3'>
      <div className='row'>
        <div className='col'>
          <h1 className='display-1 m-0'>NBA TEAMS</h1>
        </div>
        <div className='col d-flex align-items-end justify-content-end px-0 pb-3'>
          <SearchBar />
        </div>
      </div>
    </div>
  );
}

export default Header;
