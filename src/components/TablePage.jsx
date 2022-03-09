import TeamTable from './TeamTable';
import Pagination from './Pagination';
import Loading from './Loading';
import { useQuery } from 'react-query';
import { useState } from 'react';
import { fetchTeams } from '../api.js';

const pageSize = 10;

const sort_by = (field, reverse, primer) => {
	const key = primer
		? function (x) {
				return primer(x[field]);
		  }
		: function (x) {
				return x[field];
		  };

	reverse = !reverse ? 1 : -1;

	return function (a, b) {
		return (a = key(a)), (b = key(b)), reverse * ((a > b) - (b > a));
	};
};

function TablePage(props) {
	const teamsQuery = useQuery('teams', fetchTeams); //Pull in team data through props
	const teams = teamsQuery?.data; // extract array of team JSON objects from api call response (with null handling)

	const [currPage, setCurrPage] = useState(0);
	const [currSort, setSort] = useState('');

	console.log(currSort);

	const pageStart = currPage * pageSize; //Determine start point for rows that will be displayed
	const pageEnd = pageStart + pageSize; //Determine end point for rows that will be displayed

	if (currSort !== '') {
		teams.sort(sort_by(currSort, false, (a) => a.toUpperCase()));
	} else {
		teams.sort(
			sort_by('id', false, (a, b) => parseFloat(a.id) - parseFloat(b.id))
		);
	}

	let fillTeams = teams;

	if (props.teamQuery !== '') {
		fillTeams = teams.filter((team) => {
			return team.full_name
				.toUpperCase()
				.includes(props.teamQuery.toUpperCase());
		});
	}

	//Here I use a ternary operator instead of having all the Error and Loading being handled by if statements
	//If the data is present, display it, otherwise, display a Loading Spinner
	return (
		<>
			{teams ? (
				<>
					<TeamTable
						teams={fillTeams.slice(pageStart, pageEnd)}
						selectTeam={props.selectTeam}
						setSelectRow={props.setSelectRow}
						selectedRow={props.selectedRow}
						currSort={currSort}
						setSort={setSort}
						handleShow={props.handleShow}
					/>
					<Pagination
						currPage={currPage}
						numPages={teams.length / pageSize}
						setCurrPage={setCurrPage}
					/>
				</>
			) : (
				<Loading />
			)}
		</>
	);
}

export default TablePage;
