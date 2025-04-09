'use client';

import React, { useState, ChangeEvent, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaClock, FaGithub, FaLinkedin, FaPaperPlane, FaCheck } from 'react-icons/fa';
import './ContactSection.css';
import Toast from '@/components/ui/Toast';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const [toast, setToast] = useState({
    message: '',
    type: 'success' as 'success' | 'error',
    isVisible: false
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('sending');
    
    try {
      // Formatar a mensagem para o WhatsApp
      const whatsappMessage = encodeURIComponent(
        `Olá, sou ${formData.name}.\n` +
        `Email: ${formData.email}\n` +
        `Empresa: ${formData.company || 'Não informada'}\n\n` +
        `${formData.message}`
      );

      // Abrir WhatsApp em nova aba
      window.open(`https://wa.me/5541988275504?text=${whatsappMessage}`, '_blank');

      setFormStatus('success');
      setToast({
        message: 'Redirecionando para o WhatsApp!',
        type: 'success',
        isVisible: true
      });

      // Limpar formulário
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
      });

      // Esconder o toast após 3 segundos
      setTimeout(() => {
        setToast(prev => ({ ...prev, isVisible: false }));
      }, 3000);

    } catch (error) {
      console.error('Erro:', error);
      setFormStatus('idle');
      setToast({
        message: 'Erro ao abrir WhatsApp. Tente novamente.',
        type: 'error',
        isVisible: true
      });

      // Esconder o toast de erro após 3 segundos
      setTimeout(() => {
        setToast(prev => ({ ...prev, isVisible: false }));
      }, 3000);
    }
  };

  const resetForm = () => {
    setFormStatus('idle');
  };

  // Variantes de animação
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="contact-section">
      <Toast 
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
      />
      {/* Elementos de fundo decorativos */}
      <div className="contact-background-elements">
        <div className="contact-circle contact-circle-1"></div>
        <div className="contact-circle contact-circle-2"></div>
        <div className="contact-line contact-line-1"></div>
        <div className="contact-line contact-line-2"></div>
      </div>

      <motion.div 
        className="contact-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="contact-content">
          <motion.h2 className="contact-title" variants={itemVariants}>Entre em Contato</motion.h2>
          
          <motion.div className="contact-subtitle-container" variants={itemVariants}>
            <div className="contact-subtitle-line"></div>
            <span className="contact-subtitle">Estamos à disposição</span>
            <div className="contact-subtitle-line"></div>
          </motion.div>
          
          <motion.p className="contact-introduction" variants={itemVariants}>
            Seja para compartilhar sua ideia de projeto, solicitar um orçamento personalizado ou 
            simplesmente tirar dúvidas sobre nossas soluções, nossa equipe está pronta para atendê-lo 
            com atenção e profissionalismo.
          </motion.p>

          <div className="contact-grid">
            {/* Informações de contato */}
            <motion.div className="contact-info" variants={itemVariants}>
              <div className="contact-info-section">
                <h3 className="contact-info-title">Informações de Contato</h3>
                <ul className="contact-info-list">
                  <motion.li className="contact-info-item" variants={itemVariants}>
                    <div className="contact-info-icon">
                      <FaPhone />
                    </div>
                    <div className="contact-info-text">
                      <h4>Telefone</h4>
                      <a href="tel:+5541995762570">(41) 99576-2570</a>
                    </div>
                  </motion.li>
                  
                  <motion.li className="contact-info-item" variants={itemVariants}>
                    <div className="contact-info-icon">
                      <FaWhatsapp />
                    </div>
                    <div className="contact-info-text">
                      <h4>WhatsApp</h4>
                      <a href="https://wa.me/5541995762570" target="_blank" rel="noopener noreferrer">
                        (41) 99576-2570
                      </a>
                    </div>
                  </motion.li>
                  
                  <motion.li className="contact-info-item" variants={itemVariants}>
                    <div className="contact-info-icon">
                      <FaEnvelope />
                    </div>
                    <div className="contact-info-text">
                      <h4>E-mail</h4>
                      <a href="mailto:renato.devmaximiano@gmail.com">renato.devmaximiano@gmail.com</a>
                      <a href="mailto:renato.maximianojr@gmail.com">renato.maximianojr@gmail.com</a>
                    </div>
                  </motion.li>
                  
                  <motion.li className="contact-info-item" variants={itemVariants}>
                    <div className="contact-info-icon">
                      <FaMapMarkerAlt />
                    </div>
                    <div className="contact-info-text">
                      <h4>Localização</h4>
                      <address>Matinhos, Paraná<br />Brasil</address>
                    </div>
                  </motion.li>
                  
                  <motion.li className="contact-info-item" variants={itemVariants}>
                    <div className="contact-info-icon">
                      <FaClock />
                    </div>
                    <div className="contact-info-text">
                      <h4>Horário de Atendimento</h4>
                      <p>Segunda a Sexta: 09h às 18h<br />
                      Sábado: 09h às 12h</p>
                    </div>
                  </motion.li>
                </ul>
              </div>
              
              {/* Redes sociais */}
              <div className="social-section">
                <h3 className="social-title">Redes Sociais</h3>
                <div className="social-links">
                  <motion.a 
                    href="https://github.com/renatoDevMax" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    variants={itemVariants}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <FaGithub />
                    renatoDevMax
                  </motion.a>
                  
                  <motion.a 
                    href="https://github.com/maximianoDev" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    variants={itemVariants}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <FaGithub />
                    maximianoDev
                  </motion.a>
                  
                  <motion.a 
                    href="https://www.linkedin.com/in/renato-maximiano-jr/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    variants={itemVariants}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <FaLinkedin />
                    LinkedIn
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* Formulário de contato */}
            <motion.div className="contact-form-container" variants={itemVariants}>
              <div className="contact-form-card">
                {formStatus === 'success' ? (
                  <div className="form-success">
                    <div className="success-icon">
                      <FaCheck />
                    </div>
                    <h4>Mensagem Enviada!</h4>
                    <p>
                      Agradecemos pelo seu contato. Nossa equipe responderá o mais breve possível.
                    </p>
                    <button 
                      className="new-message-button" 
                      onClick={resetForm}
                    >
                      Enviar nova mensagem
                    </button>
                  </div>
                ) : (
                  <>
                    <h3 className="form-title">Envie uma Mensagem</h3>
                    <form className="contact-form" onSubmit={handleSubmit}>
                      <div className="form-row">
                        <div className="form-group">
                          <label htmlFor="name">Nome Completo</label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Seu nome"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        
                        <div className="form-group">
                          <label htmlFor="email">E-mail</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Seu e-mail"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="form-row">
                        <div className="form-group">
                          <label htmlFor="phone">Telefone</label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder="Seu telefone"
                            value={formData.phone}
                            onChange={handleInputChange}
                          />
                        </div>
                        
                        <div className="form-group">
                          <label htmlFor="company">Empresa</label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            placeholder="Sua empresa (opcional)"
                            value={formData.company}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                      
                      <div className="form-group">
                        <label htmlFor="message">Mensagem</label>
                        <textarea
                          id="message"
                          name="message"
                          rows={5}
                          placeholder="Descreva seu projeto ou dúvida..."
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                        ></textarea>
                      </div>
                      
                      <button 
                        type="submit" 
                        className="submit-button"
                        disabled={formStatus === 'sending'}
                      >
                        {formStatus === 'sending' ? 'Enviando...' : 'Enviar Mensagem'}
                        <span className="submit-icon">
                          <FaPaperPlane />
                        </span>
                      </button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection; 