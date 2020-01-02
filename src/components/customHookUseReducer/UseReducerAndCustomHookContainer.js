import React, { useState, useMemo } from "react";

import useArticleFetching from "./useArticleHook";

export default function UseReducerAndCustomHookContainer() {
    const [query, setQuery] = useState("redux");
    const url = useMemo(() => `https://hn.algolia.com/api/v1/search?query=${query}`, [query]);
    const [{ data, isError, isLoading }, fetchData] = useArticleFetching(
        { hits: [] },
        url
    );
    return (
        <div>
            <form
                onSubmit={event => {
                    fetchData(url);
                    event.preventDefault();
                }}
            >
                <input
                    type="text"
                    value={query}
                    onChange={event => setQuery(event.target.value)}
                />
                <button type="submit">Search</button>
            </form>
            {isLoading ? (
                <div>Loading ...</div>
            ) : isError ? (
                <div>Something went wrong ...</div>
            ) : (
                        <ul>
                            {data.hits.map(item => (
                                <li key={item.objectID}>
                                    <a href={item.url}>{item.title}</a>
                                </li>
                            ))}
                        </ul>
                    )}
        </div>
    );
}
