import TeamTable from './TeamTable';
import Pagination from './Pagination';
import { useQuery } from 'react-query';
import { useState } from 'react';

const pageSize = 10;

function TablePage(props) {
  const teamsQuery = useQuery('teams', props.teamData); //Pull in team data through props
  const teams = teamsQuery.data?.data; // extract array of team JSON objects from api call response (with null handling)

  const [currPage, setCurrPage] = useState(0);

  const pageStart = currPage * pageSize; //Determine start point for rows that will be displayed
  const pageEnd = pageStart + pageSize; //Determine end point for rows that will be displayed

  //Here I use a ternary operator instead of having all the Error and Loading being handled by if statements
  //If the data is present, display it, otherwise, display a Loading Spinner
  return (
    <>
      {teams ? (
        <>
          <TeamTable teams={teams.slice(pageStart, pageEnd)} />
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

const Loading = () => {
  return (
    <div className='d-flex justify-content-center'>
      <div className='spinner-border' role='status'>
        <span className='sr-only'>Loading...</span>
      </div>
    </div>
  );
};

export default TablePage;
