import React from 'react';
import Post from "./withHooks/Post";
import Posts from "./withHooks/Posts";
import Users from "./withHooks/Users";



export default function DisplayDataContainer() {
    return (
        <div className='examples-container'>
            <Post />
            <Posts />
            <Users />
        </div>
    )
}