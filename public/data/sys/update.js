const version = '1.0.0'
async function verify() {
	try {
		var response = await fetch('https://api.github.com/repos/Eloazy/EmberSlave/releases');
		response = await response.json()
		console.debug('database version: ', response[0]?.tag_name == undefined ? 'null' : response[0]?.tag_name);
		console.debug('client version: ', version)

		if(version == response[0]?.tag_name) {console.debug('updated')}
		else {
			console.warn('require update')
			alert('❤️ Please update API in our database ❤️')
		}
	}catch(err) {console.error(err)}
}