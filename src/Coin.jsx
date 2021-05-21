import React, {useState} from 'react'
import './Coin.css';
import '../node_modules/hover.css/css/hover-min.css'


const Coin = ({ name, image, symbol, price, volume, priceChange, marketcap, likedCrypto, dislikedCrypto, id, like}) => {
    const [liked, setLiked] = useState(false)

    const addFav = () => {
        setLiked(true)
    }

    const removeFav = () => {
        setLiked(false)
    }

    return (
        <div className="coin-container hvr-bounce-in" >
            <div className="coin-card">

                <div className="coin">
                {liked == true || like == true ? (
                        <button className="like-btn" onClick={() => {dislikedCrypto(name, id); removeFav()}}><i class="fas fa-star fa-2x"></i></button>
                    ) : (
                        <button className="like-btn" onClick={() => {likedCrypto(name, id); addFav()}}><i class="far fa-star fa-2x"></i></button>
                    )}
                    <img src={image} alt="crypto" className="coinimg" />
                    { name.length <= 12?
                        (<p className="coin-name">{name}</p>) :
                        (<p className="coin-name">{name.substring(0,9)}...</p>)
                    }
                </div>
                <div className="coin-data">
                    {
                        symbol.length > 7 ? 
                        (<p className="coin-symbol sm-symbol">${symbol.toUpperCase()}</p>) :
                        (<p className="coin-symbol ">${symbol.toUpperCase()}</p>)
                    }
                    {
                        price.toString().length > 8? 
                        (<p className="coin-price-sm">${price}</p>) :
                        (<p className="coin-price">${price}</p>)
                    }
                    {priceChange < 0 ? (
                        <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
                    ) : (
                        <p className="coin-percent green">{priceChange.toFixed(2)}%</p>
                    )}
                
                </div>
            </div>
        </div>
    )
}

export default Coin
