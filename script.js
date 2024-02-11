 newFunction(); // Call the fetchData function to initiate the API request

// Rest of the code...
async function newFunction() {
    const url = 'https://us-doctors-and-medical-professionals.p.rapidapi.com/search_npi?npi=103311214';
    const options = {
        method: 'GET',
        headers: {
            'APIKey': '79664c18-3279-4ec2-94d5-bbace2ddd10f',
            'JSON Get Domain': 'https://api.builtwith.com/free1/api.json?KEY=79664c18-3279-4ec2-94d5-bbace2ddd10f&LOOKUP=builtwith.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}
