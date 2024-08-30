import FirstComponent from './components/FirstComponent/FirstComponent.jsx';
import SecondComponent from './components/SecondComponent/SecondComponent.jsx';
import ThirdComponent from './components/ThirdComponent/ThirdComponent.jsx';
import useLightDarkMode from './Hooks/useLightDarkMode.js';
import FourthComponent from './components/FourthComponent/FourthComponent.jsx';
import FifthComponent from './components/FifthComponent/FifthComponent.jsx';
import SixthComponent from './components/SixthComponent/SixthComponent.jsx';
import SeventhComponent from './components/SeventhComponent/SeventhComponent.jsx';
import EighthComponent from './components/EighthComponent/EighthComponent.jsx';
import NinthComponent from './components/NinthComponent/NinthComponent.jsx';

const App = () => {

  const {theme, handleToggleTheme} = useLightDarkMode();
  
  return (
    <div data-theme={theme}>
      <div className='grid-container'>

        <FirstComponent />

        <SecondComponent />

        <ThirdComponent />

        <FourthComponent handleToggle={handleToggleTheme} theme={theme} />

        <FifthComponent />

        <SixthComponent />
        
        <SeventhComponent />

        <EighthComponent />

        <NinthComponent />

      </div>
    </div>
  )
}

export default App
