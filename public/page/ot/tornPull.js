export default async function api(ID, stop) {
	var stoploop = true
	stoploop = stop;
	for(var i = 0; i < 1; i*i) {
		if(stoploop == true) {return 0}
		else {
			document.getElementById('stop').addEventListener("click", () => {stoploop = true});
			webhook(await tornCall(ID))
			await new Promise(resolve => setTimeout(resolve, 6*100000))
		}
	}
	
}

async function tornCall(ID) {
	console.time('response')
	console.groupCollapsed('system (debug)')
	const response = await fetch(`https://api.torn.com/v2/faction/${ID}/members?striptags=true`, {
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
	return data
}
async function webhook(content) {
	const response = await fetch('http://localhost:1025/api/ot', {
		method: 'POST',
		headers: {
			'Content-Type':'application/json'
		},
		body: JSON.stringify({ content })
	})
	return 0
}

window.api = api;