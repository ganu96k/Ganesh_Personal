import { Phone, Mail, MessageCircle, Instagram, Linkedin } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { profile } from '../data/profile';

const contactLinks = [
  {
    label: 'WhatsApp',
    icon: MessageCircle,
    href: `https://wa.me/${profile.whatsapp?.replace(/[^0-9]/g, '')}`,
    color: '#25D366',
    bg: 'rgba(37, 211, 102, 0.1)',
  },
  {
    label: 'Phone',
    icon: Phone,
    href: `tel:${profile.phone}`,
    color: 'var(--color-purple)',
    bg: 'var(--color-purple-faint)',
  },
  {
    label: 'Email',
    icon: Mail,
    href: `mailto:${profile.email}`,
    color: '#EA4335',
    bg: 'rgba(234, 67, 53, 0.08)',
  },
  // add office email button when present
  ...(profile.officeEmail
    ? [
        {
          label: 'Office Email',
          icon: Mail,
          href: `mailto:${profile.officeEmail}`,
          color: 'var(--color-purple)',
          bg: 'rgba(90,77,107,0.06)',
        },
      ]
    : []),
  {
    label: 'Instagram',
    icon: Instagram,
    href: profile.instagram,
    color: '#E1306C',
    bg: 'rgba(225, 48, 108, 0.08)',
  },
  {
    label: 'LinkedIn',
    icon: Linkedin,
    href: profile.linkedin,
    color: '#0A66C2',
    bg: 'rgba(10, 102, 194, 0.08)',
  },
];

export default function Contact() {
  const sectionRef = useScrollAnimation();

  return (
    <section id="contact" className="section" style={{
      background: 'linear-gradient(180deg, var(--color-cream) 0%, var(--color-white) 100%)',
    }}>
      <div className="container" ref={sectionRef}>
        <div className="section-header animate-on-scroll">
          <p style={{
            fontSize: 'clamp(0.8rem, 1.2vw, 0.9rem)',
            color: 'var(--color-purple)',
            fontWeight: 500,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            marginBottom: 'var(--space-xs)',
          }}>
            Contact
          </p>
          <h2>Let's Connect</h2>
          <p style={{
            fontSize: 'clamp(1rem, 1.5vw, 1.15rem)',
            fontStyle: 'italic',
            fontFamily: 'var(--font-heading)',
            color: 'var(--color-charcoal)',
            marginTop: 'var(--space-sm)',
          }}>
            "If our values align, say hello."
          </p>
        </div>

        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 'var(--space-sm)',
          maxWidth: '700px',
          margin: '0 auto',
        }}>
          {contactLinks.map((link, i) => {
            const Icon = link.icon;
            return (
              <a
                key={i}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="animate-on-scroll contact-link"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  padding: '0.75rem 1.4rem',
                  borderRadius: 'var(--radius-xl)',
                  background: link.bg,
                  color: link.color,
                  fontSize: 'clamp(0.85rem, 1.2vw, 0.95rem)',
                  fontWeight: 500,
                  transition: 'all var(--transition-normal)',
                  border: `1.5px solid transparent`,
                  textDecoration: 'none',
                  minWidth: '150px',
                  justifyContent: 'center',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = `0 6px 20px ${link.color}22`;
                  e.currentTarget.style.borderColor = link.color;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = '';
                  e.currentTarget.style.boxShadow = '';
                  e.currentTarget.style.borderColor = 'transparent';
                }}
              >
                <Icon size={18} />
                {link.label}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
