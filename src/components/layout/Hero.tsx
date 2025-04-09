'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import './Hero.css';

interface Particle {
  width: number;
  height: number;
  top: number;
  left: number;
  animationDelay: number;
  animationDuration: number;
}

// Componente exclusivo do cliente para renderizar os pontos de luz
function LightParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);
  
  useEffect(() => {
    // Só executamos isto no cliente, após a montagem do componente
    const particlesData = Array.from({ length: 20 }).map(() => ({
      width: Math.random() * 6 + 2,
      height: Math.random() * 6 + 2,
      top: Math.random() * 100,
      left: Math.random() * 100,
      animationDelay: Math.random() * 5,
      animationDuration: Math.random() * 10 + 5
    }));
    
    setParticles(particlesData);
  }, []);
  
  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map((particle, i) => (
        <div 
          key={i}
          className="absolute rounded-full bg-white/10 animate-float"
          style={{
            width: `${particle.width}px`,
            height: `${particle.height}px`,
            top: `${particle.top}%`,
            left: `${particle.left}%`,
            animationDelay: `${particle.animationDelay}s`,
            animationDuration: `${particle.animationDuration}s`
          }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  const heroRef = useRef(null);
  const isInView = useInView(heroRef, { margin: "-20% 0px" });
  
  // Versão simplificada das animações para serem mais rápidas
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4 }
    }
  };
  
  const titleVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.4, delay: 0.1 }
    }
  };
  
  const subtitleVariants = {
    hidden: { y: 20 },
    visible: { 
      y: 0,
      transition: { duration: 0.3, delay: 0.2, type: "spring", stiffness: 200 }
    }
  };
  
  const descriptionVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.4, delay: 0.3 }
    }
  };
  
  const buttonsVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4, delay: 0.4 }
    }
  };

  return (
    <div className="hero-container" ref={heroRef}>
      {/* Vídeo de fundo com efeito de transparência */}
      <div className="hero-video-container">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hero-video"
        >
          <source src="/videoFundo.mp4" type="video/mp4" />
        </video>
        
        {/* Efeito de camadas animadas sobrepostas */}
        <motion.div 
          className="hero-gradient-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
        
        {/* Efeito de partículas suaves */}
        <div className="hero-particles animate-pulse-light" />
        
        {/* Linhas horizontais animadas */}
        <motion.div 
          className="hero-lines"
          initial={{ backgroundPosition: "0% 0%" }}
          animate={{ backgroundPosition: "100% 100%" }}
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
        />
        
        {/* Gradiente suave animado */}
        <motion.div 
          className="hero-color-gradient"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.2, 0.1, 0.2, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Efeito shimmer diagonal */}
        <motion.div 
          className="hero-shimmer" 
          animate={{ backgroundPosition: ["0% 0%", "200% 0%"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Pontos de luz suaves - renderizados apenas no cliente */}
        <LightParticles />
      </div>

      {/* Conteúdo sobreposto */}
      <motion.div 
        className="hero-content"
        variants={contentVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.h1 
          className="hero-title"
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.span 
            className="brand-with-logo block mb-2"
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.3, delay: 0.2, type: "spring" }}
          >
            RM Soft
            <Image
              src="/logo.svg"
              alt="RM Soft Logo"
              width={90}
              height={90}
              className="hero-logo"
              priority
            />
          </motion.span>
          <motion.span 
            className="hero-subtitle"
            variants={subtitleVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            Soluções Digitais Personalizadas
          </motion.span>
        </motion.h1>
        
        <motion.p 
          className="hero-description"
          variants={descriptionVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          Desenvolvemos soluções de software sob medida para transformar os desafios do seu negócio em 
          oportunidades digitais, com a qualidade e confiabilidade que sua empresa merece.
        </motion.p>
        
        <motion.div 
          className="hero-buttons"
          variants={buttonsVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <Link href="/produtos">
            <motion.button 
              className="hero-button-primary"
              whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(255,255,255,0.5)" }}
              whileTap={{ scale: 0.98 }}
            >
              Nossos Produtos
            </motion.button>
          </Link>
          <Link href="/contato">
            <motion.button 
              className="hero-button-secondary"
              whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(255,255,255,0.3)" }}
              whileTap={{ scale: 0.98 }}
            >
              Entre em Contato
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
} 