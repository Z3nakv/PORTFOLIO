import "./ThirdComponent.css";
import { VscGithub } from "react-icons/vsc";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const ThirdComponent = () => {
  const [gif, setGif] = useState("");
  const requesGif = async () => {
    const response = await fetch(
      "https://api.giphy.com/v1/gifs/gEKz4VLX7fQlsl8SFE?api_key=6Dz6VoNKPyxJ3QYVK1crzeIsxhaM2wL3&rating=g"
    );
    const result = await response.json();
    setGif(result.data.images.downsized.url);
  };

  useEffect(() => {
    requesGif();
  }, []);

  return (
    <motion.div
      className="third-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay: 0.2 }}
      onClick={() => window.open("https://github.com/Z3nakv", "blank")}
    >
      <motion.div
        className="sub_container"
        whileHover={{ scale: 1.2, duration: 0.5 }}
      >
        <p>Check out my projects and practice work here!</p>
        <FaExternalLinkAlt className="link-icon" />
        {gif && <img src={gif} alt="" />}
        <VscGithub className="github-icon" />
      </motion.div>
    </motion.div>
  );
};

export default ThirdComponent;
