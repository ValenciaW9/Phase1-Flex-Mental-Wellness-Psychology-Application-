const fetchData = () => {
  const url = 'https://api.symanto.net/personality';
  const data = [
    {
      id: 1,
      text: 'I love the service',
      language: 'en',
    },
  ];

  return fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'x-api-key': '79664c18-3279-4ec2-94d5-bbace2ddd10f',
    },
    body: JSON.stringify(data),
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch data from API');
      }
      return response.json();
    })
    .catch(error => {
      console.error('API call failed:', error.message);
      throw error;
    });
};

const lookupForm = document.getElementById('lookupForm');
const domainInput = document.getElementById('domainInput1');

lookupForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent form submission from refreshing the page

  // Get the domain input value
  const domain = domainInput.value;

//Implement the domain lookup logic here
console.log(`Performing lookup for domain: ${domain}`);

// Example code for domain lookup
  fetch(`https://api.example.com/lookup?domain=${domain}`)
      .then(response => response.json())
      .then(data => {
        console.log(data); // Display the result of the domain lookup
      })
      .catch(error => {
        console.error('Domain lookup failed:', error.message);
      });

  // Clear the domain input value
  domainInput.value = '';
});

// Call the fetchData function
fetchData();
