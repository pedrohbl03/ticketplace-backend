const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const routes = require('./routes/v1/index');

require('./database');
dotenv.config();

const PORT = 3333;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/v1', routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})