import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCurrencyData = async () => {
            try {
                const response = await fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`);
                if (!response.ok) {
                    throw new Error(`Error fetching data: ${response.statusText}`);
                }
                const result = await response.json();
                setData(result[currency]);
            } catch (err) {
                setError(err.message);
            }
        };

        if (currency) {
            fetchCurrencyData();
        }
    }, [currency]);

    // Log the updated data after state change
    useEffect(() => {
        console.log(data);
    }, [data]);

    return { data, error };
}

export default useCurrencyInfo;
