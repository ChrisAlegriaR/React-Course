import { useEffect, useState } from "react";

export const useFetch = (url) => {
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        errors: null
    });

    const { data, isLoading, errors } = state;

    const getData = async () => {
        if (!url) return

        try {
            const response = await fetch(url);
            const mainData = await response.json();
            setState({
                data: mainData,
                isLoading: false,
                errors: null,
            });
        } catch (error) {
            console.log(error);
            setState({
                data: null,
                isLoading: false,
                errors: error,
            });
        }
    }

    useEffect(() => {
        getData();
    }, [url])

    return {
        data,
        isLoading,
        errors
    };
}