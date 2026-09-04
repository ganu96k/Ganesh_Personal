import { Heart } from 'lucide-react';
import { profile } from '../data/profile';

export default function Footer() {
  return (
    <footer style={{
      padding: 'var(--space-lg) 0',
      textAlign: 'center',
      borderTop: '1px solid var(--color-border)',
      background: 'var(--color-cream)',
    }}>
      <div className="container">
        <p style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.4rem',
          fontSize: 'clamp(0.8rem, 1.1vw, 0.88rem)',
          color: 'var(--color-gray)',
        }}>
          Made with <Heart size={14} style={{ color: 'var(--color-blush-dark)', fill: 'var(--color-blush)' }} /> by {profile.name}
        </p>
        <p style={{
          fontSize: '0.75rem',
          color: 'var(--color-gray-light)',
          marginTop: '0.4rem',
        }}>
          A personal introduction · {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
