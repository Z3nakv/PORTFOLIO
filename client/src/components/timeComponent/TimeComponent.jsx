import useLocalTimeFetch from "../../Hooks/useLocalTimeFetch";
import Loader from "../../loader/Loader";
import { motion } from 'framer-motion'
import LightDarkModeComponent from "../../lightDarkMode/LightDarkMode";
import "./timeComponent.css";


const TimeComponent = ({handleToggle,theme}) => {
    
  const { time } = useLocalTimeFetch();

  return (
    <motion.div 
    className="time-container"
    initial={{ opacity:0, y:20 }}
    animate={{ opacity:1, y:0 }}
    transition={{ duration:1.6, delay:.6 }}
    >
      <div className="__content">
        {
          !time
          ? <Loader />
          :
          <>
            <p className="__paragraph">{time}</p>
            <p className="__paragraph">Lima,Peru</p>
          </>
        }
        
      </div>
      <div className="__content">
        <LightDarkModeComponent handleToggle={handleToggle} theme={theme} />
      </div>
    </motion.div>
  );
};

export default TimeComponent;
