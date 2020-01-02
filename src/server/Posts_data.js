async function getPosts() {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
        const json = await response.json();
        return json;
    } catch (err) {
        console.log(err);
    }
}

async function getPost(id) {
    try {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/posts/${id}`
        );
        const json = await response.json();
        return json;
    } catch (err) {
        throw err;
    }
}

export { getPosts, getPost };
