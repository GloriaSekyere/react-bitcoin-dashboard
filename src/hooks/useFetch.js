import { useState, useEffect } from 'react';

export const useFetch = () => {
  const [data, setData] = useState(null) 

  useEffect(() => {
    const proxy = 'https://powerful-hamlet-48120.herokuapp.com/';
    const url = `${proxy}https://api.coindesk.com/v1/bpi/currentprice.json/`;

    const fetchData = async () => {
      try {
        let response = await fetch(url)
        if (!response.ok) {
          throw new Error(response.statusText)
        }
        let data = await response.json()
        let { bpi } = data
        
        setData(bpi)
      }
      catch (err) {
        console.log(err.message)
      }
    }

    const interval = setInterval(() => {fetchData()}, 500)
    return () => {clearInterval(interval)}
  }, [])
  
  return {data}
}