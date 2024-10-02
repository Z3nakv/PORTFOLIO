import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
import './introductionComponent.css';

const IntroductionComponent = () => {

  return (
    <motion.div 
    className='first-container'
    initial={{ opacity:0, y:20 }}
    animate={{ opacity:1, y:0 }}
    transition={{ duration:1 }}
    >
      <div className='_bg'></div>
        <div className='_img-container'>
            <img src={'https://media.tenor.com/f61Fpec7INoAAAAi/mecha-anime.gif'} alt="" />
        </div>
        <TypeAnimation
        sequence={["<Hi there!, I'm Adrian />", 2000]}
        wrapper="div"
        repeat={Infinity}
        cursor={true}
        omitDeletionAnimation={true}
        speed={1}
        className='_title'
        />
        <p className='_paragraph'>{'<'}FullStack Software Developer on Javascript{'/>'}</p>
    </motion.div>
  )
}

export default IntroductionComponent;
