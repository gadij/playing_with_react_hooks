import { useState, useEffect, useReducer } from "react";
import DataFetchReducer from "./reducer";

export default function useArticleHook(initialData, initialUrl) {
    const [state, dispatch] = useReducer(DataFetchReducer, {
        isLoading: false,
        isError: false,
        data: initialData
    });
    const [url, setUrl] = useState(initialUrl);

    useEffect(() => {
        const asyncFunction = async () => {
            dispatch({ type: "FETCHING" });
            try {
                const result = await fetch(url);
                const json = await result.json();

                dispatch({ type: "SUCCESS", payload: json });
            } catch (err) {
                dispatch({ type: "FAILURE" });
            }
        };
        asyncFunction();
    }, [url]);

    return [state, setUrl];
}
