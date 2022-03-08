function AutoComplete(props) {
	return (
		<div className='dropdown'>
			{props.autoCompleteList.map((player, i) => (
				<div
					key={i}
					onClick={() =>
						props.updatePlayerQuery(player.first_name + ' ' + player.last_name)
					}
				>
					{player.first_name + ' ' + player.last_name}
				</div>
			))}
		</div>
	);
}

export default AutoComplete;
