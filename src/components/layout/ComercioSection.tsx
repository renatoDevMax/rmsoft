'use client';

import React from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import './ComercioSection.css';

export default function ComercioSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { margin: "-10% 0px -10% 0px", once: false });

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -30 }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 30 }
  };

  const featureVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({ 
      opacity: 1, 
      y: 0,
      transition: { delay: 0.2 + custom * 0.2, duration: 0.5 }
    }),
    exit: { opacity: 0, y: 10 }
  };

  return (
    <section className="comercio-section" ref={sectionRef}>
      <div className="comercio-container">
        <motion.div 
          className="comercio-content"
          initial="hidden"
          animate={isInView ? "visible" : "exit"}
          variants={textVariants}
          transition={{ duration: 0.8 }}
        >
          <h2 className="comercio-title">O futuro do comércio já chegou</h2>
          
          <p className="comercio-text">
            No cenário atual, as vendas online não são apenas uma tendência, mas uma 
            <span className="comercio-highlight">realidade transformadora</span> que redefine a forma como 
            negócios e consumidores se conectam.
          </p>
          
          <p className="comercio-text">
            Tecnologias que antes eram exclusivas de grandes corporações agora estão ao alcance 
            do seu negócio. Soluções sofisticadas e intuitivas que simplificam processos, 
            ampliam seu alcance e potencializam resultados.
          </p>
          
          <p className="comercio-text">
            Com a <span className="comercio-highlight">RM Soft</span>, você tem acesso a ferramentas que 
            transformam a complexidade em simplicidade, permitindo que você se concentre no que realmente 
            importa: o crescimento do seu negócio e a satisfação dos seus clientes.
          </p>
          
          <div className="comercio-features">
            <motion.div 
              className="comercio-feature"
              variants={featureVariants}
              initial="hidden"
              animate={isInView ? "visible" : "exit"}
              custom={0}
            >
              <div className="comercio-feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3A5.25 5.25 0 0 0 12 1.5Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z" clipRule="evenodd" />
                </svg>
              </div>
              <span>Segurança avançada</span>
            </motion.div>
            
            <motion.div 
              className="comercio-feature"
              variants={featureVariants}
              initial="hidden"
              animate={isInView ? "visible" : "exit"}
              custom={1}
            >
              <div className="comercio-feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M18.75 12.75h1.5a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM12 6a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 6ZM12 18a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 18ZM3.75 6.75h1.5a.75.75 0 1 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM5.25 18.75h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 0 1.5ZM3 12a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 3 12ZM9 3.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM12.75 12a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0ZM9 15.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
                </svg>
              </div>
              <span>Personalização completa</span>
            </motion.div>
            
            <motion.div 
              className="comercio-feature"
              variants={featureVariants}
              initial="hidden"
              animate={isInView ? "visible" : "exit"}
              custom={2}
            >
              <div className="comercio-feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M10.5 18.75a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z" />
                  <path fillRule="evenodd" d="M8.625.75A3.375 3.375 0 0 0 5.25 4.125v15.75a3.375 3.375 0 0 0 3.375 3.375h6.75a3.375 3.375 0 0 0 3.375-3.375V4.125A3.375 3.375 0 0 0 15.375.75h-6.75ZM7.5 4.125C7.5 3.504 8.004 3 8.625 3H9.75v.375c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V3h1.125c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 0 1 7.5 19.875V4.125Z" clipRule="evenodd" />
                </svg>
              </div>
              <span>Mobilidade integrada</span>
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div 
          className="comercio-image-container"
          initial="hidden"
          animate={isInView ? "visible" : "exit"}
          variants={imageVariants}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="comercio-image-frame">
            <Image
              src="/comecioconectado.jpg"
              alt="Comércio conectado com tecnologia de ponta"
              width={600}
              height={450}
              className="comercio-image"
              priority
            />
            <div className="comercio-image-glow"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 