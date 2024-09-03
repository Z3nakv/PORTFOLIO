import React, { useEffect, useState } from 'react'

const API_KEY = import.meta.env.VITE_NEWS_KEY

const useFetchNews = () => {
    const [news, setNews] = useState('');

    const requestNews = async () => {
      try {
        const response = await fetch(`https://gnews.io/api/v4/search?q=gaming&lang=en&country=us&max=10&apikey=${API_KEY}`);
        const result = await response.json();
        setNews(result.articles[0])
      } catch (error) {
        console.log(error);
      }
    }
    // console.log(news);
    
    useEffect(() => {
      requestNews()
    },[])
    
  return { news }
}

export default useFetchNews
