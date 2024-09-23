import "./FourthComponent.css";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import useLocalTimeFetch from "../../Hooks/useLocalTimeFetch";
import Loader from "../../loader/Loader";
import { motion } from 'framer-motion'
import LightDarkModeComponent from "../../lightDarkMode/LightDarkMode";


const FourthComponent = ({handleToggle,theme}) => {
    
  const { time } = useLocalTimeFetch();

  return (
    <motion.div 
    className="fourth-container"
    initial={{ opacity:0, y:20 }}
    animate={{ opacity:1, y:0 }}
    transition={{ duration:1.6, delay:.6 }}
    >
      <div className="fourth-child-1">
        {
          !time
          ? <Loader />
          :
          <>
            <p>{time}</p>
            <p>Lima,Peru</p>
          </>
        }
        
      </div>
      <div className="fourth-child-2">
        <LightDarkModeComponent handleToggle={handleToggle} theme={theme} />
      </div>
    </motion.div>
  );
};

export default FourthComponent;
