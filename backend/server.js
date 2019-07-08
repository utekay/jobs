const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());

const API_URL = 'https://jobs.github.com/'

app.get('/', (req, res, next) => {
  const { jobName, page } = req.query;
  axios.get(`${API_URL}/positions.json?description=${jobName || ''}&page=${page || 0}`).then((r) => {
    res.json(r.data);
  }).catch((e) => {
    next(e);
  })
});

app.get('/:id', (req, res, next) => {
  axios.get(`${API_URL}/positions/${req.params.id}.json`).then((r) => {
    res.json(r.data);
  }).catch((e) => {
    next(error);
  })
});

app.listen(8000, () => {
  console.log('Mock server is running @ :8000!')
})
