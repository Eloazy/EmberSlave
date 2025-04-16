const actionEmoji = ['🟢', '🟠', '⚫']
const statusEmoji = ['❤️', '🚑', '🚓', '✈️', '🕊️']
async function update() {
	console.groupCollapsed('system (debug)')
	console.dir(document.location)
	if(localStorage.getItem('udt') == null) {
		console.debug('calling user.js')
		await user(false, false)	
	}
	const data = JSON.parse(atob(await localStorage.getItem('udt')))
	// updating HTML
	console.debug('adding image')
	document.getElementById('profileImage').src = `${data.profile_image}`
	console.debug('updating others status')

	let activeStatus = data.last_action.status
	let x = null;
	switch(data.status.state) {
		case 'Okay': x = 0
		break;
		case 'Hospital': x = 1
		break;
		case 'Jail': x = 2
		break;
		case 'Federal': x = 2
		break;
		case 'Traveling':
		case 'Aboard' : 
			x = 3
		break;
		case 'Fallen': x = 4
		break;
		default: x = 2
	}

	document.getElementById('titleImage').textContent =
		activeStatus == 'Online' ? actionEmoji[0] : (activeStatus == 'Idle' ? actionEmoji[1] : actionEmoji[2]) +
		' ' +
		statusEmoji[x] +
		' ' +
		data.name

	document.getElementById('life').textContent	= 'Life: '+data.life.current +'/'+data.life.maximum
	document.getElementById('description').textContent = 'Description: '+data.status.description !== undefined ? data.status.description : 'nothing'
	document.getElementById('faction').textContent = 'Faction: '+data.faction.faction_name+' : '+data.faction.position
	document.getElementById('job').textContent = 'Job: '+(data.job.company_name !== undefined ? data.job.company_name : data.job.job) +' : '+data.job.position
	document.getElementById('la').textContent = 'LA: '+data.last_action.relative
	console.groupEnd()
}