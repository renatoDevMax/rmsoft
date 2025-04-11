'use client';

import React, { useState, useRef, useEffect } from 'react';
import { FaChevronDown, FaCog, FaPaperPlane, FaPhone, FaVideo, FaEllipsisV, FaSmile, FaPaperclip, FaMicrophone, FaImage, FaUserCircle, FaBox, FaUsers, FaTimes, FaWhatsapp, FaBell, FaShoppingBag, FaMapMarkerAlt, FaCheckCircle, FaTimesCircle, FaCheck, FaRegSquare } from 'react-icons/fa';
import { IoArrowBack } from 'react-icons/io5';
import './MessagePanel.css';
import { clientes } from '@/data/clients';

// Interfaces para os tipos
interface ClienteInteresse {
  nome: string;
  cidade: string;
  bairro: string;
  rua: string;
  numero: string;
  intMensagens: boolean;
}

interface ProdutoInteresse {
  nome: string;
  descricao: string;
  imagem: string;
  clientes: ClienteInteresse[];
}

export default function MessagePanel() {
  const [message, setMessage] = useState('');
  const [isConfigOpen, setIsConfigOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isProdutosModalOpen, setIsProdutosModalOpen] = useState(false);
  const [isClientesModalOpen, setIsClientesModalOpen] = useState(false);
  const [confirmedProducts, setConfirmedProducts] = useState<number[]>([]);
  const [confirmedClients, setConfirmedClients] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const currentTime = new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const toggleProductConfirm = (index: number) => {
    setConfirmedProducts(prev => {
      if (prev.includes(index)) {
        return prev.filter(i => i !== index);
      } else {
        return [...prev, index];
      }
    });
  };

  const toggleClientConfirm = (nome: string) => {
    setConfirmedClients(prev => {
      if (prev.includes(nome)) {
        return prev.filter(clientName => clientName !== nome);
      } else {
        return [...prev, nome];
      }
    });
  };

  // Extrair produtos únicos de todos os clientes
  const produtosUnicos = React.useMemo<ProdutoInteresse[]>(() => {
    const produtos = new Map<string, ProdutoInteresse>();
    
    clientes.forEach(cliente => {
      cliente.produtosInt.forEach(produto => {
        if (!produtos.has(produto.nome)) {
          produtos.set(produto.nome, { 
            ...produto, 
            clientes: [{ 
              nome: cliente.nome, 
              cidade: cliente.cidade, 
              bairro: cliente.bairro,
              rua: cliente.rua,
              numero: cliente.numero,
              intMensagens: cliente.intMensagens 
            }] 
          });
        } else {
          const produtoExistente = produtos.get(produto.nome);
          if (produtoExistente) {
            produtoExistente.clientes.push({ 
              nome: cliente.nome, 
              cidade: cliente.cidade, 
              bairro: cliente.bairro,
              rua: cliente.rua,
              numero: cliente.numero,
              intMensagens: cliente.intMensagens
            });
          }
        }
      });
    });
    
    return Array.from(produtos.values());
  }, []);

  // Exibição dos cards de produtos
  const renderProdutosCards = () => {
    if (!produtosUnicos || produtosUnicos.length === 0) return <p>Nenhum produto de interesse encontrado.</p>;

    return (
      <div className="produtos-cards-container">
        {produtosUnicos.map((produto, index) => (
          <div 
            className={`produto-card ${confirmedProducts.includes(index) ? 'produto-card-confirmed' : ''}`} 
            key={index}
          >
            <div className="produto-card-header">
              <div className="produto-image">
                {produto.imagem ? (
                  <img src={produto.imagem} alt={produto.nome} className="produto-img" />
                ) : (
                  <div className="produto-image-placeholder">
                    <span>{produto.nome.charAt(0)}</span>
                  </div>
                )}
              </div>
              <button 
                className={`produto-confirm-checkbox ${confirmedProducts.includes(index) ? 'checked' : ''}`}
                onClick={() => toggleProductConfirm(index)}
                aria-label={confirmedProducts.includes(index) ? "Desmarcar produto" : "Marcar produto"}
              >
                {confirmedProducts.includes(index) ? <FaCheck /> : <FaRegSquare />}
              </button>
            </div>
            <div className="produto-info">
              <h3>{produto.nome}</h3>
              <p className="produto-descricao">{produto.descricao}</p>
            </div>
            <div className="produto-clientes">
              <h4>Clientes Interessados:</h4>
              <ul>
                {produto.clientes.map((cliente: ClienteInteresse, idx: number) => (
                  <li key={idx} className="cliente-interesse-item">
                    <div className="cliente-interesse-header">
                      <FaUserCircle className="cliente-icon" />
                      <strong>{cliente.nome}</strong>
                      <div className="status-indicator">
                        {cliente.intMensagens ? (
                          <FaCheckCircle className="aceita-icon" title="Aceita mensagens" />
                        ) : (
                          <FaTimesCircle className="nao-aceita-icon" title="Não aceita mensagens" />
                        )}
                      </div>
                    </div>
                    <div className="cliente-interesse-details">
                      <p>
                        <FaMapMarkerAlt className="detail-icon" />
                        {cliente.cidade}, {cliente.bairro}
                      </p>
                      <p>
                        <span className="detail-icon">🏠</span>
                        {cliente.rua}, {cliente.numero}
                      </p>
                      {cliente.intMensagens && (
                        <p>
                          <FaWhatsapp className="detail-icon" style={{color: '#25D366'}} />
                          Aceita mensagens via WhatsApp
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    );
  };

  // Renderização dos cards de clientes
  const renderClientesCards = () => {
    if (!clientes || clientes.length === 0) return <p>Nenhum cliente encontrado.</p>;

    return (
      <div className="produtos-cards-container">
        {clientes.map((cliente, index) => (
          <div 
            className={`produto-card ${confirmedClients.includes(cliente.nome) ? 'produto-card-confirmed' : ''}`} 
            key={index}
          >
            <div className="produto-card-header">
              <div className="produto-image">
                <div className="produto-image-placeholder">
                  <FaUserCircle size={32} />
                </div>
              </div>
              <button 
                className={`produto-confirm-checkbox ${confirmedClients.includes(cliente.nome) ? 'checked' : ''}`}
                onClick={() => toggleClientConfirm(cliente.nome)}
                aria-label={confirmedClients.includes(cliente.nome) ? "Desmarcar cliente" : "Marcar cliente"}
              >
                {confirmedClients.includes(cliente.nome) ? <FaCheck /> : <FaRegSquare />}
              </button>
            </div>
            <div className="produto-info">
              <h3>{cliente.nome}</h3>
              <div className="cliente-interesse-details">
                <p>
                  <FaMapMarkerAlt className="detail-icon" />
                  {cliente.cidade}, {cliente.bairro}
                </p>
                <p>
                  <span className="detail-icon">🏠</span>
                  {cliente.rua}, {cliente.numero}
                </p>
                <p>
                  {cliente.intMensagens ? (
                    <><FaWhatsapp className="detail-icon" style={{color: '#25D366'}} /> Aceita mensagens</>
                  ) : (
                    <><FaTimesCircle className="detail-icon" style={{color: '#f87171'}} /> Não aceita mensagens</>
                  )}
                </p>
              </div>
            </div>
            <div className="produto-clientes">
              <h4>Produto de Interesse:</h4>
              <ul>
                {cliente.produtosInt.map((produto, idx) => (
                  <li key={idx} className="cliente-interesse-item">
                    <div className="cliente-interesse-header">
                      <FaShoppingBag className="cliente-icon" />
                      <strong>{produto.nome}</strong>
                    </div>
                    <p className="produto-descricao">{produto.descricao}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="message-panel-container">
      <div className="message-config-panel">
        <div className="message-textarea-container">
          <textarea
            className="message-textarea"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Digite a mensagem que será enviada..."
            rows={6}
          />
        </div>

        <div className="message-actions">
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleImageSelect}
            accept="image/*"
            style={{ display: 'none' }}
          />
          <button
            className={`message-image-button ${selectedImage ? 'selected' : ''}`}
            onClick={handleImageClick}
          >
            <FaImage className="button-icon" />
            <span>{selectedImage ? 'Imagem selecionada' : 'Selecionar imagem'}</span>
          </button>

          <button
            className={`message-config-button ${isConfigOpen ? 'active' : ''}`}
            onClick={() => setIsConfigOpen(!isConfigOpen)}
          >
            <div className="config-button-content">
              <FaCog className="button-icon" />
              <span>Configurações da Mensagem</span>
              <FaChevronDown className={`chevron-icon ${isConfigOpen ? 'rotate' : ''}`} />
            </div>
          </button>

          {isConfigOpen && (
            <div className="config-menu">
              <button 
                className="config-menu-item"
                onClick={() => {
                  setIsProdutosModalOpen(true);
                  setIsConfigOpen(false);
                }}
              >
                <FaBox />
                <span>Produtos de Interesse</span>
              </button>
              <button 
                className="config-menu-item"
                onClick={() => {
                  setIsClientesModalOpen(true);
                  setIsConfigOpen(false);
                }}
              >
                <FaUsers />
                <span>Selecionar Clientes</span>
              </button>
            </div>
          )}

          <button className="message-send-button">
            <FaPaperPlane className="button-icon" />
            <span>Enviar Mensagem</span>
          </button>
        </div>
      </div>

      <div className="message-preview">
        <div className="phone-container">
          <div className="phone-notch" />
          <div className="volume-buttons" />
          <div className="phone-screen">
            <div className="phone-status-bar">
              <span>{currentTime}</span>
              <div className="status-icons">
                <div className="signal-icon" />
                <div className="wifi-icon" />
                <div className="battery-icon" />
              </div>
            </div>

            <div className="whatsapp-container">
              <div className="whatsapp-header">
                <div className="whatsapp-header-left">
                  <IoArrowBack className="whatsapp-header-icon" />
                  <div className="whatsapp-contact-avatar">
                    <FaUserCircle size={32} color="#aebac1" />
                  </div>
                  <div className="whatsapp-contact-info">
                    <span className="whatsapp-contact-name">Visualização da Mensagem</span>
                    <span className="whatsapp-contact-status">Preview</span>
                  </div>
                </div>
                <div className="whatsapp-header-actions">
                  <FaVideo className="whatsapp-header-icon" />
                  <FaPhone className="whatsapp-header-icon" />
                  <FaEllipsisV className="whatsapp-header-icon" />
                </div>
              </div>

              <div className="whatsapp-chat">
                <div className="whatsapp-messages">
                  {(selectedImage || message) && (
                    <div className="whatsapp-message outgoing">
                      <div className="message-content">
                        {selectedImage && (
                          <div className="message-image">
                            <img 
                              src={selectedImage} 
                              alt="Imagem selecionada" 
                              style={{ 
                                maxWidth: '100%', 
                                borderRadius: '6px',
                                marginBottom: message ? '8px' : '0'
                              }} 
                            />
                          </div>
                        )}
                        {message && <p>{message}</p>}
                        <span className="message-time">{currentTime}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="whatsapp-input">
                <div className="input-box">
                  <FaSmile className="whatsapp-header-icon" size={14} />
                  <FaPaperclip className="whatsapp-header-icon" size={14} />
                  <span className="input-placeholder">Mensagem</span>
                </div>
                <div className="voice-button">
                  <FaMicrophone color="white" size={14} />
                </div>
              </div>
            </div>
          </div>
          <div className="phone-button" />
        </div>
      </div>

      {/* Modal de Produtos de Interesse */}
      {isProdutosModalOpen && (
        <div className="produtos-modal-overlay" onClick={() => setIsProdutosModalOpen(false)}>
          <div className="produtos-modal-container" onClick={(e) => e.stopPropagation()}>
            <div className="produtos-modal-header">
              <h2>Produtos de Interesse</h2>
              <button 
                className="close-modal-button" 
                onClick={() => setIsProdutosModalOpen(false)}
              >
                <FaTimes />
              </button>
            </div>
            
            {renderProdutosCards()}
          </div>
        </div>
      )}

      {/* Modal de Seleção de Clientes */}
      {isClientesModalOpen && (
        <div className="produtos-modal-overlay" onClick={() => setIsClientesModalOpen(false)}>
          <div className="produtos-modal-container" onClick={(e) => e.stopPropagation()}>
            <div className="produtos-modal-header">
              <h2>Selecionar Clientes</h2>
              <button 
                className="close-modal-button" 
                onClick={() => setIsClientesModalOpen(false)}
              >
                <FaTimes />
              </button>
            </div>
            
            {renderClientesCards()}
          </div>
        </div>
      )}
    </div>
  );
} 