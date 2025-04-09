'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaShoppingCart, FaRegCreditCard, FaStore, FaMobile, FaShieldAlt, FaChartLine } from 'react-icons/fa';
import './EcommerceSection.css';

const ecommerceFeatures = [
  {
    icon: <FaStore />,
    title: 'Loja Virtual Personalizada',
    description: 'Design exclusivo que reflete a identidade da sua marca e encanta seus clientes'
  },
  {
    icon: <FaMobile />,
    title: 'Experiência Mobile Perfeita',
    description: 'Layout responsivo que se adapta perfeitamente a qualquer dispositivo'
  },
  {
    icon: <FaShieldAlt />,
    title: 'Segurança de Ponta',
    description: 'Proteção dos dados dos clientes e transações seguras em todas as etapas'
  },
  {
    icon: <FaChartLine />,
    title: 'Análise Completa',
    description: 'Acompanhe o desempenho da sua loja com relatórios detalhados e insights valiosos'
  }
];

export default function EcommerceSection() {
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

  const titleVariants = {
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

  const featureVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: (custom: number) => ({ 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.5, 
        delay: 0.3 + (custom * 0.1),
        type: "spring",
        stiffness: 100
      }
    }),
    exit: { opacity: 0, y: 20, scale: 0.95 }
  };

  const demoVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.7, 
        delay: 0.6,
        type: "spring",
        stiffness: 50
      }
    },
    exit: { opacity: 0, y: 20 }
  };

  // Dados simulados de produtos para o demo
  const demoProducts = [
    { id: 1, name: "Camisa Premium", price: "R$ 149,90", discount: "R$ 129,90" },
    { id: 2, name: "Vestido Elegante", price: "R$ 199,90", discount: "R$ 179,90" },
    { id: 3, name: "Calça Jeans Slim", price: "R$ 169,90", discount: "R$ 149,90" }
  ];

  return (
    <section className="ecommerce-section" ref={sectionRef}>
      <div className="ecommerce-bg-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
      
      <motion.div 
        className="ecommerce-container"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "exit"}
      >
        <motion.div 
          className="ecommerce-header"
          variants={titleVariants}
        >
          <h2 className="ecommerce-title">E-commerce ao Alcance de Todos</h2>
        </motion.div>
        
        <motion.div 
          className="ecommerce-intro"
          variants={textVariants}
        >
          <p>
            Soluções de comércio eletrônico costumam ser inacessíveis para pequenas e médias empresas, 
            devido aos altos custos de desenvolvimento e manutenção. A <span className="ecommerce-highlight">RM Soft</span> muda essa realidade, 
            trazendo para Matinhos e região opções personalizadas e acessíveis.
          </p>
          <p>
            Nossa plataforma adapta-se ao perfil do seu negócio, oferecendo exatamente o que você precisa, 
            sem gastos desnecessários ou funcionalidades supérfluas.
          </p>
        </motion.div>

        <div className="ecommerce-content">
          <div className="ecommerce-features">
            {ecommerceFeatures.map((feature, index) => (
              <motion.div 
                key={index} 
                className="ecommerce-feature-card"
                variants={featureVariants}
                custom={index}
              >
                <div className="feature-icon-wrapper">
                  {feature.icon}
                </div>
                <div className="feature-content">
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="ecommerce-demo"
            variants={demoVariants}
          >
            <div className="ecommerce-browser">
              <div className="browser-header">
                <div className="browser-actions">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="browser-address">
                  <div className="browser-url">
                    <FaShieldAlt className="lock-icon" />
                    <span>loja.seunegocionline.com.br</span>
                  </div>
                </div>
              </div>
              
              <div className="browser-content">
                <div className="store-header">
                  <div className="store-logo">
                    <span>Sua Loja</span>
                  </div>
                  <div className="store-nav">
                    <span>Início</span>
                    <span>Produtos</span>
                    <span>Categorias</span>
                    <span>Sobre</span>
                    <span>Contato</span>
                  </div>
                  <div className="store-cart">
                    <FaShoppingCart />
                    <span className="cart-badge">2</span>
                  </div>
                </div>
                
                <div className="store-banner">
                  <h1>Elegância e Qualidade</h1>
                  <p>As melhores ofertas para você</p>
                  <button>Ver Ofertas</button>
                </div>
                
                <div className="store-products">
                  <h2>Produtos em Destaque</h2>
                  <div className="product-grid">
                    {demoProducts.map(product => (
                      <motion.div 
                        key={product.id} 
                        className="product-card"
                        whileHover={{ 
                          y: -5, 
                          boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
                        }}
                      >
                        <div className="product-image">
                          <div className="product-placeholder"></div>
                        </div>
                        <div className="product-info">
                          <h3>{product.name}</h3>
                          <div className="product-price">
                            <span className="original-price">{product.price}</span>
                            <span className="discount-price">{product.discount}</span>
                          </div>
                          <button className="add-to-cart">
                            <FaShoppingCart /> Adicionar
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                <div className="store-payment">
                  <FaRegCreditCard />
                  <span>Pagamento rápido e seguro</span>
                </div>
              </div>
            </div>
            
            <div className="ecommerce-unique">
              <div className="unique-badge">Exclusivo para Matinhos-PR</div>
              <h3>Sua loja online pronta para vender</h3>
              <p>Do design à implementação, entregamos uma solução completa com suporte local.</p>
              <ul>
                <li>Investimento acessível</li>
                <li>Soluções personalizadas</li>
                <li>Suporte técnico local</li>
                <li>Treinamento para sua equipe</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
} 