'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import './ARBusinessCardSection.css';

export default function ARBusinessCardSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { margin: "-10% 0px -10% 0px", once: false });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.15,
        delayChildren: 0.1
      } 
    },
    exit: { 
      opacity: 0,
      transition: { staggerChildren: 0.05 }
    }
  };

  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    exit: { opacity: 0, y: -10 }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut", delay: 0.2 }
    },
    exit: { opacity: 0, y: 10 }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, rotateY: -15 },
    visible: { 
      opacity: 1, 
      scale: 1,
      rotateY: 0,
      transition: { 
        duration: 0.7, 
        delay: 0.4,
        type: "spring",
        stiffness: 70
      }
    },
    exit: { opacity: 0, scale: 0.95, rotateY: -10 }
  };

  const arElementsVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (custom: number) => ({ 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.5, 
        delay: 0.7 + (custom * 0.15),
        type: "spring",
        stiffness: 100
      }
    }),
    exit: { opacity: 0, scale: 0.9 }
  };

  const featuresVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom: number) => ({ 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5, 
        delay: 0.3 + (custom * 0.1),
        type: "spring",
        stiffness: 100
      }
    }),
    exit: { opacity: 0, y: 20 }
  };

  const phoneVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.7, 
        delay: 0.6,
        type: "spring",
        stiffness: 50
      }
    },
    exit: { opacity: 0, x: 30 }
  };

  const arFeatures = [
    {
      title: "Informações Dinâmicas",
      description: "Atualize informações como telefone e e-mail sem precisar reimprimir cartões"
    },
    {
      title: "Conteúdo Multimídia",
      description: "Mostre vídeos, portfólio e demonstrações diretamente do seu cartão"
    },
    {
      title: "Análise de Interações",
      description: "Saiba quantas pessoas escanearam seu cartão e quais conteúdos visualizaram"
    },
    {
      title: "Integração com Redes Sociais",
      description: "Conecte seus visitantes diretamente às suas plataformas sociais e profissionais"
    }
  ];

  return (
    <section className="ar-card-section" ref={sectionRef}>
      <div className="ar-background-elements">
        <div className="ar-shape ar-shape-1"></div>
        <div className="ar-shape ar-shape-2"></div>
        <div className="ar-light ar-light-1"></div>
        <div className="ar-light ar-light-2"></div>
        <div className="ar-grid"></div>
      </div>
      
      <motion.div 
        className="ar-container"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "exit"}
      >
        <motion.div 
          className="ar-header"
          variants={headingVariants}
        >
          <h2 className="ar-title">Cartões de Visita com <span>Realidade Aumentada</span></h2>
        </motion.div>
        
        <motion.div 
          className="ar-description"
          variants={textVariants}
        >
          <p>
            Transforme a primeira impressão em uma experiência digital inesquecível. Cartões de visita que 
            ganham vida através da tela do smartphone, conectando o mundo físico ao digital de forma elegante e inovadora.
          </p>
          <p>
            A <span className="ar-highlight">RM Soft</span> traz para Matinhos uma solução exclusiva que combina 
            design sofisticado com a mais avançada tecnologia de realidade aumentada.
          </p>
        </motion.div>

        <div className="ar-content">
          <div className="ar-demo-container">
            <div className="ar-card-demo">
              <motion.div 
                className="ar-business-card"
                variants={cardVariants}
                style={{ 
                  transformStyle: "preserve-3d",
                  perspective: "1000px"
                }}
              >
                <div className="card-front">
                  <div className="card-logo">RM</div>
                  <div className="card-info">
                    <div className="card-name">João Silva</div>
                    <div className="card-position">Arquiteto de Software</div>
                    <div className="card-contact">
                      <span>contato@rmsoft.com.br</span>
                      <span>+55 (41) 99999-9999</span>
                    </div>
                    <div className="card-address">Av. Paraná, 123 - Matinhos, PR</div>
                  </div>
                  <div className="card-scan-marker">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 8V6a2 2 0 0 1 2-2h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M4 16v2a2 2 0 0 0 2 2h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M16 4h2a2 2 0 0 1 2 2v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M16 20h2a2 2 0 0 0 2-2v-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/>
                    </svg>
                    <span>Escaneie</span>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="ar-phone-container"
                variants={phoneVariants}
              >
                <div className="ar-phone">
                  <div className="phone-notch"></div>
                  <div className="phone-screen">
                    <div className="phone-camera-ui">
                      <div className="camera-controls">
                        <div className="camera-flash"></div>
                        <div className="camera-shutter"></div>
                        <div className="camera-switch"></div>
                      </div>
                      <div className="camera-focus-box"></div>
                      <div className="camera-info">Escaneando cartão...</div>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <div className="ar-projection">
                <motion.div 
                  className="ar-element ar-profile"
                  variants={arElementsVariants}
                  custom={0}
                >
                  <div className="ar-profile-pic"></div>
                  <div className="ar-profile-info">
                    <span className="ar-profile-name">João Silva</span>
                    <span className="ar-profile-bio">Especialista em soluções digitais inovadoras</span>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="ar-element ar-social-links"
                  variants={arElementsVariants}
                  custom={1}
                >
                  <div className="ar-social-icon linkedin">in</div>
                  <div className="ar-social-icon github">gh</div>
                  <div className="ar-social-icon instagram">ig</div>
                </motion.div>
                
                <motion.div 
                  className="ar-element ar-portfolio"
                  variants={arElementsVariants}
                  custom={2}
                >
                  <div className="ar-portfolio-header">Portfólio</div>
                  <div className="ar-portfolio-projects">
                    <div className="ar-portfolio-project"></div>
                    <div className="ar-portfolio-project"></div>
                    <div className="ar-portfolio-project"></div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="ar-element ar-cta"
                  variants={arElementsVariants}
                  custom={3}
                >
                  <span>Agendar Reunião</span>
                </motion.div>
              </div>
            </div>
          </div>
          
          <div className="ar-features">
            <div className="ar-features-list">
              {arFeatures.map((feature, index) => (
                <motion.div 
                  key={index} 
                  className="ar-feature-card"
                  variants={featuresVariants}
                  custom={index}
                >
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </motion.div>
              ))}
            </div>
            
            <div className="ar-advantages">
              <motion.div 
                className="ar-advantage-badge"
                variants={featuresVariants}
                custom={5}
              >
                <span>Exclusivo para clientes da região</span>
              </motion.div>
              
              <motion.div 
                className="ar-advantage-item"
                variants={featuresVariants}
                custom={6}
              >
                <div className="ar-advantage-mark">+</div>
                <span>Memorável</span>
              </motion.div>
              
              <motion.div 
                className="ar-advantage-item"
                variants={featuresVariants}
                custom={7}
              >
                <div className="ar-advantage-mark">+</div>
                <span>Interativo</span>
              </motion.div>
              
              <motion.div 
                className="ar-advantage-item"
                variants={featuresVariants}
                custom={8}
              >
                <div className="ar-advantage-mark">+</div>
                <span>Profissional</span>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
} 