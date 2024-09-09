import './SeventhComponent.css';
import { CgMail } from "react-icons/cg";

const SeventhComponent = () => {
  return (
    <div className='seventh-container'>
      <h4>Let's Talk!</h4>
      <a href="mailto:ad.rivarola18@gmail.com" target="_blank">
        <CgMail />
      </a>
    </div>
  )
}

export default SeventhComponent
