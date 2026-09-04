import { MapPin, GraduationCap, Briefcase, Heart, ChevronDown } from 'lucide-react';
import { profile } from '../data/profile';

export default function Hero() {
  const educationText = Array.isArray(profile.education)
    ? profile.education[0]?.degree || ''
    : profile.education || '';

  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: 'var(--nav-height)',
    }}>
      {/* Decorative Background Elements */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '5%',
        width: 'clamp(200px, 30vw, 400px)',
        height: 'clamp(200px, 30vw, 400px)',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(244,194,194,0.25), transparent 70%)',
        animation: 'float 6s ease-in-out infinite',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '15%',
        left: '3%',
        width: 'clamp(150px, 20vw, 280px)',
        height: 'clamp(150px, 20vw, 280px)',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(123,107,141,0.15), transparent 70%)',
        animation: 'float 8s ease-in-out infinite 1s',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        top: '60%',
        right: '15%',
        width: 'clamp(100px, 12vw, 180px)',
        height: 'clamp(100px, 12vw, 180px)',
        borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
        background: 'radial-gradient(circle, rgba(201,169,110,0.15), transparent 70%)',
        animation: 'float 7s ease-in-out infinite 2s',
        pointerEvents: 'none',
      }} />

      <div className="container hero-grid" style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: 'var(--space-xl)',
        alignItems: 'center',
        textAlign: 'center',
      }}>
        
        {/* Profile Image */}
        <div style={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          animation: 'scaleIn 0.8s ease both',
        }}>
          {/* Outer ring */}
          <div style={{
            width: 'clamp(220px, 40vw, 300px)',
            height: 'clamp(220px, 40vw, 300px)',
            borderRadius: '50%',
            padding: '4px',
            background: 'linear-gradient(135deg, var(--color-blush), var(--color-purple), var(--color-gold))',
            animation: 'spin-slow 20s linear infinite',
          }}>
            <div style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              padding: '4px',
              background: 'var(--color-cream)',
            }}>
              <div style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--color-blush-light), var(--color-purple-faint))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 'clamp(3rem, 8vw, 5rem)',
                color: 'var(--color-purple)',
                fontWeight: 700,
                fontFamily: 'var(--font-heading)',
                overflow: 'hidden',
              }}>
                <img
                  src={profile.photos.profile}
                  alt={profile.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '50%',
                  }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.textContent = profile.name[0];
                  }}
                />
              </div>
            </div>
          </div>

          {/* Floating badge */}
          <div style={{
            position: 'absolute',
            bottom: '8%',
            right: '5%',
            background: 'var(--color-white)',
            borderRadius: 'var(--radius-xl)',
            padding: '0.4rem 0.9rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem',
            boxShadow: 'var(--shadow-md)',
            animation: 'float 4s ease-in-out infinite 0.5s',
            fontSize: 'clamp(0.7rem, 1.1vw, 0.8rem)',
            fontWeight: 600,
            color: 'var(--color-blush-dark)',
            whiteSpace: 'nowrap',
          }}>
            <Heart size={14} style={{ fill: 'var(--color-blush)', color: 'var(--color-blush)' }} />
            Family First
          </div>
        </div>

        {/* Text Content */}
        <div style={{ animation: 'fadeInUp 0.8s ease 0.3s both' }}>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(0.85rem, 1.5vw, 1rem)',
            color: 'var(--color-purple)',
            fontWeight: 500,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            marginBottom: 'var(--space-sm)',
          }}>
            Hello, I'm
          </p>

          <h1 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2.8rem, 7vw, 5rem)',
            fontWeight: 700,
            lineHeight: 1.1,
            marginBottom: 'var(--space-sm)',
            background: 'linear-gradient(135deg, var(--color-charcoal), var(--color-purple-dark))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            {profile.name}
          </h1>

          <p style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
            color: 'var(--color-blush-dark)',
            fontStyle: 'italic',
            fontWeight: 400,
            marginBottom: 'var(--space-md)',
          }}>
            {profile.profession}
          </p>

          <p style={{
            fontSize: 'clamp(0.95rem, 1.5vw, 1.15rem)',
            color: 'var(--color-gray)',
            maxWidth: '550px',
            margin: '0 auto var(--space-lg)',
            lineHeight: 1.8,
          }}>
            Building thoughtful software, meaningful relationships, and a happy life.
          </p>

          {/* Quick Info Badges */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 'var(--space-sm)',
            marginBottom: 'var(--space-lg)',
          }}>
            {[
              { icon: <MapPin size={14} />, text: profile.location },
              { icon: <Briefcase size={14} />, text: profile.profession },
              { icon: <GraduationCap size={14} />, text: educationText },
            ].map((badge, i) => (
              <span key={i} style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                padding: '0.4rem 0.85rem',
                borderRadius: 'var(--radius-xl)',
                background: 'rgba(255,255,255,0.7)',
                backdropFilter: 'blur(10px)',
                border: '1px solid var(--color-border)',
                fontSize: 'clamp(0.75rem, 1.1vw, 0.85rem)',
                color: 'var(--color-charcoal-light)',
                fontWeight: 500,
              }}>
                {badge.icon}
                {badge.text}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 'var(--space-sm)',
          }}>
            <a href="#about" className="btn btn-primary">
              Get to Know Me
            </a>
            <a href="#gallery" className="btn btn-secondary">
              View My Gallery
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute',
        bottom: '2rem',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.3rem',
        animation: 'float 2s ease-in-out infinite',
        color: 'var(--color-gray-light)',
        fontSize: '0.75rem',
      }}>
        <span>Scroll</span>
        <ChevronDown size={18} />
      </div>

      <style>{`
        @media (min-width: 768px) {
          .hero-grid {
            grid-template-columns: auto 1fr !important;
            text-align: left !important;
            gap: var(--space-2xl) !important;
          }
        }
      `}</style>
    </section>
  );
}
