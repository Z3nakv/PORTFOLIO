import './SeventhComponent.css';
import { CgMail } from "react-icons/cg";
import { motion } from 'framer-motion'

const SeventhComponent = () => {
  return (
    <motion.div 
    className='seventh-container'
    initial={{ opacity:0, y:20 }}
    animate={{ opacity:1, y:0 }}
    transition={{ duration:2.2, delay:1.2 }}
    >
      <h4>Let's Talk!</h4>
      <a href="mailto:ad.rivarola18@gmail.com" target="_blank">
        <CgMail />
      </a>
    </motion.div>
  )
}

export default SeventhComponent
