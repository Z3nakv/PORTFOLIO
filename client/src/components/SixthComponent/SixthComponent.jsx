import "./SixthComponent.css";
import useFetchNews from '../../Hooks/useFetchNews.js';
import Loader from "../../loader/Loader";
import { motion } from 'framer-motion'
import { FaExternalLinkAlt } from "react-icons/fa";

const SixthComponent = () => {
    const { news } = useFetchNews();
  return (
    <motion.div 
    className="sixth-container"
    initial={{ opacity:0, y:20 }}
    animate={{ opacity:1, y:0 }}
    transition={{ duration:2, delay:1 }}
    >
      <motion.div
      className="sub_container"
      whileHover={{ scale: 1.2, duration: 0.5 }}
      onClick={() => window.open(`${news.source.url}`, "blank")}
      >
        <FaExternalLinkAlt className="link-icon" />
        {
        !news
        ? <Loader />
        :
        (
          <>
            <h2>{news.title}</h2>
            <img src={news.image} alt="" />
          </>
        )}
      </motion.div>
    </motion.div>
  );
};

export default SixthComponent;
