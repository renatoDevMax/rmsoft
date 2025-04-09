'use client';

import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FaTruck, FaQrcode, FaAward, FaStore, FaLightbulb, FaArrowRight, FaTimes, FaExpand, FaCompress } from 'react-icons/fa';
import './ProductsSection.css';

const ProductsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  // Estado para controlar a exibição do modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Estado para controlar a imagem em destaque
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  
  // Estado para controlar o modo tela cheia
  const [isFullScreen, setIsFullScreen] = useState(false);
  
  // Estado para controlar qual modal está aberto (entregas, ar, fidelidade ou ecommerce)
  const [modalType, setModalType] = useState<'entregas' | 'ar' | 'fidelidade' | 'ecommerce' | null>(null);
  
  // Lista de imagens para o sistema de entregas
  const entregas = [
    '/ecoAdm1.png',
    '/ecoAdm2.png',
    '/ecoAdm3.png',
    '/ecoAdm4.png',
    '/ecoAdm5.png',
    '/ecoAdm6.png',
    '/ecoAdm7.png',
    '/ecoAdm8.png',
  ];
  
  // Lista de imagens para os cartões de realidade aumentada
  const arImages = [
    '/ar1.png',
    '/ar2.jpg',
    '/ar3.jpg',
  ];

  // Lista de imagens para o programa de fidelidade
  const fidelidadeImages = [
    '/fidelidade1.png',
    '/fidelidade2.png',
    '/fidelidade3.png',
    '/fidelidade4.png',
    '/fidelidade5.png',
  ];

  // Adicionar as imagens do e-commerce
  const ecommerceImages = [
    '/ecom1.png',
    '/ecom1cel.png',
    '/ecom2.png',
    '/ecom2cel.png',
    '/ecom3.png',
    '/ecom3cel.png',
    '/ecom4.png',
    '/ecom4cel.png'
  ];

  // Variantes de animação
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
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };
  
  // Variantes para o modal
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.3, ease: "easeOut" }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8,
      transition: { duration: 0.2, ease: "easeIn" }
    }
  };
  
  // Variantes para o overlay
  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.3 }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.2 }
    }
  };
  
  // Variantes para a imagem em tela cheia
  const fullscreenVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.3 }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.2 }
    }
  };

  // Lista de produtos
  const produtos = [
    {
      id: 1,
      icon: <FaTruck />,
      titulo: "Sistema de Gerenciamento de Entregas",
      descricao: "Solução completa para controle de entregas, com notificações automáticas para clientes e rastreamento em tempo real.",
      recursos: [
        "Painel de controle para gestão de entregas",
        "Notificações para clientes via SMS e e-mail",
        "Rastreamento em tempo real da localização",
        "Relatórios de desempenho e eficiência",
        "Integração com sistemas de logística"
      ],
      cta: "Conheça nosso sistema de entregas"
    },
    {
      id: 2,
      icon: <FaQrcode />,
      titulo: "Cartões de Realidade Aumentada",
      descricao: "Transforme cartões de visita convencionais em experiências interativas com realidade aumentada, videos e informações digitais.",
      recursos: [
        "Visualização de vídeos promocionais",
        "Exibição de produtos em 3D",
        "Informações de contato atualizáveis",
        "Rastreamento de interações e engajamento",
        "Fácil atualização de conteúdo sem reimpressão"
      ],
      cta: "Revolucione suas conexões"
    },
    {
      id: 3,
      icon: <FaAward />,
      titulo: "Sistema de Fidelidade",
      descricao: "Plataforma completa de fidelização de clientes, com interfaces para administradores e usuários, gamificação e recompensas.",
      recursos: [
        "Programa de pontos e recompensas personalizável",
        "Dashboard para administradores",
        "Aplicativo para usuários acumularem e resgatarem pontos",
        "Sistema de gamificação com níveis e desafios",
        "Relatórios e análises de comportamento do cliente"
      ],
      cta: "Fidelize seus clientes"
    },
    {
      id: 4,
      icon: <FaStore />,
      titulo: "E-commerce Personalizado",
      descricao: "Desenvolvimento de lojas virtuais adaptadas às necessidades específicas do seu negócio, com fluxo de venda otimizado.",
      recursos: [
        "Design personalizado e alinhado à sua marca",
        "Jornada de compra otimizada para conversão",
        "Gerenciamento de produtos e estoque",
        "Integração com gateways de pagamento",
        "Painel administrativo intuitivo"
      ],
      cta: "Venda online com eficiência"
    },
    {
      id: 5,
      icon: <FaLightbulb />,
      titulo: "Solução Sob Medida",
      descricao: "Compartilhe sua ideia e necessidades específicas, e desenvolvemos uma solução digital personalizada para o seu negócio.",
      recursos: [
        "Análise detalhada de requisitos",
        "Proposta personalizada de solução",
        "Desenvolvimento ágil e colaborativo",
        "Testes e validações contínuos",
        "Suporte técnico especializado"
      ],
      cta: "Transforme sua ideia em realidade"
    }
  ];
  
  // Função para abrir o modal
  const openModal = (type: 'entregas' | 'ar' | 'fidelidade' | 'ecommerce') => {
    setModalType(type);
    setActiveImageIndex(0);
    setIsModalOpen(true);
    // Impedir o scroll da página quando o modal estiver aberto
    document.body.style.overflow = 'hidden';
  };
  
  // Função para fechar o modal
  const closeModal = () => {
    setIsModalOpen(false);
    setIsFullScreen(false);
    // Permitir o scroll da página novamente
    document.body.style.overflow = 'auto';
  };
  
  // Função para trocar a imagem destacada
  const changeActiveImage = (index: number) => {
    setActiveImageIndex(index);
  };
  
  // Função para alternar o modo tela cheia
  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };
  
  // Função para navegar entre imagens no modo tela cheia
  const navigateImages = (direction: 'next' | 'prev') => {
    let currentImages;
    
    if (modalType === 'entregas') {
      currentImages = entregas;
    } else if (modalType === 'ar') {
      currentImages = arImages;
    } else if (modalType === 'fidelidade') {
      currentImages = fidelidadeImages;
    } else {
      currentImages = ecommerceImages;
    }
    
    if (direction === 'next') {
      setActiveImageIndex((prevIndex) => 
        prevIndex === currentImages.length - 1 ? 0 : prevIndex + 1
      );
    } else {
      setActiveImageIndex((prevIndex) => 
        prevIndex === 0 ? currentImages.length - 1 : prevIndex - 1
      );
    }
  };

  return (
    <section className="products-section" ref={sectionRef}>
      <div className="products-background-elements">
        <div className="products-circle products-circle-1"></div>
        <div className="products-circle products-circle-2"></div>
        <div className="products-line products-line-1"></div>
        <div className="products-line products-line-2"></div>
      </div>

      <div className="products-container">
        <motion.div
          className="products-content"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h1 className="products-title" variants={itemVariants}>
            Nossas Soluções
          </motion.h1>

          <motion.div className="products-subtitle-container" variants={itemVariants}>
            <div className="products-subtitle-line"></div>
            <h2 className="products-subtitle">Tecnologia que transforma negócios</h2>
            <div className="products-subtitle-line"></div>
          </motion.div>

          <motion.p className="products-introduction" variants={itemVariants}>
            Desenvolvemos soluções tecnológicas inovadoras e personalizadas para atender às necessidades 
            específicas de cada negócio, combinando nossa experiência prática com as mais modernas tecnologias.
          </motion.p>

          <div className="products-list-container">
            {produtos.map((produto, index) => (
              <motion.div 
                key={produto.id}
                className={`product-list-item ${index % 2 === 0 ? 'product-even' : 'product-odd'}`}
                variants={itemVariants}
                whileHover={{ 
                  x: 10, 
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
                  transition: { duration: 0.3 }
                }}
              >
                <div className="product-list-icon">
                  {produto.icon}
                </div>
                
                <div className="product-list-content">
                  <h3 className="product-list-title">{produto.titulo}</h3>
                  <p className="product-list-description">{produto.descricao}</p>
                  
                  <div className="product-list-features">
                    <h4 className="features-title">Principais recursos:</h4>
                    <ul className="features-list">
                      {produto.recursos.map((recurso, idx) => (
                        <li key={idx} className="feature-item">
                          {recurso}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {index === 0 ? (
                    // Se for o primeiro produto (Sistema de Entregas), utilizamos um botão
                    <button 
                      className="product-list-cta as-button"
                      onClick={() => openModal('entregas')}
                    >
                      <span>{produto.cta}</span>
                      <FaArrowRight className="arrow-icon" />
                    </button>
                  ) : index === 1 ? (
                    // Se for o segundo produto (Cartões de Realidade Aumentada), também usamos um botão
                    <button 
                      className="product-list-cta as-button"
                      onClick={() => openModal('ar')}
                    >
                      <span>{produto.cta}</span>
                      <FaArrowRight className="arrow-icon" />
                    </button>
                  ) : index === 2 ? (
                    // Se for o terceiro produto (Sistema de Fidelidade), também usamos um botão
                    <button 
                      className="product-list-cta as-button"
                      onClick={() => openModal('fidelidade')}
                    >
                      <span>{produto.cta}</span>
                      <FaArrowRight className="arrow-icon" />
                    </button>
                  ) : index === 3 ? (
                    // Se for o quarto produto (Venda online com eficiência), usamos um botão
                    <button 
                      className="product-list-cta as-button"
                      onClick={() => openModal('ecommerce')}
                    >
                      <span>{produto.cta}</span>
                      <FaArrowRight className="arrow-icon" />
                    </button>
                  ) : (
                    // Para os demais produtos, mantemos o link para a página de contato
                    <Link href="/contato" className="product-list-cta">
                      <span>{produto.cta}</span>
                      <FaArrowRight className="arrow-icon" />
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div className="products-contact-container" variants={itemVariants}>
            <h2 className="products-contact-title">
              Não encontrou a solução ideal para o seu negócio?
            </h2>
            <p className="products-contact-description">
              Entre em contato conosco para uma consultoria personalizada e descubra 
              como podemos desenvolver a solução perfeita para suas necessidades específicas.
            </p>
            <Link href="/contato" className="products-contact-button">
              Solicitar consultoria
            </Link>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Modal para exibir as imagens do sistema de entregas, cartões AR ou programa de fidelidade */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            <motion.div 
              className="modal-overlay"
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={closeModal}
            >
              <motion.div 
                className="gallery-modal"
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={(e) => e.stopPropagation()} // Evita que cliques no modal fechem ele
              >
                <button className="modal-close-btn" onClick={closeModal}>
                  <FaTimes />
                </button>
                
                <div className="gallery-content">
                  <div className="gallery-featured-image">
                    <Image 
                      src={
                        modalType === 'entregas' 
                          ? entregas[activeImageIndex] 
                          : modalType === 'ar' 
                            ? arImages[activeImageIndex] 
                            : modalType === 'fidelidade'
                              ? fidelidadeImages[activeImageIndex]
                              : ecommerceImages[activeImageIndex]
                      } 
                      alt={
                        modalType === 'entregas' 
                          ? `Sistema de entregas - Imagem ${activeImageIndex + 1}` 
                          : modalType === 'ar'
                            ? `Cartão de visita AR - Imagem ${activeImageIndex + 1}`
                            : modalType === 'fidelidade'
                              ? `Sistema de fidelidade - Imagem ${activeImageIndex + 1}`
                              : `E-commerce - Imagem ${activeImageIndex + 1}`
                      } 
                      width={800} 
                      height={500} 
                      className="featured-image"
                      priority
                      onClick={toggleFullScreen}
                    />
                    
                    <button 
                      className="fullscreen-toggle-btn"
                      onClick={toggleFullScreen}
                      aria-label="Alternar modo tela cheia"
                    >
                      <FaExpand />
                    </button>
                  </div>
                  
                  <div className="gallery-thumbnails">
                    <h3 className="gallery-title">
                      {modalType === 'entregas' 
                        ? 'Sistema de Gerenciamento de Entregas' 
                        : modalType === 'ar'
                          ? 'Cartões de Visita com Realidade Aumentada'
                          : modalType === 'fidelidade'
                            ? 'Programa de Fidelidade de Clientes'
                            : 'Sistema de E-commerce'}
                    </h3>
                    <p className="gallery-description">
                      {modalType === 'entregas' 
                        ? 'Navegue pelas telas do nosso sistema completo de gerenciamento de entregas, desenvolvido para otimizar operações logísticas e melhorar a experiência dos seus clientes.'
                        : modalType === 'ar'
                          ? 'Transforme suas conexões profissionais com cartões de visita interativos que ganham vida na tela do smartphone. Uma experiência única que combina design sofisticado e tecnologia de ponta.'
                          : modalType === 'fidelidade'
                            ? 'Conheça nosso programa de fidelidade completo, desenvolvido para aumentar o engajamento dos seus clientes e impulsionar as vendas recorrentes. Uma solução que transforma clientes ocasionais em fiéis defensores da sua marca.'
                            : 'Explore nosso sistema completo de e-commerce, desenvolvido para maximizar suas vendas online. Uma solução que combina design elegante, usabilidade e funcionalidades avançadas para criar uma experiência de compra excepcional.'}
                    </p>
                    
                    <div className="thumbnails-container">
                      {(
                        modalType === 'entregas' 
                          ? entregas 
                          : modalType === 'ar'
                            ? arImages
                            : modalType === 'fidelidade'
                              ? fidelidadeImages
                              : ecommerceImages
                      ).map((imagem, idx) => (
                        <div 
                          key={idx} 
                          className={`thumbnail-item ${idx === activeImageIndex ? 'active' : ''}`}
                          onClick={() => changeActiveImage(idx)}
                        >
                          <Image 
                            src={imagem} 
                            alt={`Miniatura ${idx + 1}`} 
                            width={120} 
                            height={80} 
                            className="thumbnail-image"
                          />
                        </div>
                      ))}
                    </div>
                    
                    <div className="gallery-actions">
                      <Link href="/contato" className="gallery-cta-button">
                        {modalType === 'entregas' 
                          ? 'Solicitar demonstração' 
                          : modalType === 'ar'
                            ? 'Conhecer esta tecnologia'
                            : modalType === 'fidelidade'
                              ? 'Implementar programa de fidelidade'
                              : 'Solicitar orçamento'}
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      
      {/* Modal para exibir imagem em tela cheia */}
      <AnimatePresence>
        {isModalOpen && isFullScreen && (
          <motion.div 
            className="fullscreen-overlay"
            variants={fullscreenVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={toggleFullScreen}
          >
            <div className="fullscreen-content" onClick={(e) => e.stopPropagation()}>
              <button 
                className="fullscreen-close-btn"
                onClick={toggleFullScreen}
                aria-label="Sair do modo tela cheia"
              >
                <FaCompress />
              </button>
              
              <div className="fullscreen-image-container">
                <button 
                  className="fullscreen-nav-btn fullscreen-prev-btn"
                  onClick={() => navigateImages('prev')}
                  aria-label="Imagem anterior"
                >
                  &lt;
                </button>
                
                <Image 
                  src={
                    modalType === 'entregas' 
                      ? entregas[activeImageIndex] 
                      : modalType === 'ar' 
                        ? arImages[activeImageIndex] 
                        : modalType === 'fidelidade'
                          ? fidelidadeImages[activeImageIndex]
                          : ecommerceImages[activeImageIndex]
                  } 
                  alt={
                    modalType === 'entregas' 
                      ? `Sistema de entregas - Imagem ${activeImageIndex + 1} em tela cheia` 
                      : modalType === 'ar'
                        ? `Cartão de visita AR - Imagem ${activeImageIndex + 1} em tela cheia`
                        : modalType === 'fidelidade'
                          ? `Sistema de fidelidade - Imagem ${activeImageIndex + 1} em tela cheia`
                          : `E-commerce - Imagem ${activeImageIndex + 1} em tela cheia`
                  } 
                  width={1600} 
                  height={900} 
                  className="fullscreen-image"
                  priority
                />
                
                <button 
                  className="fullscreen-nav-btn fullscreen-next-btn"
                  onClick={() => navigateImages('next')}
                  aria-label="Próxima imagem"
                >
                  &gt;
                </button>
              </div>
              
              <div className="fullscreen-counter">
                {activeImageIndex + 1} / {
                  modalType === 'entregas' 
                    ? entregas.length 
                    : modalType === 'ar'
                      ? arImages.length
                      : modalType === 'fidelidade'
                        ? fidelidadeImages.length
                        : ecommerceImages.length
                }
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProductsSection; 