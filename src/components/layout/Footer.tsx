'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope, 
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaLock,
  FaShieldAlt,
  FaGithub
} from 'react-icons/fa';
import './Footer.css';

// Variantes de animação para o footer
const footerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
      duration: 0.6
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

// Lista de bandeiras de cartões para exibir
const paymentMethods = [
  { name: 'Visa', src: '/cards/visa.svg' },
  { name: 'Mastercard', src: '/cards/mastercard.svg' },
  { name: 'American Express', src: '/cards/amex.svg' },
  { name: 'Pix', src: '/cards/pix.svg' },
  { name: 'Boleto', src: '/cards/boleto.svg' },
];

// Componentes para os cartões de pagamento
const PaymentCard = ({ name }: { name: string }) => (
  <div className="payment-card">
    {name}
  </div>
);

// Componente para selos de segurança
const SecuritySeal = ({ icon, text }: { icon: React.ReactNode, text: string }) => (
  <div className="security-seal">
    {icon}
    <span>{text}</span>
  </div>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer 
      className="footer"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={footerVariants}
    >
      {/* Efeito de ondas no topo do rodapé */}
      <div className="footer-top">
        <div className="footer-waves">
          <div className="wave wave-1"></div>
          <div className="wave wave-2"></div>
          <div className="wave wave-3"></div>
        </div>
      </div>

      <div className="footer-content">
        <div className="footer-container">
          {/* Conteúdo principal do rodapé em 4 colunas */}
          <div className="footer-grid">
            {/* Coluna 1: Logo e informações da empresa */}
            <motion.div className="footer-column" variants={itemVariants}>
              <div className="footer-logo">
                <div className="footer-logo-text brand-with-logo">
                  RM Soft
                  <Image
                    src="/logo.svg"
                    alt="RM Soft Logo"
                    width={32}
                    height={32}
                    className="footer-brand-logo"
                  />
                </div>
                <div className="footer-tagline">Soluções Digitais Personalizadas</div>
              </div>
              <p className="footer-description">
                Desenvolvemos soluções tecnológicas inovadoras e personalizadas 
                para transformar os desafios do seu negócio em oportunidades digitais.
              </p>
              <div className="footer-social">
                <a href="https://github.com/renatoDevMax" className="social-icon" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
                <a href="https://wa.me/5541988275504" className="social-icon" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp />
                </a>
                <a href="mailto:renato.devmaximiano@gmail.com" className="social-icon" aria-label="Email">
                  <FaEnvelope />
                </a>
              </div>
            </motion.div>

            {/* Coluna 2: Informações de contato */}
            <motion.div className="footer-column" variants={itemVariants}>
              <h3 className="footer-title">Entre em Contato</h3>
              <ul className="footer-contact-list">
                <li className="footer-contact-item">
                  <a href="#" className="footer-contact-link">
                    <span className="contact-icon"><FaMapMarkerAlt /></span>
                    <span className="contact-text">Rua Francisco Beltrão, 799<br />Matinhos-PR, 83260-000</span>
                  </a>
                </li>
                <li className="footer-contact-item">
                  <a href="tel:+5541988275504" className="footer-contact-link">
                    <span className="contact-icon"><FaPhone /></span>
                    <span className="contact-text">(41) 98827-5504</span>
                  </a>
                </li>
                <li className="footer-contact-item">
                  <a href="mailto:renato.devmaximiano@gmail.com" className="footer-contact-link">
                    <span className="contact-icon"><FaEnvelope /></span>
                    <span className="contact-text">renato.devmaximiano@gmail.com</span>
                  </a>
                </li>
                <li className="footer-contact-item">
                  <a href="#" className="footer-contact-link">
                    <span className="contact-icon"><FaClock /></span>
                    <span className="contact-text">Segunda a Sexta: 9h às 18h<br />Sábado: 9h às 13h</span>
                  </a>
                </li>
              </ul>
            </motion.div>

            {/* Coluna 3: Links rápidos */}
            <motion.div className="footer-column" variants={itemVariants}>
              <h3 className="footer-title">Links Rápidos</h3>
              <ul className="footer-nav-list">
                <li className="footer-nav-item">
                  <a href="#" className="footer-nav-link">Início</a>
                </li>
                <li className="footer-nav-item">
                  <a href="#comercio" className="footer-nav-link">Comércio Conectado</a>
                </li>
                <li className="footer-nav-item">
                  <a href="#mensagens" className="footer-nav-link">Comunicação</a>
                </li>
                <li className="footer-nav-item">
                  <a href="#ecommerce" className="footer-nav-link">E-commerce</a>
                </li>
                <li className="footer-nav-item">
                  <a href="#ar-cards" className="footer-nav-link">Cartões AR</a>
                </li>
                <li className="footer-nav-item">
                  <a href="#preco" className="footer-nav-link">Preços</a>
                </li>
              </ul>
            </motion.div>

            {/* Coluna 4: Links adicionais */}
            <motion.div className="footer-column" variants={itemVariants}>
              <h3 className="footer-title">Informações</h3>
              <ul className="footer-nav-list">
                <li className="footer-nav-item">
                  <a href="#" className="footer-nav-link">Sobre Nós</a>
                </li>
                <li className="footer-nav-item">
                  <a href="#" className="footer-nav-link">Termos de Uso</a>
                </li>
                <li className="footer-nav-item">
                  <a href="#" className="footer-nav-link">Política de Privacidade</a>
                </li>
                <li className="footer-nav-item">
                  <a href="#" className="footer-nav-link">FAQ</a>
                </li>
                <li className="footer-nav-item">
                  <a href="#" className="footer-nav-link">Suporte</a>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Seção inferior do rodapé: métodos de pagamento e selos de segurança */}
          <motion.div className="footer-bottom" variants={itemVariants}>
            <div>
              <h4 className="footer-subtitle">Métodos de Pagamento</h4>
              <div className="payment-methods">
                <PaymentCard name="Visa" />
                <PaymentCard name="Mastercard" />
                <PaymentCard name="American Express" />
                <PaymentCard name="Pix" />
                <PaymentCard name="Boleto" />
              </div>
            </div>
            <div>
              <h4 className="footer-subtitle">Segurança</h4>
              <div className="security-seals">
                <SecuritySeal icon={<FaLock />} text="Pagamentos Seguros" />
                <SecuritySeal icon={<FaShieldAlt />} text="Dados Protegidos" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Seção de copyright */}
      <div className="footer-copyright">
        <div className="footer-container">
          <div className="copyright-content">
            <p>© {currentYear} <span className="brand-with-logo copyright-brand">
              RM Software
              <Image
                src="/logo.svg"
                alt="RM Soft Logo"
                width={14}
                height={14}
                className="copyright-logo"
              />
            </span>. Todos os direitos reservados.</p>
            <p>Desenvolvido com <span className="heart">♥</span> em Matinhos-PR</p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer; 