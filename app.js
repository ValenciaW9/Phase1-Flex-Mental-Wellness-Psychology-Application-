const url = 'https://api.builtwith.com/free1/api.[xml|json]?KEY=79664c18-3279-4ec2-94d5-bbace2ddd10f&LOOKUP=[DOMAIN]';
const options = {
    method: 'GET',
    headers: {
        'API-Key': '79664c18-3279-4ec2-94d5-bbace2ddd10f'
    }
};

const fetchData = async (domain) => {
    const usernameInput = document.getElementById('usernameInput');
    const passwordInput = document.getElementById('passwordInput');
    const username = usernameInput.value;
    const password = passwordInput.value;

    // Perform validation if needed
    if (!username || !password) {
        alert('Please enter both username and password');
        return;
    }

    try {
        const lookupUrl = url.replace('[DOMAIN]', domain);
        const response = await fetch(lookupUrl, options);
        const result = await response.text();
        // Display the result in the 'apiData' container
        document.getElementById('apiData').innerText = result;
    } catch (error) {
        console.error(error);
    }
};

// Add event listener to the fetch button
const fetchButton = document.getElementById('fetchButton');
fetchButton.addEventListener('click', () => {
    fetchData();
});

// Add event listener to the lookup form
const lookupForm = document.getElementById('lookupForm');
lookupForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const domainInput = document.getElementById('domainInput');
    const domain = domainInput.value;
    fetchData(domain);
});

// Add event listeners to the disorder list items
const disorderListItems = document.querySelectorAll('#disorderList li');
disorderListItems.forEach((item) => {
    item.addEventListener('click', () => {
        const selectedDisorder = item.innerText;
        console.log(`Selected disorder: ${selectedDisorder}`);
        // Perform actions based on the selected disorder
        // You can update the fetchData function or add new functions to handle each disorder
    });
});