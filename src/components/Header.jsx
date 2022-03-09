import SearchBar from './SearchBar';
import '../styles/InterfaceTheme.scss';

function Header(props) {
	return (
		<div className='container mb-4 ml-0'>
			<div className='row'>
				<div className='col'>
					<h1 className='display-1 m-0'>NBA TEAMS.</h1>
				</div>
				<div className='col d-flex align-items-end justify-content-end px-0 pb-3 holder'>
					<SearchBar
						updateTeamQuery={props.updateTeamQuery}
						teamQuery={props.teamQuery}
					/>
				</div>
			</div>
		</div>
	);
}

export default Header;
