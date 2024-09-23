import "./SeventhComponent.css";
import { CgMail } from "react-icons/cg";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

const SeventhComponent = () => {
  return (
    <motion.div
      className="seventh-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2.2, delay: 1.2 }}
    >
      <motion.div
      className="sub_container"
      whileHover={{ scale: 1.2, duration: 0.5 }}
      >
        <FaExternalLinkAlt className="link-icon" />
        <a href="mailto:ad.rivarola18@gmail.com" target="_blank">
          <CgMail className="mail-icon" />
        </a>
      </motion.div>
    </motion.div>
  );
};

export default SeventhComponent;
