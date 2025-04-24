async function test() {
	console.time('response')
	console.groupCollapsed('system (debug)')
	console.debug('storage: ' + localStorage.getItem('tk'))
	const response = await fetch('https://api.torn.com/v2/key/info', {
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


	if(data.access_level == undefined) {
		console.error('Key error || status !200')
		document.getElementById("status").textContent = "Status: INVALID";
		document.getElementById("acessLv").textContent = "access Lv: INVALID";
	}
	else {
		console.log('keyLoged, Valid && status: 200')
		document.getElementById("status").textContent = `Status: VALID`
		document.getElementById("acessLv").textContent = `acess Lv: ${data.access_level} / ${data.access_type}`
	}
	console.groupEnd()
}