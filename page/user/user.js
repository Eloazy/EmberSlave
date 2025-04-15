async function user(manualChecker, updateStatus) {
	if (manualChecker !== true && localStorage.getItem('udt') !== null) {return 0}
	console.time('response')
	console.groupCollapsed('system (debug)')
	const response = await fetch('https://api.torn.com/v2/user?selections=profile', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `ApiKey ${await atob(localStorage.getItem('tk'))}`	
		}
	})
	const data = await response.json()
	console.debug(response)
	console.debug(data)
	console.groupEnd()
	console.group('key Response')
	console.timeEnd('response')
	if(localStorage.getItem('udt') == null && updateStatus == false) {
		localStorage.setItem('udt', btoa(await JSON.stringify(data)))
	}
	if(data.player_id == undefined) {
		console.error(`Key error || status ${response.status}`)
	}
	else {
		console.log(`response status, Valid && status: ${response.status}`)
	}
	console.groupEnd()
}