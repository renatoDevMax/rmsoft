'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaEnvelope, FaMapMarkerAlt, FaStore, FaUserCircle, FaCheckCircle } from 'react-icons/fa';
import { clientes } from '@/data/clients';
import './ClientSidebar.css';

export default function ClientSidebar() {
  const [expandedClient, setExpandedClient] = useState<string | null>(null);
  const [checkedClients, setCheckedClients] = useState<string[]>([]);

  const toggleClient = (nome: string) => {
    if (expandedClient === nome) {
      setExpandedClient(null);
    } else {
      setExpandedClient(nome);
    }
  };

  const toggleCheck = (nome: string, e: React.MouseEvent) => {
    e.stopPropagation(); // Impede que o clique afete o expandir/colapsar
    
    setCheckedClients(prev => {
      if (prev.includes(nome)) {
        return prev.filter(client => client !== nome);
      } else {
        return [...prev, nome];
      }
    });
  };

  return (
    <aside className="client-sidebar">
      <div className="p-6">
        <h2 className="client-header">
          <FaStore className="client-header-icon" />
          Clientes
        </h2>
        
        <div className="client-list">
          {clientes.map((cliente) => (
            <div 
              key={cliente.nome} 
              className={`client-item ${checkedClients.includes(cliente.nome) ? 'client-checked' : ''}`}
            >
              <div className="client-row">
                <div 
                  className="client-content"
                  onClick={() => toggleClient(cliente.nome)}
                  role="button"
                  tabIndex={0}
                  aria-expanded={expandedClient === cliente.nome}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      toggleClient(cliente.nome);
                    }
                  }}
                >
                  <div className="client-name-container">
                    <div className={`client-status ${cliente.intMensagens ? 'active' : 'inactive'}`} />
                    <span className="client-name">{cliente.nome}</span>
                  </div>
                  <FaChevronDown className={`chevron-icon ${expandedClient === cliente.nome ? 'expanded' : ''}`} />
                </div>
                
                <button 
                  className={`client-check ${checkedClients.includes(cliente.nome) ? 'checked' : ''}`}
                  onClick={(e) => toggleCheck(cliente.nome, e)}
                  aria-label={checkedClients.includes(cliente.nome) ? "Desmarcar cliente" : "Marcar cliente"}
                >
                  <FaCheckCircle />
                </button>
              </div>

              <AnimatePresence>
                {expandedClient === cliente.nome && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="client-details">
                      <div className="client-detail-row">
                        <FaMapMarkerAlt className="client-detail-icon mt-1" />
                        <div>
                          <p>{cliente.rua}, {cliente.numero}</p>
                          <p>{cliente.bairro} - {cliente.cidade}</p>
                        </div>
                      </div>

                      <div className="client-detail-row">
                        <FaEnvelope className="client-detail-icon" />
                        <span>
                          {cliente.intMensagens ? 'Aceita mensagens' : 'Não aceita mensagens'}
                        </span>
                      </div>

                      <div className="client-product">
                        <p className="client-product-title">
                          Produto de Interesse
                        </p>
                        {cliente.produtosInt.map((produto, index) => (
                          <div key={index}>
                            <div className="client-product-name">
                              {produto.nome}
                            </div>
                            <p className="client-product-description">
                              {produto.descricao}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
} 