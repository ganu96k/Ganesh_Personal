import { useState, useEffect } from 'react';
import { Menu, X, Heart } from 'lucide-react';
import { profile } from '../data/profile';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Career', href: '#career' },
  { label: 'Education', href: '#education' },
  { label: 'Family', href: '#family' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      height: 'var(--nav-height)',
      display: 'flex',
      alignItems: 'center',
      background: scrolled
        ? 'rgba(253, 248, 243, 0.85)'
        : 'rgba(253, 248, 243, 0.4)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderBottom: scrolled ? '1px solid var(--color-border)' : '1px solid transparent',
      transition: 'all var(--transition-normal)',
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <a href="#" style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '1.4rem',
          fontWeight: 700,
          color: 'var(--color-charcoal)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem',
          textDecoration: 'none',
        }}>
          <Heart size={18} style={{ color: 'var(--color-blush-dark)', fill: 'var(--color-blush)' }} />
          {profile.name}
        </a>

        {/* Desktop Nav */}
        <ul style={{
          display: 'flex',
          gap: 'clamp(1.2rem, 2.5vw, 2rem)',
          alignItems: 'center',
        }} className="desktop-nav">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} style={{
                fontSize: 'clamp(0.8rem, 1.2vw, 0.9rem)',
                fontWeight: 500,
                color: 'var(--color-charcoal-light)',
                transition: 'color var(--transition-fast)',
                letterSpacing: '0.02em',
                textTransform: 'uppercase',
                position: 'relative',
              }}
              onMouseEnter={e => e.target.style.color = 'var(--color-purple)'}
              onMouseLeave={e => e.target.style.color = 'var(--color-charcoal-light)'}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="mobile-menu-btn"
          aria-label="Toggle menu"
          style={{
            display: 'none',
            padding: '0.5rem',
            color: 'var(--color-charcoal)',
            zIndex: 1001,
          }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className="mobile-menu" style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(253, 248, 243, 0.97)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '2rem',
        opacity: isOpen ? 1 : 0,
        pointerEvents: isOpen ? 'auto' : 'none',
        transition: 'opacity var(--transition-normal)',
        zIndex: 999,
      }}>
        {navLinks.map((link, i) => (
          <a
            key={link.href}
            href={link.href}
            onClick={handleLinkClick}
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.6rem',
              fontWeight: 500,
              color: 'var(--color-charcoal)',
              transition: 'color var(--transition-fast)',
              animation: isOpen ? `fadeInUp 0.4s ease ${i * 0.08}s both` : 'none',
            }}
          >
            {link.label}
          </a>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
