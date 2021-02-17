# Crypto Tracker
A searchable cryptocurrency price tracker app which renders in real-time the price, volume, change and market cap.

[Crypto Trackr](https://erferguson.github.io/crypto-trackr/)
[![HitCount](http://hits.dwyl.com/erferguson/crypto-tracker.svg)](http://hits.dwyl.com/erferguson/crypto-tracker)

## Overview
Built using:
- React w/ useEffect & useState
- Axios
- [API](https://www.coingecko.com/en/api) 
- CSS
- Hosted w/ [GitHub Pages](https://github.com/gitname/react-gh-pages)
- [![npm version](https://badge.fury.io/js/react.svg)](https://badge.fury.io/js/react)

## Outcome
Be able to search currencies and have them display on the browser while the prices will update live. All of the data will pull from  a public API. 

### Steps
    - get API key, set parameters for key,
    https://www.coingecko.com/en/api

    - import Axios + useState,useEffect 

    - set useState (coins, setCoins) to []

    - set useEffect w/ axios to .get() API key
        - .then set to setCoins
        - tested, data passes 
    
    - JSX
        - created Search & Coin components

        - Coin, rafce
            - basic jsx + classNames
            - props, passed in from App
            - priceChange
                - if < 0 

        
        - Search, rafce
            - basic jsx + classNames
            - handelChange with setSearch



