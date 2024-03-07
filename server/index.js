// index.js
const express = require('express');
const app = express();
const port = 4000;

app.use(express.json());

// Example route
app.get('/', (req, res) => {
  res.send('Hello, Fintech Portfolio Tracker!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
