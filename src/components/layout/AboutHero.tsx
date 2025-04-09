'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { FaLightbulb, FaCode, FaHandshake, FaUserTie } from 'react-icons/fa';
import './AboutHero.css';

const AboutHero = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Variantes de animação para os elementos
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  // Lista de valores/diferenciais da empresa
  const values = [
    {
      icon: <FaLightbulb />,
      title: "Conhecimento Prático",
      description: "Nossos produtos nascem da experiência real com os desafios diários das empresas."
    },
    {
      icon: <FaCode />,
      title: "Simplicidade Funcional",
      description: "Criamos soluções intuitivas que eliminam a complexidade desnecessária."
    },
    {
      icon: <FaHandshake />,
      title: "Foco no Cliente",
      description: "Desenvolvemos escutando as necessidades reais de quem vai usar o sistema."
    },
    {
      icon: <FaUserTie />,
      title: "Experiência Empresarial",
      description: "Nossa trajetória no setor financeiro guia o desenvolvimento de soluções práticas."
    }
  ];

  return (
    <section className="about-hero" ref={sectionRef}>
      <div className="about-background-elements">
        <div className="about-circle about-circle-1"></div>
        <div className="about-circle about-circle-2"></div>
        <div className="about-line about-line-1"></div>
        <div className="about-line about-line-2"></div>
      </div>

      <div className="about-container">
        <motion.div
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h1 className="about-title" variants={itemVariants}>
            Nossa História
          </motion.h1>

          <motion.div className="about-subtitle-container" variants={itemVariants}>
            <div className="about-subtitle-line"></div>
            <h2 className="about-subtitle">Uma jornada de transformação digital</h2>
            <div className="about-subtitle-line"></div>
          </motion.div>

          <div className="about-story-container">
            <motion.div className="about-story-text" variants={itemVariants}>
              <p className="about-paragraph">
                A <span className="about-highlight brand-with-logo">
                  RM Soft
                  <Image
                    src="/logo.svg"
                    alt="RM Soft Logo"
                    width={24}
                    height={24}
                    className="about-logo"
                  />
                </span> nasceu da inquietação de um profissional do setor financeiro que, 
                dia após dia, enfrentava a frustração de utilizar sistemas que pareciam ter sido criados por 
                quem nunca havia pisado em um escritório real.
              </p>

              <p className="about-paragraph">
                Trabalhando no departamento financeiro de uma empresa, nosso fundador percebeu que a maioria 
                dos softwares disponíveis no mercado eram desenvolvidos com uma visão distante da realidade. 
                Interfaces poluídas, processos confusos e funcionalidades que ninguém realmente usava eram a regra, 
                não a exceção.
              </p>

              <p className="about-paragraph">
                Foi então que surgiu a pergunta que mudaria tudo: <span className="about-quote">"E se as ferramentas 
                fossem criadas por quem realmente entende os desafios do dia a dia?"</span>
              </p>

              <p className="about-paragraph">
                Em 2020, nasceu a <span className="about-highlight brand-with-logo">
                  RM Soft
                  <Image
                    src="/logo.svg"
                    alt="RM Soft Logo"
                    width={24}
                    height={24}
                    className="about-logo"
                  />
                </span> com uma missão clara: desenvolver soluções tecnológicas que 
                realmente simplificam a vida das pessoas e das empresas, criadas a partir da experiência 
                real e do entendimento profundo das necessidades práticas do mundo corporativo.
              </p>
            </motion.div>

            <motion.div 
              className="about-image-container"
              variants={imageVariants}
            >
              <div className="about-image">
                <div className="about-image-inner">
                  {/* Esta div simula uma imagem, em produção seria substituída por um componente Image do Next.js */}
                </div>
              </div>
            </motion.div>
          </div>

          <motion.h3 className="about-values-title" variants={itemVariants}>
            Nossos Valores
          </motion.h3>

          <motion.div className="about-values-container" variants={containerVariants}>
            {values.map((value, index) => (
              <motion.div 
                key={index} 
                className="about-value-card"
                variants={itemVariants}
                whileHover={{ y: -10, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="about-value-icon">
                  {value.icon}
                </div>
                <h4 className="about-value-title">{value.title}</h4>
                <p className="about-value-description">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero; 