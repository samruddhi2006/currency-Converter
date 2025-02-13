// this is our custom hook

import { useEffect, useState } from "react";


function useCurrencyInfo(currency){
    // need to call api
    //can directly do by fetch but want that when it is is used then only call this hook

    // the hook which is invoked when a component mounts or unmounts

    //using useState to get res(response) with empty object {} in case of error
    const [data, setData] = useState({})

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2025.1.8/v1/currencies/${currency}.json`)
        //converting string data into json format
        .then((res) => res.json())
        .then(() => setData(res[currency]))
    }, //whenever there is change in currency i.e fron usd to inr we have to call useEffect so currency is dependency
    [currency])
    //console.table(data)
    return data
// if we return data we may not be able to use currency fetching
}

// to set the value, or use currency
export default useCurrencyInfo;

