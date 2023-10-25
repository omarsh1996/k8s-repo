const express = require('express');
const app = express();
let PORT = 80;

if(process.env.ENVIRONMENT === 'test') {
    PORT = 3000;
}

app.get('/', (req, res) => {
    res.send(`(INSIDE TEST BRANCH) Reading Variable from Github Actions ${process.env.SECRET1}`);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
