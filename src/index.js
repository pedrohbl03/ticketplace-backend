const express = require('express');
const cors = require('cors');
const routes = require('./routes/v1/index');
const PORT = 3333;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('v1', routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})