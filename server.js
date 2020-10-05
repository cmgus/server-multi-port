const app = (require('express'))()

app.get('/', (req, res) => {
    res.json({ message: 'Hello from server'})
})

module.exports = app
