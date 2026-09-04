import { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { profile } from '../data/profile';

export default function Gallery() {
  const sectionRef = useScrollAnimation();
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightbox, setLightbox] = useState(null);

  const categories = ['All', ...profile.galleryCategories];
  const images = profile.photos.gallery;
  const filtered = activeCategory === 'All'
    ? images
    : images.filter((img) => img.category === activeCategory);

  const openLightbox = (index) => setLightbox(index);
  const closeLightbox = () => setLightbox(null);

  const navigate = useCallback((direction) => {
    if (lightbox === null) return;
    const next = direction === 'next'
      ? (lightbox + 1) % filtered.length
      : (lightbox - 1 + filtered.length) % filtered.length;
    setLightbox(next);
  }, [lightbox, filtered.length]);

  useEffect(() => {
    const handleKey = (e) => {
      if (lightbox === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') navigate('next');
      if (e.key === 'ArrowLeft') navigate('prev');
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightbox, navigate]);

  useEffect(() => {
    if (lightbox !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [lightbox]);

  return (
    <section id="gallery" className="section" style={{
      background: 'linear-gradient(180deg, var(--color-cream) 0%, var(--color-white) 50%, var(--color-cream) 100%)',
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
            Gallery
          </p>
          <h2>Moments That Matter</h2>
        </div>

        {/* Category Filter */}
        <div className="animate-on-scroll" style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '0.4rem',
          marginBottom: 'var(--space-lg)',
        }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '0.45rem 1rem',
                borderRadius: 'var(--radius-xl)',
                fontSize: 'clamp(0.78rem, 1.1vw, 0.85rem)',
                fontWeight: 500,
                transition: 'all var(--transition-fast)',
                background: activeCategory === cat
                  ? 'linear-gradient(135deg, var(--color-purple), var(--color-purple-dark))'
                  : 'rgba(255,255,255,0.7)',
                color: activeCategory === cat ? 'var(--color-white)' : 'var(--color-charcoal-light)',
                border: activeCategory === cat ? 'none' : '1px solid var(--color-border)',
                cursor: 'pointer',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div style={{
          columns: 'clamp(1, 300px, 3)',
          columnGap: 'var(--space-sm)',
          maxWidth: '1000px',
          margin: '0 auto',
        }}>
          {filtered.map((img, i) => (
            <div
              key={`${activeCategory}-${i}`}
              className="animate-on-scroll"
              onClick={() => openLightbox(i)}
              style={{
                breakInside: 'avoid',
                marginBottom: 'var(--space-sm)',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                cursor: 'pointer',
                position: 'relative',
                transition: 'all var(--transition-normal)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'scale(1.02)';
                e.currentTarget.querySelector('.gallery-overlay').style.opacity = '1';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = '';
                e.currentTarget.querySelector('.gallery-overlay').style.opacity = '0';
              }}
            >
              <div style={{
                background: 'linear-gradient(135deg, var(--color-blush-light), var(--color-purple-faint))',
                aspectRatio: i % 3 === 0 ? '4/5' : i % 3 === 1 ? '1/1' : '3/4',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-purple)',
                fontSize: '2rem',
                fontWeight: 700,
                fontFamily: 'var(--font-heading)',
              }}>
                <img
                  src={img.src}
                  alt={img.caption}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.textContent = profile.name[0];
                  }}
                />
              </div>
              <div
                className="gallery-overlay"
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: 'var(--space-md) var(--space-sm) var(--space-sm)',
                  background: 'linear-gradient(transparent, rgba(0,0,0,0.6))',
                  opacity: 0,
                  transition: 'opacity var(--transition-normal)',
                }}
              >
                <p style={{
                  color: 'white',
                  fontSize: 'clamp(0.8rem, 1.1vw, 0.88rem)',
                  fontWeight: 500,
                }}>
                  {img.caption}
                </p>
                <p style={{
                  color: 'rgba(255,255,255,0.7)',
                  fontSize: '0.72rem',
                  marginTop: '0.15rem',
                }}>
                  {img.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          onClick={closeLightbox}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.9)',
            backdropFilter: 'blur(10px)',
            zIndex: 2000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            animation: 'fadeIn 0.3s ease',
            padding: 'var(--space-md)',
          }}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            style={{
              position: 'absolute',
              top: 'var(--space-md)',
              right: 'var(--space-md)',
              color: 'white',
              padding: '0.5rem',
              zIndex: 10,
            }}
          >
            <X size={28} />
          </button>

          {/* Nav */}
          <button
            onClick={(e) => { e.stopPropagation(); navigate('prev'); }}
            style={{
              position: 'absolute',
              left: 'var(--space-md)',
              color: 'white',
              padding: '0.75rem',
              background: 'rgba(255,255,255,0.1)',
              borderRadius: '50%',
              transition: 'background var(--transition-fast)',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
            onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); navigate('next'); }}
            style={{
              position: 'absolute',
              right: 'var(--space-md)',
              color: 'white',
              padding: '0.75rem',
              background: 'rgba(255,255,255,0.1)',
              borderRadius: '50%',
              transition: 'background var(--transition-fast)',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
            onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
          >
            <ChevronRight size={24} />
          </button>

          {/* Image */}
          <div
            onClick={e => e.stopPropagation()}
            style={{
              maxWidth: '90vw',
              maxHeight: '80vh',
              textAlign: 'center',
            }}
          >
            <div style={{
              maxWidth: '800px',
              maxHeight: '70vh',
              borderRadius: 'var(--radius-md)',
              overflow: 'hidden',
              background: 'linear-gradient(135deg, var(--color-blush-light), var(--color-purple-faint))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto',
            }}>
              <img
                src={filtered[lightbox]?.src}
                alt={filtered[lightbox]?.caption}
                style={{
                  maxWidth: '100%',
                  maxHeight: '70vh',
                  objectFit: 'contain',
                  animation: 'scaleIn 0.3s ease',
                }}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.textContent = 'Photo';
                }}
              />
            </div>
            {filtered[lightbox]?.caption && (
              <p style={{
                color: 'rgba(255,255,255,0.8)',
                marginTop: 'var(--space-sm)',
                fontSize: 'clamp(0.85rem, 1.2vw, 1rem)',
              }}>
                {filtered[lightbox].caption}
              </p>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
