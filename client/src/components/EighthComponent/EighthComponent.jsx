import "./EighthComponent.css";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io";
import { FaHtml5 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";

const EighthComponent = () => {
  return (
    <div className="eighth-container">
      <FaReact
        onClick={() => window.open("https://react.dev/learn", "_blank")}
      />
      <RiTailwindCssFill
        onClick={() =>
          window.open("https://tailwindcss.com/docs/utility-first", "_blank")
        }
      />
      <IoLogoJavascript
        onClick={() =>
          window.open(
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            "_blank"
          )
        }
      />
      <FaNodeJs
        onClick={() =>
          window.open(
            "https://nodejs.org/en/learn/getting-started/introduction-to-nodejs",
            "_blank"
          )
        }
      />
      <IoLogoCss3
        onClick={() =>
          window.open(
            "https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps",
            "_blank"
          )
        }
      />
      <FaHtml5
        onClick={() =>
          window.open(
            "https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML",
            "_blank"
          )
        }
      />
    </div>
  );
};

export default EighthComponent;
