import './ThirdComponent.css';
import { VscGithub } from "react-icons/vsc";
import ParticlesComponent from '../Particles';
import { FaLinkedin } from "react-icons/fa";
import { motion } from 'framer-motion'

const ThirdComponent = () => {
  return (
    <motion.div 
    className='third-container'
    initial={{ opacity:0, y:20 }}
    animate={{ opacity:1, y:0 }}
    transition={{ duration:1.2, delay:.2 }}
    >
          <div className='icons_container'>
            <VscGithub onClick={() => window.open('https://github.com/Z3nakv','blank')} className='github-icon' />
            <FaLinkedin onClick={() => window.open('https://www.linkedin.com/in/adrian-muñoz-rivarola-43b388292', 'blank')} className='linkedin-icon' />
          </div>
            {/* <ParticlesComponent  className="particles" /> */}
    </motion.div>
  )
}

export default ThirdComponent
