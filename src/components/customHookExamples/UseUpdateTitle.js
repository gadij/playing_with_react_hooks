import { useEffect } from "react";

export default function useCustomDocTitle(text) {
    useEffect(() => {
        document.title = `Text - ${text}`;
    }, [text]);
}
