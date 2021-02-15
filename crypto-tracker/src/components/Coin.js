import React from 'react'

import '../components/Coin.css'

const Coin = ({ image, name, symbol, price, volume, priceChange, marketcap }) => {
    console.log(volume)
    return (
        <div className='coin-container'>
            <div className="coin-row">
                <div className="coin">
                    <img src={image} alt='crypto logo' />
                    <h1>{name}</h1>
                    <p className="coin-symbol">{symbol}</p>
                </div>
                <div className="coin-data">
                    <p className="coin-price data-center">${price.toLocaleString()}</p>
                    <p className="coin-volume data-center">${volume.toLocaleString()}</p>
                     {priceChange < 0 ? (
                        <p className='coin-percent red data-center'>{priceChange.toFixed(2)}%</p>
                        ) : (
                        <p className='coin-percent green data-center'>{priceChange.toFixed(2)}%</p>
                        )
                    }
                    <p className="coin-marketcap data-center">
                        ${marketcap.toLocaleString()}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Coin
