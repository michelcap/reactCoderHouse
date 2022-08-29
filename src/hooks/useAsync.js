import { useState, useEffect } from 'react';

export const useAsync = (asyncFn, dependencies = []) => {
    const [data, setData] = useState();
    const [error, setEror] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);

        asyncFn().then(response=> {
            setData(response)
        }).catch(error => {
            setEror(error)
        }).finally(() => {
            setIsLoading(false)
        })
    }, dependencies)

    return {
        data,
        error, 
        isLoading
    }
};