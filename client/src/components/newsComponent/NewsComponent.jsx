import useFetchNews from '../../Hooks/useFetchNews.js';
import Loader from "../../loader/Loader.jsx";
import { motion } from 'framer-motion'
import { FaExternalLinkAlt } from "react-icons/fa";
import "./newsComponent.css";

const NewsComponent = () => {
    const { news } = useFetchNews();
  return (
    <motion.div 
    className="news-container"
    initial={{ opacity:0, y:20 }}
    animate={{ opacity:1, y:0 }}
    transition={{ duration:2, delay:1 }}
    >
      <motion.div
      className="__sub-container"
      whileHover={{ scale: 1.2, duration: 0.5 }}
      onClick={() => window.open(`${news.source.url}`, "blank")}
      >
        <div className="__bg"></div>
        <FaExternalLinkAlt className="__link-icon" />
        {
        !news
        ? <Loader />
        :
        (
          <>
            <h2 className='__title'>{news.title}</h2>
            <img className='__img' src={news.image} alt="" />
          </>
        )}
      </motion.div>
    </motion.div>
  );
};

export default NewsComponent;
