import React from 'react';
import PostFetching from "./noUseReducer/PostFetching";
import PostFetchingReducerHook from "./withUseReducer/PostFetching";

export default function PostFetchingContainer() {
    return (
        <div className='examples-container'>
            <PostFetching />
            <PostFetchingReducerHook />
        </div>
    )
}