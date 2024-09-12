import "./SixthComponent.css";
import useFetchNews from '../../Hooks/useFetchNews.js';
import Loader from "../../loader/Loader";
import { motion } from 'framer-motion'

const SixthComponent = () => {
    const { news } = useFetchNews();
  return (
    <motion.div 
    className="sixth-container"
    initial={{ opacity:0, y:20 }}
    animate={{ opacity:1, y:0 }}
    transition={{ duration:2, delay:1 }}
    >
        {
        !news
        ? <Loader />
        :
        (
          <>
            <h2>{news.title}</h2>
            <a href={news.source.url} target="_blank">
              {news.source.url}
            </a>
            <img src={news.image} alt="" />
          </>
        )}
      
    </motion.div>
  );
};

export default SixthComponent;
