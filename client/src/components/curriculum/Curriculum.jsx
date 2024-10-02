import { TbFileCv } from "react-icons/tb";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import "./Curriculum.css";

const Curriculum = () => {
  return (
    <motion.div
      className="main_cv_container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay: 0.2 }}
    >
      <motion.div
      className="__sub-container"
      whileHover={{ scale: 1.2, duration: 0.5 }}
      >
        <FaExternalLinkAlt className="__link-icon" />
        <a href="/resume.pdf" download="resume.pdf">
          <TbFileCv className="__link-cv" />
        </a>
      </motion.div>
    </motion.div>
  );
};

export default Curriculum;
