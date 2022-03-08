function SearchBar(props) {
	return (
		<form className='form-inline'>
			<div className='form-group mb-0'>
				<input
					className='form-control search mb-0'
					type='search'
					placeholder='Search players'
					autoComplete='off'
					aria-label='Search'
					value={props.playerQuery}
					onChange={(event) => props.updatePlayerQuery(event.target.value)}
				></input>
			</div>
			<button className='btn btn-dark mx-sm-1 pt-1' type='submit'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='16'
					height='16'
					fill='currentColor'
					className='bi bi-search'
					viewBox='0 0 16 16'
				>
					<path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z' />
				</svg>
			</button>
		</form>
	);
}

export default SearchBar;
