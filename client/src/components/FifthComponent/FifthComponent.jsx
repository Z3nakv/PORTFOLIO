import "./FifthComponent.css";
import { TbTruckDelivery } from "react-icons/tb";
import { IoChatbubbleEllipses } from "react-icons/io5";

const FifthComponent = () => {
  return (
    <div className="fifth-container">
      <h2 className="fifth-container-title">Projects</h2>
      <div className="projects-container">
        <div >
          <TbTruckDelivery onClick={()=>window.open('https://food-delivery-frontend-vq0w.onrender.com')} />
          <p>Food Delivery</p>
        </div>
        <div>
          <IoChatbubbleEllipses onClick={()=>window.open('https://chat-app-2edbe.web.app')} />
          <p>Chat App</p>
        </div>
      </div>
    </div>
  );
};

export default FifthComponent;
