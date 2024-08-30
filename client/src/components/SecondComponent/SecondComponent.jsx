import useWeather from '../../Hooks/useWeather';
import './SecondComponent.css';

const SecondComponent = () => {
    const { weather } = useWeather();
  return (
    <div className='second-container'>
          {
            weather.weather &&
            <>
            <div>
              <h3>{weather.weather[0].description}</h3>
              <p>{Math.round(weather.main?.temp)}°</p>
              <span>Now</span>
            </div>
            
            <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="" />
          </>
          }
    </div>
  )
}

export default SecondComponent
