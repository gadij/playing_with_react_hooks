import React, { useState, useEffect } from "react";
import { getPost } from "../../../../server/Posts_data";

export default function PostFetching() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [post, setPost] = useState({});

    useEffect(() => {
        getPost(2)
            .then(res => {
                setLoading(false);
                setPost(res);
                setError("");
            })
            .catch(err => {
                setLoading(false);
                setPost({});
                setError("error has occured");
            });
    }, []);

    return (
        <div>
            <h2>Without useReducer</h2>
            {!loading && post.title}
            {error || null}
        </div>
    );
}
