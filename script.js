// Call the fetchData function to initiate the API request
newFunction();

async function newFunction() {
  const url =
    'https://us-doctors-and-medical-professionals.p.rapidapi.com/search_npi?n=103311214';
  const options = {
    method: 'GET',
    headers: {
      'APIKey': '79664c18-3279-4ec2-94d5-bbace2ddd10f',
      'JSON Get Domain':
        'https://api.builtwith.com/free1/api.json?KEY=79664c18-3279-4ec2-94d5-bbace2ddd10f&LOOKUP=builtwith.com',
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

// Rest of the code...

const fetchData = async () => {
  const url = 'https://api.symanto.net/personality';
  const apiKey = '79664c18-3279-4ec2-94d5-bbace2ddd10f';
  const data = [
    {
      id: 1,
      text: 'I love the service',
      language: 'en',
    },
  ];

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
      },
      body: JSON.stringify(data),
    });

    return await response.json();
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch data from API');
  }
};

const fetchButton = document.getElementById('fetchButton');
fetchButton.addEventListener('click', () => {
  fetchData()
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error('API call failed:', error.message);
    });
});