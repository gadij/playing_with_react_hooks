import React, { useState, useEffect } from 'react'
import { getPosts } from '../../../server/Posts_data'

export default function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function handleGetPosts() {
            const data = await getPosts();
            setPosts(data);
        }
        handleGetPosts();
    }, []);

    return (
        <div className='text__wrapper'>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
}