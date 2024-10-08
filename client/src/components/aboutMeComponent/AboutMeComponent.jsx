import { motion } from 'framer-motion'
import "./aboutMeComponent.css";

const AboutMeComponent = () => {
  return (
    <motion.div 
    className="ninth-container"
    initial={{ opacity:0, y:20 }}
    animate={{ opacity:1, y:0 }}
    transition={{ duration:2.6, delay:1.6 }}
    >
      <h2 className="_title">Hello World! 👽</h2>
      <p className="_paragraph">
      I'm developer specialized in the MERN stack, with a particular focus on frontend development. My passion for technology and design has led me to build intuitive and efficient web applications, always striving to provide an exceptional user experience.
      </p>
    </motion.div>
  );
};

export default AboutMeComponent;
