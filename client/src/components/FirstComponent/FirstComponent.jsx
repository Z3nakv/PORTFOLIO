import './FirstComponent.css';
import profile from '../../assets/69450496_119287666104715_7469307251434455040_n.png';

const FirstComponent = () => {
  return (
    <div className='first-container'>
        <div className='img-container'>
            <img src={profile} alt="" />
        </div>
        <div className='info-container'>
            <h1>Adrian Rivarola</h1>
            <p>FullStack Software Developer on Javascript</p>
          <hr />
        </div>
    </div>
  )
}

export default FirstComponent
