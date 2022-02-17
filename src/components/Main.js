const Main = () => {
  return (
    <main className="main">

      <div className="currencies">
        <label>
          <input id="usd" type="radio" name="currency" value="USD" checked />
          <span>USD</span>
        </label>

        <label>
          <input id="gbp" type="radio" name="currency" value="GBP" />
          <span>GBP</span>
        </label>

        <label>
          <input id="eur" type="radio" name="currency" value="EUR" />
          <span>EUR</span>
        </label>
      </div>

      <div className="price-div">
        <p className="price"></p>
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