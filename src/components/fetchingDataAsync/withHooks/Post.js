import React, { useState, useEffect } from 'react'
import { getPost } from '../../../server/Posts_data'

export default function Post() {
    const [post, setPost] = useState({});
    const [id, setId] = useState(1);
    const [idFromButtonClick, setIdFromButtonClick] = useState(1);
    useEffect(() => {
        async function handleGetPost() {
            const data = await getPost(idFromButtonClick);
            setPost(data);
        }
        handleGetPost();
    }, [idFromButtonClick]);

    const handleClick = () => {
        setIdFromButtonClick(id);
    };

    return (
        <div>
            <input type="text" value={id} onChange={e => setId(e.target.value)} />
            <button type="button" onClick={handleClick}>
                Fetch posts
        </button>
            <h1 className='text__wrapper'>{post.title}</h1>
            <h3 className='text__wrapper'>{post.body}</h3>
        </div>
    );
}
