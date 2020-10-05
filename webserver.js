const app = (require('express'))()

app.get('/', (req, res) => {
    res.json({ message: 'Web Server App'})
})

module.exports = app
