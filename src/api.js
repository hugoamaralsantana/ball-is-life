export function fetchGames(teamID) {
	const url = new URL('https://www.balldontlie.io/api/v1/games');
	url.searchParams.append('team_ids[]', teamID);
	url.searchParams.append('seasons[]', 2021);
	return fetch(url.toString())
		.then((res) => res.json())
		.then((json) => json.data)
		.catch((err) => {
			return [];
		});
}

export function fetchTeams() {
	return fetch('https://www.balldontlie.io/api/v1/teams')
		.then((res) => res.json())
		.then((json) => json.data)
		.catch((err) => {
			return [];
		});
}
