const express = require('express');
const app = express();
const path = require('path');
const fetch = require('node-fetch');

const port = 3000;

app.use(express.static('html'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'html', 'index.html'));
});

async function handleApiDataRequest(req, res) {
  const domain = req.params.domain;
  const url = `https://api.builtwith.com/free1/api.json?KEY=79664c18-3279-4ec2-94d5-bbace2ddd10f&LOOKUP=${domain}`;

  const options = {
    method: 'GET',
    headers: {
      'API-Key': '79664c18-3279-4ec2-94d5-bbace2ddd10f'
    }
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

app.get('/api/data/:domain', (req, res) => {
  handleApiDataRequest(req, res).catch((error) => {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});