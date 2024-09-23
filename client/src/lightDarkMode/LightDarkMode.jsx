import { useState } from "react";
import { motion } from "framer-motion";
import { MdLightMode, MdOutlineDarkMode } from "react-icons/md";
import './lightDarkMode.css';

export default function LightDarkModeComponent({ handleToggle, theme }) {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => setIsOn(!isOn);

  return (
    <div className="switch" data-ison={isOn} onClick={() => {toggleSwitch();handleToggle()}}>
      <motion.div className="handle" layout transition={spring}>
      {theme === "dark" ? (
          <MdLightMode  />
        ) : (
          <MdOutlineDarkMode  />
        )}
      </motion.div>
    </div>
  );
}

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30
};
