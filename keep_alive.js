const express = require('express');
const app = express();
const port = 2323;
app.get('/', (req, res) => res.send('server up!'));

app.listen(port, () => console.log(`serverup listening to http://localhost:${port}`));