import { useEffect, useState } from "react";

export const useFecth = () => {
    const [data, setData] = useState([]);

    const getData = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const mainData = await response.json();
            setData(mainData);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getData();
    }, [])

    return data;
}