const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('data scholling is running on local server')
})
app.listen(port, () => {
    console.log('running on port', port);
})