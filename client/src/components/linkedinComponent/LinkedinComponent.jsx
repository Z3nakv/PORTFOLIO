import "./LinkedinComponent.css";
import { FaLinkedin } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const LinkedinComponent = () => {
  return (
    <motion.div
      className="main_container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay: 0.2 }}
      onClick={() =>
        window.open(
          "https://www.linkedin.com/in/adrian-muñoz-rivarola-43b388292",
          "blank"
        )
      }
    >
      <motion.div
      className="sub_container"
      whileHover={{ scale: 1.2, duration: 0.5 }}
      >
        <FaExternalLinkAlt className="link-icon" />
        <FaLinkedin className="linkedin-icon" />
      </motion.div>
    </motion.div>
  );
};

export default LinkedinComponent;
