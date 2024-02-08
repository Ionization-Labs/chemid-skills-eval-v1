const express = require('express')
const port = 8080

const app = express()

app.listen(port, () => {
	console.log('-----------------------------------')
	console.log(`SERVER STARTED AND LISTENING ON PORT ${port}`)
})