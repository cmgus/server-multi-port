const app = (require('express'))()

const port = (+process.env.PORT + 1) || 3001

app.get('/', (req, res) => {
    res.json({ message: 'Server App'})
})

app.listen(port, () => {
    console.log(`server lifted port ${port}`);
})
