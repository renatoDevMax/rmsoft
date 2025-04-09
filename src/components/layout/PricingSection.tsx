'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaMobileAlt, FaDesktop, FaGlobe, FaMapMarkerAlt, FaRobot, FaFileInvoiceDollar } from 'react-icons/fa';
import './PricingSection.css';

export default function PricingSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { margin: "-10% 0px -10% 0px", once: false });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    },
    exit: { opacity: 0 }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -10 }
  };

  const descriptionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
    exit: { opacity: 0, y: 10 }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: (custom: number) => ({ 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.5, delay: 0.3 + (custom * 0.1), type: "spring", stiffness: 100 }
    }),
    exit: { opacity: 0, y: 20, scale: 0.95 }
  };

  const processVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (custom: number) => ({ 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5, delay: 0.4 + (custom * 0.1) }
    }),
    exit: { opacity: 0, x: -20 }
  };

  const ctaVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.6, delay: 0.8, type: "spring", stiffness: 70 }
    },
    exit: { opacity: 0, scale: 0.9 }
  };

  const services = [
    {
      icon: <FaMobileAlt />,
      title: "Aplicativos Mobile",
      description: "Apps nativos para iOS e Android, com interfaces elegantes e funcionalidades avançadas"
    },
    {
      icon: <FaDesktop />,
      title: "Software Desktop",
      description: "Programas otimizados e personalizados para sua empresa, com suporte contínuo"
    },
    {
      icon: <FaGlobe />,
      title: "Websites & WebApps",
      description: "Presença digital impactante com sites modernos e plataformas web interativas"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Sistemas de Rastreamento",
      description: "Soluções de monitoramento em tempo real para frotas, produtos ou equipamentos"
    },
    {
      icon: <FaRobot />,
      title: "Automação & IA",
      description: "Sistemas inteligentes para otimização de processos e tomada de decisões"
    }
  ];

  const pricingProcess = [
    {
      number: "01",
      title: "Consulta Inicial",
      description: "Analisamos suas necessidades e objetivos para entender completamente seu projeto"
    },
    {
      number: "02",
      title: "Análise Técnica",
      description: "Nossa equipe avalia os requisitos técnicos e planeja a abordagem ideal"
    },
    {
      number: "03",
      title: "Orçamento Detalhado",
      description: "Elaboramos uma proposta transparente com todas as etapas e valores envolvidos"
    },
    {
      number: "04",
      title: "Ajustes Personalizados",
      description: "Refinamos a proposta conforme seu feedback e necessidades específicas"
    }
  ];

  return (
    <section className="pricing-section" ref={sectionRef}>
      <div className="pricing-bg-elements">
        <div className="pricing-shape pricing-shape-1"></div>
        <div className="pricing-shape pricing-shape-2"></div>
        <div className="pricing-shape pricing-shape-3"></div>
        <div className="pricing-pattern"></div>
      </div>
      
      <motion.div 
        className="pricing-container"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "exit"}
      >
        <motion.div className="pricing-header" variants={titleVariants}>
          <h2>Soluções Personalizadas</h2>
          <div className="pricing-subtitle">Para cada desafio tecnológico</div>
        </motion.div>
        
        <motion.div className="pricing-description" variants={descriptionVariants}>
          <p>
            Na <span className="pricing-highlight">RM Soft</span>, desenvolvemos uma ampla gama de soluções 
            tecnológicas para atender às necessidades específicas do seu negócio. De aplicativos mobile a 
            sistemas autônomos complexos, nossa expertise abrange todo o espectro da tecnologia moderna.
          </p>
          <p>
            Cada projeto recebe um orçamento exclusivo, cuidadosamente elaborado após análise detalhada 
            dos seus requisitos e objetivos. Valorizamos a transparência e a precisão em cada proposta.
          </p>
        </motion.div>
        
        <div className="pricing-services">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="service-card"
              variants={cardVariants}
              custom={index}
            >
              <div className="service-icon">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="pricing-content">
          <motion.div className="process-container">
            <motion.h3 
              className="process-title"
              variants={processVariants}
              custom={0}
            >
              Como trabalhamos
            </motion.h3>
            
            <div className="pricing-process">
              {pricingProcess.map((step, index) => (
                <motion.div 
                  key={index}
                  className="process-step"
                  variants={processVariants}
                  custom={index + 1}
                >
                  <div className="step-number">{step.number}</div>
                  <div className="step-content">
                    <h4>{step.title}</h4>
                    <p>{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="pricing-quote-card"
            variants={ctaVariants}
          >
            <div className="quote-card-icon">
              <FaFileInvoiceDollar />
            </div>
            <h3>Solicite um orçamento</h3>
            <p>
              Cada projeto é único, e seu investimento é calculado de acordo com suas 
              necessidades específicas. Nossos orçamentos são transparentes e detalhados, 
              sem surpresas ou custos ocultos.
            </p>
            <div className="quote-card-benefits">
              <div className="quote-benefit">
                <div className="benefit-check">✓</div>
                <span>Análise técnica gratuita</span>
              </div>
              <div className="quote-benefit">
                <div className="benefit-check">✓</div>
                <span>Proposta em até 48h</span>
              </div>
              <div className="quote-benefit">
                <div className="benefit-check">✓</div>
                <span>Flexibilidade de pagamento</span>
              </div>
            </div>
            <button className="quote-button">
              Solicitar orçamento
            </button>
            <div className="quote-tag">Exclusivo para Matinhos e região</div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
} 