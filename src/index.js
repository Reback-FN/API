const express = require('express');
const app = express();
const port = 4002;

const api = require('./services/api');

app.use(api);

app.listen(port, () => {
    console.log(`Server started on the port ${port}.`);
});