const fetch = require('node-fetch');

async function fetchDataFromAPI() {
  const url =
    'https://api.builtwith.com/free1/api.json?KEY=79664c18-3279-4ec2-94d5-bbace2ddd10f&LOOKUP=builtwith.com';

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch data from API');
  }
}

async function testFetchDataFromAPI() {
  try {
    const data = await fetchDataFromAPI();
    // Assert data received from the API
    if (data?.status_code) {
      console.log('API call test passed');
    } else {
      console.error('API call test failed: Invalid response from API');
    }
  } catch (error) {
    console.error('API call test failed:', error.message);
  }
}

testFetchDataFromAPI();