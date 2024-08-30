import "./FourthComponent.css";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import useLocalTimeFetch from "../../Hooks/useLocalTimeFetch";


const FourthComponent = ({handleToggle,theme}) => {
    
    const { time } = useLocalTimeFetch();
  return (
    <div className="fourth-container">
      <div className="fourth-child-1">
        <p>{time}</p>
        <p>Lima,Peru</p>
      </div>
      <div className="fourth-child-2">
        {theme === "dark" ? (
          <MdLightMode onClick={handleToggle} />
        ) : (
          <MdOutlineDarkMode onClick={handleToggle} />
        )}
      </div>
    </div>
  );
};

export default FourthComponent;
