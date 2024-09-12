import './FirstComponent.css';
import profile from '../../assets/69450496_119287666104715_7469307251434455040_n.png';
import { motion } from "framer-motion";

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
        {/* <div className='info-container'> */}
        <h1>Adrian Rivarola</h1>
        <p>FullStack Software Developer on Javascript</p>
        {/* <hr /> */}
        {/* </div> */}
    </motion.div>
  )
}

export default FirstComponent
