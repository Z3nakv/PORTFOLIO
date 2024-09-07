import './ThirdComponent.css';
import { VscGithub } from "react-icons/vsc";
import ParticlesComponent from '../Particles';
import { FaLinkedin } from "react-icons/fa";

const ThirdComponent = () => {
  return (
    <div className='third-container'>
          <div className='icons_container'>
            <VscGithub onClick={() => window.open('https://github.com/Z3nakv','blank')} className='github-icon' />
            <FaLinkedin onClick={() => window.open('https://www.linkedin.com/in/adrian-muñoz-rivarola-43b388292', 'blank')} className='linkedin-icon' />
          </div>
            {/* <ParticlesComponent  className="particles" /> */}
    </div>
  )
}

export default ThirdComponent
