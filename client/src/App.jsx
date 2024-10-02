import IntroductionComponent from './components/introductionComponent/IntroductionComponent.jsx';
import WeatherComponent from './components/weatherComponent/WeatherComponent.jsx';
import GithubComponent from './components/githubComponent/GithubComponent.jsx';
import useLightDarkMode from './Hooks/useLightDarkMode.js';
import TimeComponent from './components/timeComponent/TimeComponent.jsx';
import ProjectsComponent from './components/FifthComponent/ProjectsComponent.jsx';
import NewsComponent from './components/newsComponent/NewsComponent.jsx';
import ContactMeComponent from './components/contactMeComponent/ContactMeComponent.jsx';
import SkillsComponent from './components/skillsComponent/SkillsComponent.jsx';
import AboutMeComponent from './components/aboutMeComponent/AboutMeComponent.jsx';
import LinkedinComponent from './components/linkedinComponent/LinkedinComponent.jsx';
import Curriculum from './components/curriculum/Curriculum.jsx';
import ChatAppAi from './components/chat-app-ai/ChatAppAi.jsx';

const App = () => {

  const {theme, handleToggleTheme} = useLightDarkMode();
  
  return (
    <>
    <div className='main-container' data-theme={theme}>
      <div className='grid-container'>

        <IntroductionComponent />

        <WeatherComponent />

        <GithubComponent />

        <TimeComponent handleToggle={handleToggleTheme} theme={theme} />

        <ProjectsComponent />

        <NewsComponent />
        
        <ContactMeComponent />

        <LinkedinComponent />

        <SkillsComponent />

        <Curriculum />

        <AboutMeComponent />

      </div>
      <ChatAppAi />
    </div>
    </>
  )
}

export default App
