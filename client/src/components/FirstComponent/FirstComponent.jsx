import './FirstComponent.css';
import profile from '../../assets/69450496_119287666104715_7469307251434455040_n.png';
import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';

const FirstComponent = () => {
  return (
    <motion.div 
    className='first-container'
    initial={{ opacity:0, y:20 }}
    animate={{ opacity:1, y:0 }}
    transition={{ duration:1 }}
    >
        <div className='img-container'>
            <img src={profile} alt="" />
        </div>
        <TypeAnimation
        sequence={["<Hi there!, I'm Adrian />", 2000]}
        wrapper="div"
        repeat={Infinity}
        cursor={true}
        omitDeletionAnimation={true}
        speed={1}
        className='title-name'
        />
        <p>{'<'}FullStack Software Developer on Javascript{'/>'}</p>
    </motion.div>
  )
}

export default FirstComponent
