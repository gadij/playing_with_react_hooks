export default function reducer(state, { type, payload }) {
    switch (type) {
        case "FETCHING":
            return { ...state, isLoading: true, isError: false, data: {} };
        case "ERROR":
            return { ...state, isLoading: false, isError: true, data: {} };
        case "SUCCESS":
            return { ...state, isLoading: false, isError: false, data: payload };
        default:
            return state;
    }
}
