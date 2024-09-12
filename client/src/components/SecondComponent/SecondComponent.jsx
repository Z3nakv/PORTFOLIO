import useWeather from '../../Hooks/useWeather';
import Loader from '../../loader/Loader';
import './SecondComponent.css';
import { motion } from 'framer-motion'

const SecondComponent = () => {
  const { weather } = useWeather();
  return (
    <motion.div 
    className='second-container'
    initial={{ opacity:0, y:20 }}
    animate={{ opacity:1, y:0 }}
    transition={{ duration:1.4, delay:.4 }}
    >
          {
            !weather.weather 
            ? <Loader />
            :
            <>
            <div>
              <h3>{weather?.weather[0]?.description}</h3>
              <p>{Math.round(weather.main?.temp)}°</p>
              <span>Now</span>
            </div>
            
            <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="" />
          </>
          }
    </motion.div>
  )
}

export default SecondComponent
