import PaginationTab from './PaginationTab';
import '../styles/InterfaceTheme.scss';

function Pagination(props) {
  let pageNumArr = [];

  for (let i = 0; i < props.numPages; i++) {
    pageNumArr.push(i + 1);
  }

  const onFirstPage = props.currPage === 0;
  const onLastPage = props.currPage === props.numPages - 1;

  console.log(onFirstPage);

  return (
    <nav aria-label='...' className='d-flex justify-content-center'>
      <ul className='pagination'>
        <li
          className={'page-item' + (onFirstPage ? ' disabled' : '')}
          onClick={
            onFirstPage
              ? undefined
              : () => props.setCurrPage(props.currPage - 1)
          }
        >
          <span class='page-link noselect'>Previous</span>
        </li>
        {pageNumArr.map((pageNum, i) => (
          <PaginationTab
            key={i}
            pageNum={pageNum}
            currPage={props.currPage}
            setCurrPage={props.setCurrPage}
          />
        ))}
        <li
          className={'page-item' + (onLastPage ? ' disabled' : '')}
          onClick={
            onLastPage ? undefined : () => props.setCurrPage(props.currPage + 1)
          }
        >
          <span class='page-link noselect'>Next</span>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
