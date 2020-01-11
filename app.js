const express = require('express')
const app = express()
const port = 3000

// app.get('/', function (req, res) {
//     res.sendFile(app.use(express.static('public')));
// })

app.get('/', (req, res) => {
    res.sendFile('./scripts/index.html', { root: __dirname });
});


// module.exports = app
app.listen(port, () => console.log(`Example app listening on port ${port}!`))