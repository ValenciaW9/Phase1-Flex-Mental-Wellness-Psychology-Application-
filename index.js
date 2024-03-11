const fetchButton = document.getElementById('fetchButton');
fetchButton.addEventListener('click', () => {
  fetch('https://api.symanto.net/personality', {
    method: 'POST',
    headers: {
      'accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify([
      {
        id: 1,
        text: 'I love the service',
        language: 'en',
      },
    ]),
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch data from API');
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error('API call failed:', error.message);
    });
});