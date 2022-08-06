import {useState, useEffect} from 'react';

const useFetch = (url) => {
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [data, setData] = useState(null)

    useEffect(() =>  {
        console.log('useEffect in effect!');
        fetch(url).then(res => {
            if (!res.ok)  {
                throw Error('Could not fetch the data for that resource!');
            } else {
                console.log(res)
                return res.json();
            }
    }).then(data => {
        console.log("data", data);
        setData(data);
        setIsPending(false);
        setError(null);
    }).catch(err =>  {
        console.log(err.message);
        setError(err.message);
        setIsPending(false);
    })
    }, [url]);

    return { data, error, isPending }
}
 
export default useFetch;