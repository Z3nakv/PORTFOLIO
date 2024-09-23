import { useEffect, useRef, useState } from "react";
import model from "./gemini.js";
import Markdown from "react-markdown";
import { BsSend } from "react-icons/bs";
import { BsChatRightDotsFill } from "react-icons/bs";
import { AnimatePresence, motion } from "framer-motion";
import useOutsideClick from "./useOutsideClick.jsx";
import './ChatAppAi.css';

const ChatAppAi = () => {
  const [chat, setChat] = useState([]);
  const [showChat, setShowChat] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = useRef(null);
  const endRef = useRef(null);
  const containerRef = useRef(null);

  useOutsideClick(containerRef, () => setShowChat(false));

  useEffect(() => {
    const pastChat = JSON.parse(localStorage.getItem("history"));
    if (pastChat && pastChat.length > 0) {
      setChat(pastChat);
    }
  }, []);

  useEffect(() => {
    if (showChat && endRef.current) {
      endRef.current.scrollIntoView({ behavior: "smooth" });
    }
    localStorage.setItem("history", JSON.stringify(chat));
  }, [chat]);

  const addSaludoIfNeeded = () => {
    const lastOpened = localStorage.getItem("lastOpened");
    const currentTime = new Date().getTime();
    
    // Si no hay registro previo o han pasado más de 30 minutos (1800000 ms)
    if (!lastOpened || currentTime - lastOpened > 1800000) {
      setChat((prev) => [
        ...prev,
        { role: "model", parts: [{ text: "Hola, soy el asistente virtual de Adrian! ¿En qué puedo ayudarte hoy?" }] },
      ]);
    }
    
    // Actualizar el timestamp de la última vez que se abrió el chat
    localStorage.setItem("lastOpened", currentTime);
  };

  const result = async (userMessage) => {
    // Añadir el mensaje del usuario inmediatamente al chat
    setChat((prev) => [
      ...prev,
      { role: "user", parts: [{ text: userMessage }] },
    ]);

    try {
      // Obtener la respuesta del modelo
      const respuesta = await model.generateContent(userMessage);
      const modelResponse = respuesta.response.text();

      // Añadir la respuesta del modelo al chat cuando esté disponible
      setChat((prev) => [
        ...prev,
        { role: "model", parts: [{ text: modelResponse }] },
      ]);
    } catch (error) {
      console.error("Error fetching response:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userMessage = e.target.chatInput.value;
    result(userMessage);
    inputRef.current.reset();
  };

  const handleClick = (e) => {
    if(!isDragging){
      setShowChat((prev) => !prev);
      if (!showChat) {
        // Si el chat se está abriendo, comprobar el saludo
        addSaludoIfNeeded();
      }
    }
    setIsDragging(false);
  };
  const handleDragStart = () => {
    setIsDragging(true); // Detectar que comenzó el arrastre
  };
  const handleDragEnd = () => {
    setIsDragging(false); // Terminar el arrastre
  };

  return (
    <>
        
        <motion.div
          onClick={handleClick}
          className="chat-bot"
          drag={true}
          dragConstraints={{
            top:-`${document.documentElement.clientHeight}`+150, 
            bottom:0, 
            left:-`${document.documentElement.clientWidth}`+150, 
            right:0
          }}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
        >
          <BsChatRightDotsFill className="chat-bot-icon" />
          <img className="bot" src="/bot.png" alt="" />
        </motion.div>
      
      <AnimatePresence>
        {showChat && (
          <>
          <div className="chat-background"></div>
          <div className="main-chat-container">
            <motion.div
              ref={containerRef}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
              onAnimationComplete={() => {
                if (endRef.current) {
                  endRef.current.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              <div className="container">
                <div className="chat-board">
                  {chat &&
                    chat.map((message, index) => (
                      <div
                        className={
                          message.role === "user" ? "message user" : "message"
                        }
                        key={index}
                      >
                        {message.role !== "user" ? (
                          <img className="bot-img" src="/bot.png" />
                        ) : (
                          ""
                        )}
                        <Markdown>{message.parts[0].text}</Markdown>
                      </div>
                    ))}
                  <div ref={endRef}></div>
                </div>
                <form onSubmit={handleSubmit} ref={inputRef}>
                  <input type="text" name="chatInput" />
                  <button>
                    <BsSend />
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatAppAi;
