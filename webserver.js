const app = (require('express'))()
const fetch = require('node-fetch')
app.get('/', async (req, res) => {
    const body = await (await fetch(`http://localhost:${process.env.PORT || 3001}`)).json()
    res.json({ message: body.message })
})

module.exports = app
