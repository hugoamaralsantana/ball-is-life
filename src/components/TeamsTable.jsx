import { useQuery } from 'react-query';
//import { useState } from 'react';
import '../styles/TableStyle.css';

//let firstIter = true;

function TeamsTable() {
  //const [currPage, setCurrPage] = useState(0);
  //const [pageRows, setPageRows] = useState([]);

  console.log('Rendered');

  const { isLoading, error, data } = useQuery('repoData', () =>
    fetch('https://www.balldontlie.io/api/v1/teams').then((res) => res.json())
  );

  if (isLoading) {
    return (
      <div className='d-flex justify-content-center'>
        <div className='spinner-border' role='status'>
          <span className='sr-only'>Loading...</span>
        </div>
      </div>
    );
  }

  if (error) return 'An error has occurred: ' + error.message;

  let tableData = data.data;

  /*
  let paginationRef = [];

  if (firstIter) {
    if (tableData <= 10) {
      setPageRows(tableData); //HOW DO I NOT RERENDER ON THIS???
      document.getElementsByTagName('nav').forEach((pagBar) => {
        pagBar.style.display = 'none';
      });
    } else {
      while (tableData.length > 10) {
        paginationRef.push(tableData.slice(0, 10));
        tableData = tableData.slice(10, tableData.length);
      }
      setPageRows(paginationRef[currPage]); //HOW DO I NOT RERENDER ON THIS???
    }
    firstIter = false;
  }

  console.log(pageRows);

  */

  function handleRowClick(id) {
    console.log('This row has an id of ' + id);
  }

  return (
    <div>
      <table className='table table-striped table-hover'>
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
          {tableData.map((el, i) => (
            <tr key={i}>
              <td
                className='text-center noselect'
                onClick={() => handleRowClick(i)}
              >
                {el.name}
              </td>
              <td className='text-center noselect'>{el.city}</td>
              <td className='text-center noselect'>{el.abbreviation}</td>
              <td className='text-center noselect'>{el.conference}</td>
              <td className='text-center noselect'>{el.division}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* --- TABLE PAGINATION --- */}

      {/*
      <nav
        className='justify-content-center'
        aria-label='Page navigation example'
      >
        <ul className='pagination'>
          <li
            className='page-link'
            onClick={() => {
              if (currPage > 0) setCurrPage(currPage - 1);
            }}
          >
            Previous
          </li>
          {paginationRef[currPage].map((el, i) => (
            <li key={i} className='page-link' onClick={() => setCurrPage(i)}>
              {i + 1}
            </li>
          ))}
          <li className='page-link' onClick={() => setCurrPage(currPage + 1)}>
            Next
          </li>
        </ul>
      </nav>
      */}
    </div>
  );
}

export default TeamsTable;
