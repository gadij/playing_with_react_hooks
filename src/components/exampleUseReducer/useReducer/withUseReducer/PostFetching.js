import React, { useReducer, useEffect } from "react";
import { getPost } from "../../../../server/Posts_data";

const initialState = {
    loading: true,
    error: "",
    post: {}
};

const reducer = (state, action) => {
    switch (action.type) {
        case "FETCH_SUCCESS":
            return {
                loading: false,
                error: "",
                post: action.payload
            };
        case "FETCH_ERROR":
            return {
                loading: false,
                error: "error",
                post: {}
            };
        default:
            return state;
    }
};

export default function PostFetching() {
    const [state, dispatch] = useReducer(reducer, initialState);
    useEffect(() => {
        getPost(1)
            .then(res => {
                dispatch({ type: "FETCH_SUCCESS", payload: res });
            })
            .catch(err => {
                dispatch({ type: "FETCH_ERROR" });
            });
    }, []);

    return (
        <div>
            <h2>Using useReducer</h2>
            {!state.loading && state.post.title}
            {state.error || null}
        </div>
    );
}
