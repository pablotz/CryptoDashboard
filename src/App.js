import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';   
import Coin from './Coin';
import './Coin.css'


function App() {
  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('')
  const [currency, setCurrency] = useState('usd')
  const [favoriteCryptos, setFavoriteCryptos] = useState([])
  const [favorites, setFavorites] = useState(false)
  const [filters, setFilters] = useState([])


  const likedCrypto = (name, id) => {
    setFavoriteCryptos([...favoriteCryptos, name])
  }

  const dislikedCrypto = (name) => {
      const newArrary = favoriteCryptos.filter(item => item !== name)
      setFavoriteCryptos(newArrary)
  }


  const seeFavorites = () => {
    setFavorites(true)
    var filteredCoins = [];

    setFilters(filteredCoins)
  }

  const allCoins = () => {
    setFavorites(false)
  }

  useEffect(() => {
    getLocalTodos();
  }, []);

  const saveLocalCryptos = () => {
    localStorage.setItem('cryptos', JSON.stringify(favoriteCryptos));
}

  useEffect(() =>{
    saveLocalCryptos();
  }, [favoriteCryptos]); 

  useEffect( () => {
    let interval = ""
    
    if(!favorites) { 
     interval = setInterval(() => { 
      axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency='+currency+'&order=market_cap_desc&per_page=100&page=1&sparkline=false') 
    .then(res => {
      let cryptoLocal = JSON.parse(localStorage.getItem("cryptos"));
      
      res.data.forEach((coin) => {
        cryptoLocal.some((coinFav) => {
          if(coinFav == coin.name){
            coin.like = true
          } else {
            coin.like = false
          }
          return coinFav == coin.name
        })
        return coin
      })
      setCoins(res.data)
    }).catch( error => console.log(error))
  }, 1000);

  } else {
    interval = setInterval(() => { 
      axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency='+currency+'&order=market_cap_desc&per_page=100&page=1&sparkline=false') 
    .then(res => {
      let coinsF = res.data.filter(function(coin) {
        return favoriteCryptos.includes(coin.name); 
      })
      let cryptoLocal = JSON.parse(localStorage.getItem("cryptos"));
      
      coinsF.forEach((coin) => {
        cryptoLocal.some((coinFav) => {
          if(coinFav == coin.name){
            coin.like = true
          } else {
            coin.like = false
          }
          return coinFav == coin.name
        })
        return coin
      })
      setCoins(coinsF)
    }).catch( error => console.log(error))
  }, 1000);
  }
  return () => clearInterval(interval);
  }, [currency, favorites])


  
  const getLocalTodos = () => {
    if(localStorage.getItem('cryptos') === null) {
      localStorage.setItem('cryptos', JSON.stringify([]));
    } else {
      let cryptoLocal = JSON.parse(localStorage.getItem("cryptos"));
      setFavoriteCryptos(cryptoLocal)
    }
  }


  const handleChange = e => {
    setSearch(e.target.value)
  }

  const handleCurrency = e => {
    setCurrency(e.target.value)
  }

  
  const filteredCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()) || 
                                     coin.symbol.toLowerCase().includes(search.toLowerCase()))
                                     
  

  return (
    <div className="app-container">
      <div className="title-app">
        <h1 className="title-text">
           Dashboard  <a class="link" href="#"> Crypto Currency</a>
        </h1>
      </div>
      <div className="coin-search">
        <div className="input-search">
          <input type="text" name="" className="user-box" required="" placeholder="Search crypto" onChange={handleChange} />
        </div>
      <div className="select">
        <select name="slct" id="slct" value={currency} onChange={handleCurrency}>
          <option selected disabled>Choose a currency</option>
          <option value="usd">USD</option>
          <option value="mxn">MXN</option>
          <option value="eur">EUR</option>
        </select>
      </div>
      <div className="filter-favorites">
        {favorites == true ? (
                      <span className="favorite-text"  onClick={() => allCoins()}>Back to all</span>
                    ) : (
                      <span className="favorite-text"  onClick={() => seeFavorites()}>See favorites</span>
                    )}
      {favorites == true ? (
                        <button className="favorites" onClick={() => allCoins()} ><i class="fas fa-star fa-2x"></i></button>
                    ) : (
                        <button className="favorites" onClick={() => seeFavorites()}><i class="far fa-star fa-2x"></i></button>
                    )}
      </div>
      </div> 
      <div className="coin-app">
      { 
        filteredCoins.map(coin => {
        return(
          <Coin 
            key = {coin.id} 
            name = {coin.name}
            image = {coin.image}
            symbol = {coin.symbol}
            marketcap = {coin.market_cap}
            price = {coin.current_price}
            priceChange = {coin.price_change_percentage_24h}
            volume = {coin.total_volume}
            id = {coin.id}
            like = {coin.like}
            likedCrypto = {likedCrypto}
            dislikedCrypto = {dislikedCrypto}

          />
        )
      })
      }
      </div>
    </div>
  );
}

export default App;
