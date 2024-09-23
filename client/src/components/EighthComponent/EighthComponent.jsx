import "./EighthComponent.css";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io";
import { FaHtml5 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { motion } from 'framer-motion'

const EighthComponent = () => {
  return (
    <motion.div 
    className="eighth-container"
    initial={{ opacity:0, y:20 }}
    animate={{ opacity:1, y:0 }}
    transition={{ duration:2.4, delay:1.4 }}
    >
      <FaReact
      className="react-icon"
        onClick={() => window.open("https://react.dev/learn", "_blank")}
      />
      <RiTailwindCssFill
      className="react-icon"
        onClick={() =>
          window.open("https://tailwindcss.com/docs/utility-first", "_blank")
        }
      />
      <IoLogoJavascript
      className="react-icon"
        onClick={() =>
          window.open(
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            "_blank"
          )
        }
      />
      <FaNodeJs
      className="react-icon"
        onClick={() =>
          window.open(
            "https://nodejs.org/en/learn/getting-started/introduction-to-nodejs",
            "_blank"
          )
        }
      />
      <IoLogoCss3
      className="react-icon"
        onClick={() =>
          window.open(
            "https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps",
            "_blank"
          )
        }
      />
      <FaHtml5
      className="react-icon"
        onClick={() =>
          window.open(
            "https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML",
            "_blank"
          )
        }
      />
    </motion.div>
  );
};

export default EighthComponent;
