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
import LinkedinComponent from './components/linkedinComponent/LinkedinComponent.jsx';
import Curriculum from './components/curriculum/Curriculum.jsx';
import ChatAppAi from './components/chat-app-ai/ChatAppAi.jsx';
import { useRef } from 'react';

const App = () => {

  const {theme, handleToggleTheme} = useLightDarkMode();
  
  return (
    <>
    <div className='main-container' data-theme={theme}>
      <div className='grid-container'>

        <FirstComponent />

        <SecondComponent />

        <ThirdComponent />

        <FourthComponent handleToggle={handleToggleTheme} theme={theme} />

        <FifthComponent />

        <SixthComponent />
        
        <SeventhComponent />

        <LinkedinComponent />

        <EighthComponent />

        <Curriculum />

        <NinthComponent />

      </div>
      <ChatAppAi />
    </div>
    </>
  )
}

export default App
