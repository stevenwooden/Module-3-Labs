import fetch from "node-fetch";
globalThis.fetch = fetch

function fetchURLData(url) {
    let fetchPromise = fetch(url).then(response => {
        if (response.status === 200) {
            return response.json();
        } else {
            throw new Error(`Request failed with status ${response.status}`);
        }
    })
    return fetchPromise;
}
async function fetchURLData(url) {
    try{
        const response = await fetch(url);
        if (response.status === 200) {
            const data = await response.json();
            return data;
        } else {
            throw new Error(`Request failed with status ${response.status}`);
        }
    } catch (error) {
            throw new Error(`Fetch Failed: ${error.message}`)
    }
}
fetchURLData('https://jsonplaceholder.typicode.com/todos/1')
    .then(data => console.log('Original valid function:', data)) 
    .catch(error => console.error(error.message));
fetchURLData('https://invalid_link.com')
    .then(data => console.log('Original invalid function:', data)) 
    .catch(error => console.error(error.message));

fetchURLDataAsync('https://jsonplaceholder.typicode.com/todos/1')
    .then(data => console.log('Async/Await valid function: ', data))
    .catch(error => console.error(error.message));
fetchURLDataAsync('https://invalid.com')
    .then(data => console.log('Async/Await invalid function: ', data))
    .catch(error => console.error(error.message))