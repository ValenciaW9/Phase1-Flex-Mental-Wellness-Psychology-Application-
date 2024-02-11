const fetchMock = require('fetch-mock');

// Test API call with successful response
test('fetchDataFromAPI with successful response', async () => {
  const mockResponse = { some: 'data' };
  fetchMock.get('https://api.builtwith.com/free1/api.json?KEY=79664c18-3279-4ec2-94d5-bbace2ddd10f&LOOKUP=builtwith.com', mockResponse);

  const data = await fetchDataFromAPI();
  expect(data).toEqual(mockResponse);

  fetchMock.restore();
});

// Test API call with failed response
test('fetchDataFromAPI with failed response', async () => {
  fetchMock.get('https://api.builtwith.com/free1/api.json?KEY=79664c18-3279-4ec2-94d5-bbace2ddd10f&LOOKUP=builtwith.com', 404);

  await expect(fetchDataFromAPI()).rejects.toThrow();

  fetchMock.restore();
});