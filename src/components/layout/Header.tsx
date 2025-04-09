'use client';

import React, { useState, useEffect } from 'react';
import { FaHome, FaInfoCircle, FaBoxOpen, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import './Header.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { name: "Home", href: "/", icon: <FaHome className="icon-nav" /> },
    { name: "Sobre", href: "/sobre", icon: <FaInfoCircle className="icon-nav" /> },
    { name: "Produtos", href: "/produtos", icon: <FaBoxOpen className="icon-nav" /> },
    { name: "Contato", href: "/contato", icon: <FaEnvelope className="icon-nav" /> },
  ];

  // Detectar scroll para aplicar classe adicional
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="header-container">
        {/* Logo/Brand - Lado Esquerdo */}
        <div className="header-left">
          <Link href="/" className="header-brand">
            RM Soft
            <Image
              src="/logo.svg"
              alt="RM Soft Logo"
              width={32}
              height={32}
              className="header-logo"
            />
          </Link>
        </div>

        {/* Navegação Desktop - Lado Direito */}
        <div className="header-right">
          <nav className="header-nav-desktop">
            {menuItems.map((item) => (
              <Link 
                key={item.name}
                className={pathname === item.href ? 'header-nav-item-active' : 'header-nav-item'}
                href={item.href}
              >
                {item.icon}
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Menu Toggle para Mobile */}
          <button 
            className="header-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {isMenuOpen && (
        <nav className="header-nav-mobile">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              className={pathname === item.href ? 'header-nav-item-active' : 'header-nav-item'}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.icon}
              {item.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
} 