const express = require('express');
const app = express();
const PORT = 80;

app.get('/', (req, res) => {
    res.send('Hello, Express Next Next version!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});