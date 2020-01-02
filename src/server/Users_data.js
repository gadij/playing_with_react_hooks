async function getUsers() {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
        const json = await response.json();
        return json;
    } catch (err) {
        console.log(err);
    }
}

export { getUsers };
