import { TbTruckDelivery } from "react-icons/tb";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from "react";
import ProjectModal from "./project-modal/projectModal";
import "./projectsComponent.css";

const ProjectsComponent = () => {
  const [techs, setTechs] = useState([])
  const [selectedId, setSelectedId] = useState(null);
  // const selectedTask = tasks[selectedId] || null;
  const link = selectedId === '1' 
    ? 'https://food-delivery-frontend-vq0w.onrender.com'
    : selectedId === '2'
    ? 'https://chat-app-2edbe.web.app'
    : 'https://admin-dashboard-4txj.onrender.com/'

  const delivery = ['react', 'js', 'css', 'html', 'node', 'mongo', 'stripe', 'express'];
  const chat = ['react', 'js', 'css', 'html', 'firebase'];
  const dashboard = ['react', 'js', 'node', 'express', 'framer', 'redux'];

  return (
    <>
    <motion.div 
    className="projects-container"
    initial={{ opacity:0, y:20 }}
    animate={{ opacity:1, y:0 }}
    transition={{ duration:1.8, delay:.8 }}
    >
      <h2 className="__title">Projects</h2>
      <div className="__projects">
        <motion.div className="__project" key={'1'} layoutId={'1'}>
          <TbTruckDelivery  onClick={()=> { setSelectedId('1'); setTechs(delivery) }} />
          <p className="__title-project">Food Delivery</p>
        </motion.div>
        <motion.div className="__project" key={'2'} layoutId={'2'}>
          <IoChatbubbleEllipses  onClick={()=> { setSelectedId('2'); setTechs(chat) }} />
          <p className="__title-project">Chat App</p>
        </motion.div>
        <motion.div className="__project" key={'3'} layoutId={'3'}>
          <MdDashboard  onClick={()=> { setSelectedId('3'); setTechs(dashboard) }} />
          <p className="__title-project">Dashboard</p>
        </motion.div>
      </div>
    </motion.div>
    {
      selectedId && 
      <AnimatePresence>
        <ProjectModal selectedId={selectedId} setSelectedId={setSelectedId} link={link} techs={techs} />
      </AnimatePresence>
    }
    </>
  );
};

export default ProjectsComponent;
