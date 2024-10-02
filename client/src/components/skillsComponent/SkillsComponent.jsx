import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io";
import { FaHtml5 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { FaGitAlt } from "react-icons/fa";
import { motion } from 'framer-motion';
import "./skillsComponent.css";

const EighthComponent = () => {
  return (
    <motion.div 
    className="skills-container"
    initial={{ opacity:0, y:20 }}
    animate={{ opacity:1, y:0 }}
    transition={{ duration:2.4, delay:1.4 }}
    >
      <FaReact
      className="__skill-icon"
        onClick={() => window.open("https://react.dev/learn", "_blank")}
      />
      <RiTailwindCssFill
      className="__skill-icon"
        onClick={() =>
          window.open("https://tailwindcss.com/docs/utility-first", "_blank")
        }
      />
      <IoLogoJavascript
      className="__skill-icon"
        onClick={() =>
          window.open(
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            "_blank"
          )
        }
      />
      <FaNodeJs
      className="__skill-icon"
        onClick={() =>
          window.open(
            "https://nodejs.org/en/learn/getting-started/introduction-to-nodejs",
            "_blank"
          )
        }
      />
      <IoLogoCss3
      className="__skill-icon"
        onClick={() =>
          window.open(
            "https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps",
            "_blank"
          )
        }
      />
      <FaHtml5
      className="__skill-icon"
        onClick={() =>
          window.open(
            "https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML",
            "_blank"
          )
        }
      />
      <SiMongodb 
      className="__skill-icon"
        onClick={() =>
          window.open(
            "https://www.mongodb.com/docs/drivers/node/current/",
            "_blank"
          )
        }
      />
      <GrMysql  
      className="__skill-icon"
        onClick={() =>
          window.open(
            "https://dev.mysql.com/doc/refman/8.4/en/introduction.html",
            "_blank"
          )
        }
      />
      <FaGitAlt   
      className="__skill-icon"
        onClick={() =>
          window.open(
            "https://git-scm.com/doc",
            "_blank"
          )
        }
      />
    </motion.div>
  );
};

export default EighthComponent;
