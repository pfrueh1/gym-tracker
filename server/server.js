const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');



const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors({
  origin: '*'
}));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(require('./routes'));

// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, '../client/build')));
// }

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../client/build/index.html'));
// });
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/gymtracker')

app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}!`);
});
