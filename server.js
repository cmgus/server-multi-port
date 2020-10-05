const app = (require('express'))()

app.get('/', (req, res) => {
    res.json({ message: 'Server App'})
})

module.exports = app
