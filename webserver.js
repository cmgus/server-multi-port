const app = (require('express'))()

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.json({ message: 'Web Server App'})
})

app.listen(port, () => {
    console.log(`web server lifted ${port}`);
})
