import "./FifthComponent.css";
import { TbTruckDelivery } from "react-icons/tb";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { motion } from 'framer-motion'

const FifthComponent = () => {
  return (
    <motion.div 
    className="fifth-container"
    initial={{ opacity:0, y:20 }}
    animate={{ opacity:1, y:0 }}
    transition={{ duration:1.8, delay:.8 }}
    >
      <h2 className="fifth-container-title">Projects</h2>
      <div className="projects-container">
        <div>
          <TbTruckDelivery onClick={()=>window.open('https://food-delivery-frontend-vq0w.onrender.com')} />
          <p>Food Delivery</p>
        </div>
        <div>
          <IoChatbubbleEllipses onClick={()=>window.open('https://chat-app-2edbe.web.app')} />
          <p>Chat App</p>
        </div>
        <div>
          <MdDashboard onClick={()=>window.open('https://admin-dashboard-4txj.onrender.com/')} />
          <p>Dashboard</p>
        </div>
      </div>
    </motion.div>
  );
};

export default FifthComponent;
