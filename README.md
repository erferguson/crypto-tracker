# crypto-tracker
A cryptocurrency finance price tracker app.

## Overview
- Built using:
    - React w/ useEffect & useState
    - Axios
    - API : https://www.coingecko.com/en/api
     We will use React Hook and Axios for this beginner React JS Project. We will mainly use useEffect and useState in this tutorial. 

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
    
    - 
