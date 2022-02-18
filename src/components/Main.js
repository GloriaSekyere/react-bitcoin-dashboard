import { useState, useEffect } from 'react';
import { useFetch } from '../hooks/useFetch';

const Main = () => {
  
  const { data } = useFetch()

  const [rate, setRate] = useState(null)
  const [currency, setCurrency] = useState('USD')
  const [symbol, setSymbol] = useState('$')

  useEffect(() => {
    if (data) {setRate(
      (`${symbol} ${data[currency].rate}`).slice(0,-2)
    )}
  }, [data])

  const handleChange = (e) => {
    switch (e.target.value) {
      case 'usd':
        setSymbol('$')
        setCurrency('USD')
        setRate(
          (`$ ${data.USD.rate}`).slice(0,-2)
        )
        break;
      case 'gbp':
        setSymbol('£')
        setCurrency('GBP')
        setRate(
          (`£ ${data.GBP.rate}`).slice(0,-2)
        )
        break;
      case 'eur':
        setSymbol('€')
        setCurrency('EUR')
        setRate(
          (`€ ${data.EUR.rate}`).slice(0,-2)
        )
        break;
    }
  }

  return (
    <main className="main">

      <form className="currencies">
        <label>
          <input 
            type="radio" 
            name="currency" 
            value="usd"
            onChange={e => handleChange(e)}
            defaultChecked 
          />
          <span>USD</span>
        </label>

        <label>
          <input 
            type="radio" 
            name="currency" 
            value="gbp" 
            onChange={e => handleChange(e)}
          />
          <span>GBP</span>
        </label>

        <label>
          <input 
            type="radio" 
            name="currency" 
            value="eur" 
            onChange={e => handleChange(e)}
          />
          <span>EUR</span>
        </label>
      </form>

      <div className="price-div">
        <p className="price">{rate}</p>
      </div>

      <div className="graph">
        <img src={process.env.PUBLIC_URL+"graph.png"} alt="graph" />
      </div>

      <div className="about">
        <p>Disclaimer:</p>
        <p>This data was produced from the CoinDesk Bitcoin Price Index (USD). Non-USD currency data converted using hourly conversion rate from openexchangerates.org</p>
      </div>
    </main>
  )
}

export default Main