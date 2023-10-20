const express = require('express');
const app = express();
let PORT = 80;

if(process.env.ENVIRONMENT === 'test') {
    PORT = 3000;
}

app.get('/', (req, res) => {
    res.send('Fix test branch');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
