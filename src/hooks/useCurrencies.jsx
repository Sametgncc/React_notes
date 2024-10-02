
import React, { useEffect } from 'react'

const UseCurrencies = () => {   
    const [currencies, setCurrencies] = React.useState({});

    const [error, setError] = React.useState(null);
    const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    const fetchCurrencies = async () => {

        try {
            const res = await fetch("https://api.frankfurter.app/latest?from=TRY");
            const data = await res.json();
            setCurrencies(data.rates);
        } catch (error) {
            setError(error);
            
        }
        finally{
            setLoading(false);
        }

     
    };

    fetchCurrencies();
  }, []);

  const timer = () => {
    setTimeout(() => {
        fetchCurrencies();
    }, 2000);
    return () => clearTimeout(timer);
  };


  return {currencies, error, loading};
}

export default UseCurrencies
