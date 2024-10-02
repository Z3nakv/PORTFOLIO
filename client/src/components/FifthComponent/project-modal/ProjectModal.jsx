import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io";
import { FaHtml5 } from "react-icons/fa";
import { RiNodejsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { FaCcStripe } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { TbBrandFramerMotion } from "react-icons/tb";
import { SiRedux } from "react-icons/si";
import "./projectModal.css";

const technos = {
    react: <FaReact className="react-icon" />,
    js: <IoLogoJavascript className="js-icon" />,
    css: <IoLogoCss3 className="css-icon" />,
    html: <FaHtml5 className="html-icon" />,
    node: <RiNodejsLine className="node-icon" />,
    mongo: <SiMongodb className="mongo-icon" />,
    stripe: <FaCcStripe className="stripe-icon" />,
    express: <SiExpress className="express-icon" />,
    firebase: <IoLogoFirebase className="firebase-icon" />,
    framer: <TbBrandFramerMotion className="framer-icon" />,
    redux: <SiRedux className="redux-icon" />
}

const details = {
    1: 'Una plataforma web de entrega de alimentos diseñada para ser completamente responsive. Implementa características clave como registro y login de usuarios, carrito de compras, filtrado por tipo de comida y una pasarela de pago segura a través de Stripe. Además, cuenta con un panel de administración para gestionar pedidos, items y usuarios.',
    2:'Aplicación de chat en tiempo real desarrollada con React y Firebase para la autenticación de usuarios y la gestión de mensajes. La app ofrece notificaciones en tiempo real y un diseño responsive para una experiencia de usuario fluida en cualquier dispositivo. La plataforma permite una interacción rápida y eficiente entre usuarios, con un enfoque en simplicidad y rendimiento.',
    3:'Panel de administración dinámico desarrollado con React, utilizando Redux para el manejo eficiente del estado y Material UI para un diseño moderno y accesible. Implementa animaciones fluidas con Framer Motion, creando una experiencia visual atractiva. La interfaz es completamente responsive, permitiendo gestionar datos de forma intuitiva desde cualquier dispositivo.'
}

const ProjectModal = ({ selectedId, setSelectedId, link, techs }) => {
    
  return (
    <>
      <div className="fixed-background" />
      <div
        className="modal-container"
        onClick={() => {
          setSelectedId(null);
        }}
      >
        <motion.div
          className="__motion-container"
          layoutId={selectedId}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="__video-container">video</div>
          <div className="__details-container">
            <div className="__details-subContainer">
              <div className="__techsContainer">
                <div className="__techsSubContainer">
                 {
                    techs && techs.map(tech => (
                        technos[tech]
                    ))
                 }
                </div>
              </div>
              <div className="__infoContainer">
                <p>
                  {details[selectedId]}
                </p>
              </div>
            </div>
            <FaExternalLinkAlt
              className="__link-icon"
              onClick={() => window.open(`${link}`)}
            />
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default ProjectModal;
