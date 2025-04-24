import { EmbedBuilder, WebhookClient } from 'discord.js'
import express from 'express'
import path from 'path'

// create express
const app = express()

//upload site archives
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

//server response
app.get('/', (req, res) => {
	res.send('By Eloazy[3028393]')
})

app.post('/api/ot', async(req, res) => {
	var string = null
	const now = new Date();
	string = '<t:'+Math.floor(now.getTime(now.toISOString()) / 1000)+':f>' + '\n';
	for(var i = 0; i<req.body.content.members.length; i++) {
		string += req.body.content.members[i].last_action.status == "Online" ? `🟢 ${req.body.content.members[i].name}` : (req.body.content.members[i].last_action.status == "Idle" ? `🟠 ${req.body.content.members[i].name} ` : `🔴 ${req.body.content.members[i].name}`)
		string += '\n'
	}
	
	const webhookClient = new WebhookClient({ url: 'https://discord.com/api/webhooks/1364367624418496552/azxxpheV2wxebcGTH00Sx9ISd-DiMfT5AnPPQS54INOagFD3qafonyjIQK-VCJJc5HBC' })
	 await webhookClient.send({
	 	content: string,
	 	username: 'Eloazy 2',
	 	avatarURL: 'https://cdn.myanimelist.net/s/common/forum/4e4e771b-41ff-4864-8374-d24c8b6dcc6e.jpeg'
	 })
})

//PORT listening
app.listen(1025, () => {
	console.log("EmberSlave started on port 1025")
	console.log("by Eloazy[3028393]")
	console.log("click on EmberSlave in API useful to open API")
	console.log("DO NOT CLOSE THIS WHILE USING THE API")
	console.log("---------------------")
})