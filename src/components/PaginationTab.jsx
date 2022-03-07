import '../styles/InterfaceTheme.scss';

function PaginationTab(props) {
	const isCurrPage = props.currPage === props.pageNum - 1;
	return (
		<li
			className={'page-item' + (isCurrPage ? ' active' : '')}
			onClick={() => props.setCurrPage(props.pageNum - 1)}
		>
			<span className='page-link noselect'>{props.pageNum}</span>
		</li>
	);
}

export default PaginationTab;
