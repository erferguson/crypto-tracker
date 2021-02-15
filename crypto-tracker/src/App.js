
import './App.css';
import axios from 'axios'
import { useState, useEffect } from 'react'

import Search from './components/Search'
import Coin from './components/Coin'

function App() {

  const [ coins, setCoins ] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    axios
      .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')

      .then(res => {
        setCoins(res.data)
        console.log(res.data)
      })

      .catch(error => console.log(error))
  }, [])

  // const handleChange = e => {
  //   setSearch(e.target.value)
  // }

  const filteredCoins = coins.filter(coin => 
    coin.name.toLowerCase().includes(search.toLowerCase())
    )

  return (
    <div className="coin-app">
      <Search search={search} setSearch={setSearch} />
      {/* <div className="coin-search">
        <h1 className='coin-text'>Search a Currency</h1>
        <form>
          <input 
          type="text" 
          placeholder='Search' 
          className="coin-input" 
          // onChange={}
          />
        </form>
      </div> */}
      {filteredCoins.map(coin => {
        return (
          <Coin 
          key={coin.id}
          image={coin.image}
          name={coin.name}
          symbol={coin.symbol}
          price={coin.current_price} 
          volume={coin.market_cap}
          priceChange={coin.price_change_percentage_24h}
          />
        )
      })}
    </div>
  );
}

export default App;
