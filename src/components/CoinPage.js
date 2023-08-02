import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
// import parse from 'html-react-parser';
import InfoCard from './InfoCard';
import Navbar from './Navbar';

const CoinPage = () => {
    const navigate = useNavigate()
    const { id } = useParams();
    const [coin, setCoin] = useState();
    
    const fetchCoin = async () => {
      try{
        let url = `https://api.coingecko.com/api/v3/coins/${id}`
        const { data } = await axios.get(url);
        setCoin(data);
      }catch (error) {
        navigate('/err')
      }  
    };
    
    React.useEffect(() => {
        fetchCoin();
    },)
    console.log(coin)

    if(!coin) return <h1>Loading...</h1>
    

  return (
    <div>
      <div>
        <Navbar/>
        <InfoCard
          name={coin?.name}
          description = {coin?.description.en.split(". ")[0]}
          img = {coin?.image.large}
          rank = {coin?.market_cap_rank}
          price = {coin?.market_data.current_price.inr.toLocaleString('en-US')}
          cap = {coin?.market_data.market_cap.inr.toLocaleString('en-US').slice(0, -6)}
        />
      </div>
    </div>
  )
}

export default CoinPage
