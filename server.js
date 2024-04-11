const express = require('express');
const app = express();
const dotenv = require('dotenv');

dotenv.config();

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));