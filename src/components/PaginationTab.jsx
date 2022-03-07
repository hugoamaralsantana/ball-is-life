import '../styles/InterfaceTheme.scss';

function PaginationTab(props) {
  const isCurrPage = props.currPage === props.pageNum - 1;
  return (
    <li
      class={'page-item' + (isCurrPage ? ' active' : '')}
      onClick={() => props.setCurrPage(props.pageNum - 1)}
    >
      <span class='page-link noselect'>{props.pageNum}</span>
    </li>
  );
}

export default PaginationTab;
