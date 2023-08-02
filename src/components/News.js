import React from 'react'
import axios from 'axios'
import NewsCard from './NewsCard';
import Navbar from './Navbar';

const News = () => {
  const [News, setNews] = React.useState([])    
  const options = {
    method: 'GET',
    url: 'https://yahoo-finance15.p.rapidapi.com/api/yahoo/ne/news',
    headers: {
      'X-RapidAPI-Key': '3cfbc901e9msh2ce9f12e663b47ap167a0bjsnbdbada316e8d',
      'X-RapidAPI-Host': 'yahoo-finance15.p.rapidapi.com'
    }
  };
  const fetchNews  = async () => {
    let response = await axios.request(options);
    setNews(response.data);
    console.log(response.data) 
  }

  React.useEffect(()=>{
    fetchNews()
  },)

  const newsArray = News.map(news => (
    <NewsCard 
      title = {news.title}
      url = {news.link}
      // img = {news.article_photo_url}
    />
  ))

  return (
    <>
      <Navbar/>
      <div className='text-center px-20 my-5'>
        <h1 className='text-5xl text-teal-50 font-bold pb-5 leading-10'>News</h1>
      </div>  
      <div class="gp-10 grid items-center place-content-center grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 ml-10">
        {newsArray}
      </div>
    </>
  )
}

export default News
