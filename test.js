const fetch = require('node-fetch');

const fetchDataFromAPI = async () => {
  const url = 'https://api.symanto.net/personality';

  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'x-api-key': '79664c18-3279-4ec2-94d5-bbace2ddd10f'
  };

  const response = await fetch(url, {
    method: 'POST',
    headers: headers
  });

  if (!response.ok) {
    throw new Error('API request failed');
  }

  return await response.json();
};

async function testFetchDataFromAPI() {
  try {
    const data = await fetchDataFromAPI();
    // Assert data received from the API
    if (data?.status_code) {
      console.log('API call test passed');
    } else {
      console.error('API call test failed: Invalid response from API');
    }

    // Example of array iteration using forEach
    data.forEach((item) => {
      console.log(`Disorder: ${item.name}`);
      console.log(`- Medications: ${item.medications.join(', ')}`);
      console.log(`- Description: ${item.description}`);
      console.log('---------------------');
    });
  } catch (error) {
    console.error('API call test failed:', error.message);
  }
}

test('fetchDataFromAPI should return valid response', async () => {
  try {
    // Arrange

    // Act
    const data = await fetchDataFromAPI();

    // Assert
    expect(data).toBeDefined();
    expect(data.status_code).toBeDefined();

    // Example of array iteration using forEach
    data.forEach((item) => {
      console.log(`Disorder: ${item.name}`);
      console.log(`- Medications: ${item.medications.join(', ')}`);
      console.log(`- Description: ${item.description}`);
      console.log('---------------------');
    });
  } catch (error) {
    console.error('Test failed:', error.message);
    // Optionally, assert that the error message is what you expect
    expect(error.message).toBe('API request failed');
  }
});

testFetchDataFromAPI();
