import useWeather from '../../Hooks/useWeather';
import Loader from '../../loader/Loader';
import { motion } from 'framer-motion'
import './weatherComponent.css';

const WeatherComponent = () => {
  const { weather } = useWeather();
  return (
    <motion.div 
    className='weather-container'
    initial={{ opacity:0, y:20 }}
    animate={{ opacity:1, y:0 }}
    transition={{ duration:1.4, delay:.4 }}
    >
          {
            !weather.weather 
            ? <Loader />
            :
            <>
            <div className='__content'>
              <h3 className='__title'>{weather?.weather[0]?.description}</h3>
              <p className='__paragraph'>{Math.round(weather.main?.temp)}°</p>
              <span className='__span'>Now</span>
            </div>
            
            <img className='__img' src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="" />
          </>
          }
    </motion.div>
  )
}

export default WeatherComponent;
