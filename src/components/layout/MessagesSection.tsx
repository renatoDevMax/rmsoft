'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaSms, FaBell, FaRegComment, FaUsers, FaShippingFast, FaRegSmile } from 'react-icons/fa';
import './MessagesSection.css';

const notificationItems = [
  {
    icon: <FaShippingFast />,
    title: 'Entregas a Caminho',
    description: 'Mantenha seus clientes informados sobre o status das entregas em tempo real'
  },
  {
    icon: <FaRegSmile />,
    title: 'Boas-vindas Personalizadas',
    description: 'Crie uma conexão imediata com seus clientes através de mensagens de boas-vindas personalizadas'
  },
  {
    icon: <FaBell />,
    title: 'Notificações Automáticas',
    description: 'Envie notificações automáticas sobre promoções, eventos e novidades do seu negócio'
  },
  {
    icon: <FaUsers />,
    title: 'Comunicação com Equipe',
    description: 'Mantenha sua equipe alinhada com notificações internas para colaboradores'
  }
];

export default function MessagesSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { margin: "-10% 0px -10% 0px", once: false });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.1
      } 
    },
    exit: { 
      opacity: 0,
      transition: { 
        staggerChildren: 0.05,
        staggerDirection: -1
      } 
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
    exit: { opacity: 0, y: -10 }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    exit: { opacity: 0, y: 20 }
  };

  const phoneVariants = {
    hidden: { opacity: 0, scale: 0.9, rotateY: -20 },
    visible: { 
      opacity: 1, 
      scale: 1,
      rotateY: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.3 }
    },
    exit: { opacity: 0, scale: 0.95, rotateY: -10 }
  };

  const bubbleVariants = {
    hidden: { opacity: 0, scale: 0, y: 20 },
    visible: (custom: number) => ({ 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: { 
        duration: 0.5, 
        delay: 0.7 + (custom * 0.15),
        type: "spring",
        stiffness: 200
      }
    }),
    exit: { opacity: 0, scale: 0.8, y: 10 }
  };

  return (
    <section className="messages-section" ref={sectionRef}>
      <motion.div 
        className="messages-container"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "exit"}
      >
        <motion.div 
          className="messages-header"
          variants={titleVariants}
        >
          <h2 className="messages-title">Comunicação Integrada</h2>
          <p className="messages-subtitle">
            Alcance seus clientes e colaboradores através de notificações personalizadas com apenas um clique
          </p>
        </motion.div>

        <div className="messages-content">
          <div className="messages-features">
            {notificationItems.map((item, index) => (
              <motion.div 
                key={index} 
                className="message-card"
                variants={itemVariants}
              >
                <div className="message-card-icon">
                  {item.icon}
                </div>
                <div className="message-card-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="messages-visual"
            variants={phoneVariants}
          >
            <div className="phone-container">
              <div className="phone-header">
                <div className="phone-notch"></div>
              </div>
              <div className="phone-screen">
                <div className="app-header">
                  <FaSms className="app-icon" />
                  <span>RM Mensagens</span>
                </div>
                <div className="chat-container">
                  <motion.div 
                    className="chat-bubble company"
                    variants={bubbleVariants}
                    custom={0}
                  >
                    <FaRegComment className="bubble-icon" />
                    <p>Olá Maria! Seu pedido #4872 já está a caminho.</p>
                    <span className="bubble-time">09:42</span>
                  </motion.div>
                  
                  <motion.div 
                    className="chat-bubble client"
                    variants={bubbleVariants}
                    custom={1}
                  >
                    <p>Obrigada pela informação!</p>
                    <span className="bubble-time">09:43</span>
                  </motion.div>
                  
                  <motion.div 
                    className="chat-bubble company"
                    variants={bubbleVariants}
                    custom={2}
                  >
                    <FaRegComment className="bubble-icon" />
                    <p>Sua entrega foi realizada com sucesso no endereço solicitado.
                    Se esqueceu de alguma coisa, só pedir em nosso site https://seusite.com.br! 😊</p>
                    <span className="bubble-time">10:15</span>
                  </motion.div>
                  
                  <motion.div 
                    className="chat-bubble client"
                    variants={bubbleVariants}
                    custom={3}
                  >
                    <p>Muito obrigada! Vocês são realmente os melhores! 🌟</p>
                    <span className="bubble-time">10:16</span>
                  </motion.div>
                </div>
              </div>
              <div className="phone-footer">
                <div className="phone-button"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
} 