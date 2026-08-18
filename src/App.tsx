import { useState, useEffect, useRef } from 'react'

const NAV_LINKS = ['About', 'Services', 'Work', 'Process', 'Contact']

const DESIGNER_NAME = 'Daniel Kamau'
const DESIGNER_TITLE = 'Graphic Designer & Creative Lead'
const CONTACT_EMAIL = 'kamaudante@gmail.com'
const CONTACT_PHONE = '+254 700 183478'
const PORTFOLIO_URL = 'daniel-kamau-portfolio.netlify.app'

const SERVICES = [
  {
    number: '01',
    title: 'Brand Identity',
    desc: 'Complete visual systems that define who you are — from strategy and positioning to color, type, and brand voice.',
    tags: ['Strategy', 'Visual Identity', 'Brand Guidelines'],
  },
  {
    number: '02',
    title: 'Logo Design',
    desc: 'Marks that endure. Crafted logos built on concept, refined through iteration, and delivered with purpose.',
    tags: ['Wordmarks', 'Monograms', 'Icon Systems'],
  },
  {
    number: '03',
    title: 'Print & Collateral',
    desc: 'Posters, cards, and marketing materials that hold their own in a physical world — designed to leave an impression.',
    tags: ['Posters', 'Business Cards', 'Stationery'],
  },
  {
    number: '04',
    title: 'Wedding Invitations',
    desc: 'Bespoke suites for life\'s most memorable occasions — editorial, romantic, and entirely one-of-a-kind.',
    tags: ['Invitation Suites', 'Save the Dates', 'Day-of Materials'],
  },
  {
    number: '05',
    title: 'Mockups & Presentation',
    desc: 'Studio-grade mockups and pitch decks that present your brand at its absolute best.',
    tags: ['Product Mockups', 'Brand Presentations', 'Pitch Decks'],
  },
  {
    number: '06',
    title: 'Remote Creative Lead',
    desc: 'Embedded creative direction for remote teams — leading design decisions, mentoring designers, and ensuring brand cohesion.',
    tags: ['Art Direction', 'Team Leadership', 'Brand Governance'],
  },
]

const PROJECTS = [
  {
    id: 1,
    title: 'Exploranova',
    category: 'Logo Design',
    year: '2024',
    img: '/projects/Exploranova.jpg',
    accent: '#2dd4bf',
  },
  {
    id: 3,
    title: 'Arbanite Farm Ventures',
    category: 'Print & Collateral',
    year: '2023',
    img:  '/projects/Arbanite Farm Ventures.jpg',
    accent: '#818cf8',
  },
  {
    id: 4,
    title: 'L ',
    category: 'Logo Design',
    year: '2023',
    img: '/projects/Laminar Engineering and Auto Spares.jpg',
    accent: '#fb7185',
  },
  {
    id: 5,
    title: 'Linova Care Chemist',
    category: 'Logo Design',
    year: '2023',
    img: '/projects/Linova Care Chemist.jpg',
    accent: '#34d399',
  },
  {
    id: 6,
    title: 'MIIRI & Associates',
    category: 'Logo Design',
    year: '2022',
    img: '/projects/MIIRI & ASSOCIATES ADVOCATES.jpg',
    accent: '#2dd4bf',
  },
  {
    id: 7,
    title: 'Mo Dance Competition',
    category: 'Print & Collateral',
    year: '2025',
    img: '/projects/Mo Dance.jpg',
    accent: '#ff6b35',
  },
  {
    id: 8,
    title: 'Big Dutchman East Africa - Madaraka Day',
    category: 'Print & Collateral',
    year: '2026',
    img: '/projects/Big Dutchman East Africa Madaraka Day.jpg',
    accent: '#ff8c00',
  },
  {
    id: 9,
    title: 'Big Dutchman East Africa Exhibition',
    category: 'Print & Collateral',
    year: '2026',
    img: '/projects/Big Dutchman East Africa Exhibition.jpg',
    accent: '#ff8c00',
  }
  ,
  {
    id: 10,
    title: 'Ruth & Michael Wedding Invitation',
    category: 'Wedding Invitations',
    year: '2026',
    img: '/projects/Ruth and Michael Wedding.jpg',
    accent: '#10b981',
  },
  {
    id: 17,
    title: 'Esther & Kenneth Wedding Invitation',
    category: 'Wedding Invitations',
    year: '2026',
    img: '/projects/Esther and Kenneth Wedding.png',
    accent: '#d4a574',
  },
  {
    id: 18,
    title: 'Joyce & Collins Wedding Invitation',
    category: 'Wedding Invitations',
    year: '2026',
    img: '/projects/Joyce and Collins Wedding.png',
    accent: '#b8860b',
  },
  {
    id: 19,
    title: 'Linnet & Nixon Wedding Invitation',
    category: 'Wedding Invitations',
    year: '2026',
    img: '/projects/Linnet and Nixon Wedding.png',
    accent: '#8b7500',
  },
  {
    id: 20,
    title: 'Liverpool vs Arsenal Watch Party',
    category: 'Print & Collateral',
    year: '2026',
    img: '/projects/Liverpool vs Arsenal Event.png',
    accent: '#dc2626',
  },
  {
    id: 21,
    title: 'Barber Aftershave',
    category: 'Product Branding',
    year: '2026',
    img: '/projects/Barber Aftershave.png',
    accent: '#1f2937',
  },
  {
    id: 22,
    title: 'Exploranova Tours',
    category: 'Logo Design',
    year: '2024',
    img: '/projects/Exploranova Tours.png',
    accent: '#a78b6f',
  },
  {
    id: 11,
    title: 'Product Branding',
    category: 'Product Branding',
    year: '2026',
    img: '/projects/Product Branding Combined.jpeg',
    accent: '#22c55e',
  },
  {
    id: 12,
    title: 'Kalito Nails',
    category: 'Logo Design',
    year: '2026',
    img: '/projects/Kalita Nails Logo.png',
    accent: '#e91e63',
  },
  {
    id: 13,
    title: 'Makeup Maven',
    category: 'Logo Design',
    year: '2026',
    img: '/projects/Makeup Maven Logo.png',
    accent: '#a1887f',
  },
  {
    id: 14,
    title: 'Hisani',
    category: 'Product Branding',
    year: '2026',
    img: '/projects/Product Branding HISANI.png',
    accent: '#10b981',
  },
  {
    id: 15,
    title: 'Leleshwa',
    category: 'Product Branding',
    year: '2026',
    img: '/projects/Product Branding 10ml.jpeg',
    accent: '#22c55e',
  },
  {
    id: 16,
    title: 'Leleshwa 50ml',
    category: 'Product Branding',
    year: '2026',
    img: '/projects/Product Branding 50ml.jpeg',
    accent: '#22c55e',
  }
]

const FILTERS = ['Logo Design', 'Wedding Invitations', 'Print & Collateral', 'Product Branding']

const TESTIMONIALS = [
  {
    quote: "Working with Vivid Empire was the single best investment we made in our rebrand. The work didn\'t just look beautiful — it fundamentally changed how people perceive our business.",
    name: 'Amara Osei',
    role: 'Founder, Carta Studio',
    avatar: 'AO',
  },
  {
    quote: "Our wedding invitations stopped guests in their tracks. Months later, people are still talking about them. There is a rare kind of talent here — one that listens deeply and creates something timeless.",
    name: 'Priya & Daniel Laurent',
    role: 'Clients, 2024',
    avatar: 'PL',
  },
  {
    quote: "As a remote creative lead, the contribution to our team was extraordinary. Design quality went up, creative decisions became more intentional, and our brand finally felt coherent.",
    name: 'Marcus Webb',
    role: 'CEO, Nighthawk Agency',
    avatar: 'MW',
  },
]

export default function App() {
  const [activeFilter, setActiveFilter] = useState('Logo Design')
  const [scrolled, setScrolled] = useState(false)
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[0] | null>(null)
  const [previewIndex, setPreviewIndex] = useState(0)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const filtered = activeFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeFilter)

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <div style={{ fontFamily: 'var(--font-body)', backgroundColor: '#060e0e', color: '#e2e8f0', minHeight: '100vh' }}>

      {/* NAV */}
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: 'background 0.4s, backdrop-filter 0.4s',
          background: scrolled ? 'rgba(6,14,14,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(20,184,166,0.15)' : '1px solid transparent',
        }}
      >
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
          >
            <div style={{
              width: 38,
              height: 38,
              background: 'linear-gradient(135deg, #14b8a6, #0d9488)',
              borderRadius: 8,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 16,
              color: '#fff',
              letterSpacing: '-0.02em',
            }}>DK</div>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 17, color: '#f1f5f9', letterSpacing: '-0.01em' }}>{DESIGNER_NAME}</span>
          </button>

          {/* Desktop links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }} className="hidden-mobile">
            {NAV_LINKS.map(link => (
              <button
                key={link}
                onClick={() => scrollTo(link.toLowerCase())}
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  color: '#94a3b8', fontSize: 14, fontWeight: 500, letterSpacing: '0.02em',
                  transition: 'color 0.2s', padding: 0,
                  fontFamily: 'var(--font-body)',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#2dd4bf')}
                onMouseLeave={e => (e.currentTarget.style.color = '#94a3b8')}
              >
                {link}
              </button>
            ))}
            <button
              onClick={() => scrollTo('contact')}
              style={{
                background: 'linear-gradient(135deg, #14b8a6, #0d9488)',
                border: 'none', borderRadius: 6,
                color: '#fff', fontSize: 13, fontWeight: 600,
                padding: '9px 20px', cursor: 'pointer', letterSpacing: '0.02em',
                fontFamily: 'var(--font-body)',
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              Let's Work Together
            </button>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'none', flexDirection: 'column', gap: 5, padding: 4 }}
            className="show-mobile"
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map(i => (
              <div key={i} style={{ width: 22, height: 2, backgroundColor: '#94a3b8', borderRadius: 2 }} />
            ))}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div style={{
            background: 'rgba(6,14,14,0.98)',
            borderTop: '1px solid rgba(20,184,166,0.15)',
            padding: '1.5rem 2rem',
            display: 'flex', flexDirection: 'column', gap: '1.25rem',
          }}>
            {[...NAV_LINKS, 'Contact'].map(link => (
              <button
                key={link}
                onClick={() => scrollTo(link.toLowerCase())}
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  color: '#cbd5e1', fontSize: 16, fontWeight: 500,
                  textAlign: 'left', fontFamily: 'var(--font-body)', padding: 0,
                }}
              >
                {link}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section
        ref={heroRef}
        id="hero"
        style={{
          minHeight: '100vh',
          display: 'grid',
          gridTemplateColumns: '1fr',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
          padding: '120px 2rem 80px',
        }}
      >
        {/* Background glow */}
        <div style={{
          position: 'absolute', top: '20%', left: '-10%', width: 600, height: 600,
          background: 'radial-gradient(circle, rgba(20,184,166,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: '10%', right: '-5%', width: 500, height: 500,
          background: 'radial-gradient(circle, rgba(13,148,136,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        {/* Grid lines */}
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.04,
          backgroundImage: 'linear-gradient(rgba(20,184,166,1) 1px, transparent 1px), linear-gradient(90deg, rgba(20,184,166,1) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: 1280, margin: '0 auto', width: '100%', position: 'relative' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '4rem', alignItems: 'end' }}>
            <div>
              {/* Eyebrow */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
                <div style={{ width: 32, height: 1, backgroundColor: '#14b8a6' }} />
                <span style={{
                  fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.2em',
                  color: '#14b8a6', textTransform: 'uppercase',
                }}>Graphic Designer @ Big Dutchman East Africa</span>
              </div>

              {/* Main heading */}
              <h1 style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 900,
                fontSize: 'clamp(52px, 9vw, 112px)',
                lineHeight: 0.92,
                letterSpacing: '-0.03em',
                color: '#f8fafc',
                margin: '0 0 1.5rem',
              }}>
                {DESIGNER_NAME.split(' ')[0]}{' '}
                <span style={{
                  fontStyle: 'italic',
                  background: 'linear-gradient(135deg, #2dd4bf, #14b8a6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>{DESIGNER_NAME.split(' ')[1]}</span>
                <br />
                <span style={{ fontSize: '0.55em', fontWeight: 400, color: '#475569', letterSpacing: '-0.01em' }}>{DESIGNER_TITLE}</span>
              </h1>

              <p style={{
                fontSize: 18, lineHeight: 1.7, color: '#94a3b8',
                maxWidth: 540, marginBottom: '2.5rem',
                fontWeight: 300,
              }}>
                10 years of turning bold ideas into iconic visual identities. Graphic Designer at Big Dutchman East Africa, CEO of Vivid Designs, and available for select side projects — I design brands that people remember.
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <button
                  onClick={() => scrollTo('work')}
                  style={{
                    background: 'linear-gradient(135deg, #14b8a6, #0d9488)',
                    border: 'none', borderRadius: 8,
                    color: '#fff', fontSize: 15, fontWeight: 600,
                    padding: '14px 32px', cursor: 'pointer',
                    fontFamily: 'var(--font-body)',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    boxShadow: '0 8px 32px rgba(20,184,166,0.25)',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-2px)'
                    e.currentTarget.style.boxShadow = '0 12px 40px rgba(20,184,166,0.35)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = '0 8px 32px rgba(20,184,166,0.25)'
                  }}
                >
                  View Selected Work
                </button>
                <button
                  onClick={() => scrollTo('about')}
                  style={{
                    background: 'transparent',
                    border: '1px solid rgba(20,184,166,0.3)', borderRadius: 8,
                    color: '#94a3b8', fontSize: 15, fontWeight: 500,
                    padding: '14px 32px', cursor: 'pointer',
                    fontFamily: 'var(--font-body)',
                    transition: 'border-color 0.2s, color 0.2s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'rgba(20,184,166,0.7)'
                    e.currentTarget.style.color = '#2dd4bf'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(20,184,166,0.3)'
                    e.currentTarget.style.color = '#94a3b8'
                  }}
                >
                  About the Studio
                </button>
              </div>
            </div>

            {/* Stat cluster */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', minWidth: 160 }} className="hidden-mobile">
              {[
                { num: '10+', label: 'Years Experience' },
                { num: '100+', label: 'Brands Created' },
                { num: '95%', label: 'Client Retention' },
              ].map(s => (
                <div key={s.label} style={{ textAlign: 'right' }}>
                  <div style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontSize: 44,
                    lineHeight: 1,
                    color: '#2dd4bf',
                    letterSpacing: '-0.03em',
                  }}>{s.num}</div>
                  <div style={{ fontSize: 11, color: '#64748b', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: 4, fontFamily: 'var(--font-mono)' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Scroll indicator */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: '4rem', opacity: 0.5 }}>
            <div style={{
              width: 24, height: 40, border: '1px solid rgba(20,184,166,0.4)',
              borderRadius: 12, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: '6px 0',
            }}>
              <div style={{ width: 2, height: 8, backgroundColor: '#14b8a6', borderRadius: 2, animation: 'scrollBob 2s ease-in-out infinite' }} />
            </div>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.15em', color: '#64748b', textTransform: 'uppercase' }}>Scroll to explore</span>
          </div>
        </div>
      </section>

      {/* STATS BAND */}
      <div style={{
        borderTop: '1px solid rgba(20,184,166,0.12)',
        borderBottom: '1px solid rgba(20,184,166,0.12)',
        background: 'rgba(15,34,34,0.6)',
        padding: '2rem',
        overflow: 'hidden',
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem', textAlign: 'center' }}>
          {[
            { num: '10', label: 'Years of Professional Experience' },
            { num: '8', label: 'Design Disciplines Mastered' },
            { num: '100+', label: 'Projects Delivered' },
            { num: '3', label: 'Continents Served' },
          ].map(s => (
            <div key={s.label}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 42, color: '#2dd4bf', letterSpacing: '-0.03em', lineHeight: 1 }}>{s.num}</div>
              <div style={{ fontSize: 12, color: '#64748b', marginTop: 6, fontWeight: 400, letterSpacing: '0.02em' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <section id="about" style={{ padding: '120px 2rem', maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }}>
          {/* Image */}
          <div style={{ position: 'relative' }}>
            <div style={{
              position: 'absolute', top: -20, left: -20, right: 20, bottom: 20,
              border: '1px solid rgba(20,184,166,0.2)', borderRadius: 16,
              pointerEvents: 'none',
            }} />
            <img
              src="/projects/dan.jpeg"
              alt="Daniel Kamau - Creative Designer & CEO of Vivid"
              style={{
                width: '100%', aspectRatio: '5/6', objectFit: 'cover',
                borderRadius: 12,
                filter: 'brightness(0.85) saturate(1.1)',
              }}
            />
            {/* Badge */}
            <div style={{
              position: 'absolute', bottom: -24, right: -24,
              background: 'linear-gradient(135deg, #14b8a6, #0d9488)',
              borderRadius: 12, padding: '1.25rem 1.5rem',
              boxShadow: '0 20px 60px rgba(20,184,166,0.3)',
            }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 32, color: '#fff', lineHeight: 1 }}>10</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: 'rgba(255,255,255,0.75)', letterSpacing: '0.15em', textTransform: 'uppercase', marginTop: 4 }}>Years in Design</div>
            </div>
          </div>

          {/* Text */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <div style={{ width: 32, height: 1, backgroundColor: '#14b8a6' }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.2em', color: '#14b8a6', textTransform: 'uppercase' }}>About Me</span>
            </div>

            <h2 style={{
              fontFamily: 'var(--font-display)', fontWeight: 800,
              fontSize: 'clamp(36px, 4vw, 52px)', lineHeight: 1.05,
              color: '#f1f5f9', letterSpacing: '-0.025em',
              marginBottom: '1.5rem',
            }}>
              10 years of design.<br />
              <span style={{ fontStyle: 'italic', color: '#2dd4bf' }}>Self-made.</span><br />
              Still creating.
            </h2>

            <p style={{ fontSize: 16, lineHeight: 1.8, color: '#94a3b8', marginBottom: '1.5rem', fontWeight: 300 }}>
              I am a graphic designer and creative entrepreneur with over 10 years of professional experience. I built Vivid Designs from a single vision — to turn creativity into timeless brand experiences — and have grown it into a studio that shapes brands, identities, and stories for clients across the globe.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: '#94a3b8', marginBottom: '2.5rem', fontWeight: 300 }}>
              As a Graphic Designer at Big Dutchman East Africa, I direct design decisions, mentor creative teams, and ensure brand excellence across every touchpoint. I believe great design does more than look beautiful. It tells stories, builds trust, and makes ideas live forever.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              {['Brand Strategy', 'Visual Identity', 'Art Direction', 'Remote Leadership'].map(tag => (
                <span key={tag} style={{
                  fontSize: 12, fontWeight: 500,
                  border: '1px solid rgba(20,184,166,0.3)',
                  borderRadius: 20, padding: '6px 14px',
                  color: '#2dd4bf', letterSpacing: '0.02em',
                }}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={{ padding: '80px 2rem 120px', background: 'rgba(11,25,25,0.6)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '4rem', flexWrap: 'wrap', gap: '2rem' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <div style={{ width: 32, height: 1, backgroundColor: '#14b8a6' }} />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.2em', color: '#14b8a6', textTransform: 'uppercase' }}>What We Do</span>
              </div>
              <h2 style={{
                fontFamily: 'var(--font-display)', fontWeight: 800,
                fontSize: 'clamp(36px, 4vw, 52px)', lineHeight: 1.05,
                color: '#f1f5f9', letterSpacing: '-0.025em', margin: 0,
              }}>
                Services designed<br />
                <span style={{ fontStyle: 'italic', color: '#2dd4bf' }}>to make you unforgettable.</span>
              </h2>
            </div>
            <p style={{ fontSize: 15, color: '#64748b', maxWidth: 320, lineHeight: 1.7 }}>
              Every deliverable is crafted with intention — from the first strategic conversation to the final pixel.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '1px', border: '1px solid rgba(20,184,166,0.1)', borderRadius: 16, overflow: 'hidden' }}>
            {SERVICES.map((svc, i) => (
              <ServiceCard key={svc.number} svc={svc} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* WORK */}
      <section id="work" style={{ padding: '120px 2rem' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ marginBottom: '3rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{ width: 32, height: 1, backgroundColor: '#14b8a6' }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.2em', color: '#14b8a6', textTransform: 'uppercase' }}>Selected Work</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
              <h2 style={{
                fontFamily: 'var(--font-display)', fontWeight: 800,
                fontSize: 'clamp(36px, 4vw, 52px)', lineHeight: 1.05,
                color: '#f1f5f9', letterSpacing: '-0.025em', margin: 0,
              }}>
                A decade of work.<br />
                <span style={{ fontStyle: 'italic', color: '#2dd4bf' }}>Every project, a story.</span>
              </h2>

              {/* Filter */}
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {FILTERS.map(f => (
                  <button
                    key={f}
                    onClick={() => setActiveFilter(f)}
                    style={{
                      background: activeFilter === f ? 'linear-gradient(135deg, #14b8a6, #0d9488)' : 'transparent',
                      border: activeFilter === f ? '1px solid transparent' : '1px solid rgba(20,184,166,0.25)',
                      borderRadius: 20, padding: '7px 16px',
                      color: activeFilter === f ? '#fff' : '#64748b',
                      fontSize: 12, fontWeight: 500,
                      cursor: 'pointer', fontFamily: 'var(--font-body)',
                      transition: 'all 0.2s',
                    }}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '1.5rem' }}>
            {filtered.map(project => (
              <ProjectCard
                key={project.id}
                project={project}
                hovered={hoveredProject === project.id}
                onHover={setHoveredProject}
                onSelect={(proj) => {
                  setSelectedProject(proj)
                  setPreviewIndex(filtered.findIndex(p => p.id === proj.id))
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* STUDIO — process */}
      <section id="process" style={{ padding: '80px 2rem 120px', background: 'rgba(11,25,25,0.6)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{ width: 32, height: 1, backgroundColor: '#14b8a6' }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.2em', color: '#14b8a6', textTransform: 'uppercase' }}>How We Work</span>
              <div style={{ width: 32, height: 1, backgroundColor: '#14b8a6' }} />
            </div>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontWeight: 800,
              fontSize: 'clamp(32px, 3.5vw, 48px)', lineHeight: 1.1,
              color: '#f1f5f9', letterSpacing: '-0.025em', margin: '0 0 1rem',
            }}>
              My Creative Process
            </h2>
            <p style={{ fontSize: 16, color: '#64748b', maxWidth: 500, margin: '0 auto', lineHeight: 1.7 }}>
              Every project I take on follows a proven process refined over 10 years — designed to surface what makes your brand singular.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem' }}>
            {[
              { step: '01', title: 'Discover', desc: 'We immerse ourselves in your world — goals, audience, competition, and the story only you can tell.' },
              { step: '02', title: 'Define', desc: 'A strategic creative brief that locks in direction before a single concept is explored.' },
              { step: '03', title: 'Design', desc: 'Multiple concepts developed with depth — not a quantity race but a quality exploration.' },
              { step: '04', title: 'Refine', desc: 'Collaborative iteration guided by creative instinct and your honest feedback.' },
              { step: '05', title: 'Deliver', desc: 'Production-ready files, brand guidelines, and an ongoing relationship — not a handoff.' },
            ].map((p, i) => (
              <div key={p.step} style={{
                background: 'rgba(15,34,34,0.7)',
                border: '1px solid rgba(20,184,166,0.1)',
                borderRadius: 12, padding: '2rem',
                position: 'relative', overflow: 'hidden',
              }}>
                <div style={{
                  fontFamily: 'var(--font-display)', fontWeight: 700,
                  fontSize: 56, lineHeight: 1, color: 'rgba(20,184,166,0.08)',
                  position: 'absolute', top: 12, right: 16, letterSpacing: '-0.04em',
                }}>{p.step}</div>
                <div style={{
                  fontFamily: 'var(--font-mono)', fontSize: 11,
                  color: '#14b8a6', letterSpacing: '0.15em',
                  textTransform: 'uppercase', marginBottom: '0.75rem',
                }}>{p.step}</div>
                <h3 style={{
                  fontFamily: 'var(--font-display)', fontWeight: 700,
                  fontSize: 22, color: '#f1f5f9', marginBottom: '0.75rem',
                  letterSpacing: '-0.01em',
                }}>{p.title}</h3>
                <p style={{ fontSize: 14, color: '#64748b', lineHeight: 1.7, margin: 0 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding: '120px 2rem' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{ width: 32, height: 1, backgroundColor: '#14b8a6' }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.2em', color: '#14b8a6', textTransform: 'uppercase' }}>Client Stories</span>
              <div style={{ width: 32, height: 1, backgroundColor: '#14b8a6' }} />
            </div>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontWeight: 800,
              fontSize: 'clamp(32px, 3.5vw, 48px)', lineHeight: 1.1,
              color: '#f1f5f9', letterSpacing: '-0.025em', margin: 0,
            }}>
              What clients say.
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {TESTIMONIALS.map((t, i) => (
              <div key={i} style={{
                background: 'rgba(15,34,34,0.7)',
                border: '1px solid rgba(20,184,166,0.12)',
                borderRadius: 16, padding: '2.5rem',
              }}>
                <div style={{ fontSize: 36, color: '#14b8a6', fontFamily: 'var(--font-display)', lineHeight: 1, marginBottom: '1rem' }}>&ldquo;</div>
                <p style={{ fontSize: 15, lineHeight: 1.8, color: '#94a3b8', marginBottom: '2rem', fontStyle: 'italic' }}>{t.quote}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: '50%',
                    background: 'linear-gradient(135deg, #14b8a6, #0d9488)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 12, fontWeight: 700, color: '#fff', fontFamily: 'var(--font-mono)',
                    flexShrink: 0,
                  }}>{t.avatar}</div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: '#f1f5f9' }}>{t.name}</div>
                    <div style={{ fontSize: 12, color: '#64748b', marginTop: 2 }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: '120px 2rem', background: 'rgba(11,25,25,0.6)' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <div style={{ width: 32, height: 1, backgroundColor: '#14b8a6' }} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.2em', color: '#14b8a6', textTransform: 'uppercase' }}>Get in Touch</span>
            <div style={{ width: 32, height: 1, backgroundColor: '#14b8a6' }} />
          </div>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontWeight: 800,
            fontSize: 'clamp(36px, 4vw, 52px)', lineHeight: 1.05,
            color: '#f1f5f9', letterSpacing: '-0.025em',
            marginBottom: '1.5rem',
          }}>
            Ready to create<br />
            <span style={{ fontStyle: 'italic', color: '#2dd4bf' }}>something remarkable?</span>
          </h2>
          <p style={{ fontSize: 16, color: '#64748b', lineHeight: 1.7, marginBottom: '2.5rem' }}>
            Reach out directly and let's discuss your project.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
            {[
              { label: 'Email', value: CONTACT_EMAIL },
              { label: 'Phone', value: '+254 700 183478' },
              { label: 'Based in', value: 'Nairobi, Kenya' },
            ].map(item => (
              <div key={item.label}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: '#14b8a6', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>{item.label}</div>
                <div style={{ fontSize: 16, color: '#e2e8f0', fontWeight: 500 }}>{item.value}</div>
              </div>
            ))}
          </div>

          <a
            href={`mailto:${CONTACT_EMAIL}`}
            style={{
              display: 'inline-block',
              background: 'linear-gradient(135deg, #14b8a6, #0d9488)',
              border: 'none', borderRadius: 8,
              color: '#fff', fontSize: 15, fontWeight: 600,
              padding: '14px 40px', cursor: 'pointer',
              fontFamily: 'var(--font-body)',
              transition: 'opacity 0.2s, transform 0.2s',
              textDecoration: 'none',
            }}
            onMouseEnter={e => {
              (e.target as HTMLElement).style.opacity = '0.9'
              ;(e.target as HTMLElement).style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={e => {
              (e.target as HTMLElement).style.opacity = '1'
              ;(e.target as HTMLElement).style.transform = 'translateY(0)'
            }}
          >
            Send Email
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        borderTop: '1px solid rgba(20,184,166,0.12)',
        padding: '3rem 2rem',
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{
              width: 32, height: 32, background: 'linear-gradient(135deg, #14b8a6, #0d9488)',
              borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13, color: '#fff',
            }}>DK</div>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 15, color: '#cbd5e1' }}>{DESIGNER_NAME}</span>
          </div>
          <p style={{ fontSize: 13, color: '#334155', fontFamily: 'var(--font-mono)' }}>
            © 2024 {DESIGNER_NAME}. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '2rem' }}>
            {[
              { label: 'Instagram', url: 'https://www.instagram.com/vividdesigns01' },
              { label: 'Twitter', url: 'https://x.com/DanteStomper' },
              { label: 'Facebook', url: 'https://www.facebook.com/share/19bLDEhtUB/' },
              { label: 'Email', url: 'mailto:kamaudante@gmail.com' },
            ].map(social => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  color: '#475569', fontSize: 13, fontFamily: 'var(--font-body)',
                  transition: 'color 0.2s', padding: 0, textDecoration: 'none',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#2dd4bf')}
                onMouseLeave={e => (e.currentTarget.style.color = '#475569')}
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </footer>

      {selectedProject && (
        <div
          style={{
            position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.95)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            zIndex: 1000, padding: '2rem',
          }}
          onClick={() => setSelectedProject(null)}
        >
          <button
            onClick={() => setSelectedProject(null)}
            style={{
              position: 'absolute', top: 20, right: 20, zIndex: 20,
              background: 'none', border: 'none',
              color: '#fff', fontSize: 32, cursor: 'pointer',
              width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >×</button>

          {filtered.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation()
                setPreviewIndex((previewIndex - 1 + filtered.length) % filtered.length)
              }}
              style={{
                position: 'absolute', left: 30, top: '50%', transform: 'translateY(-50%)',
                zIndex: 20, background: 'none', border: 'none',
                color: '#fff', cursor: 'pointer',
                width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'opacity 0.3s',
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.6')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 267 512.43" style={{ width: 30, height: 30, transform: 'scaleX(-1)' }}>
                <path fill="currentColor" fillRule="nonzero" d="M3.22 18.9c-4.28-4.3-4.3-11.31-.04-15.64s11.2-4.35 15.48-.04l245.12 245.16c4.28 4.3 4.3 11.31.04 15.64L18.66 509.22a10.874 10.874 0 0 1-15.48-.05c-4.26-4.33-4.24-11.33.04-15.63L240.5 256.22 3.22 18.9z"/>
              </svg>
            </button>
          )}

          <div
            style={{
              position: 'relative', maxHeight: '90vh', maxWidth: '90vw',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
            onClick={e => e.stopPropagation()}
          >
            <img
              src={filtered[previewIndex].img}
              alt={filtered[previewIndex].title}
              style={{ maxHeight: '90vh', maxWidth: '90vw', objectFit: 'contain' }}
            />
          </div>

          {filtered.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation()
                setPreviewIndex((previewIndex + 1) % filtered.length)
              }}
              style={{
                position: 'absolute', right: 30, top: '50%', transform: 'translateY(-50%)',
                zIndex: 20, background: 'none', border: 'none',
                color: '#fff', cursor: 'pointer',
                width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'opacity 0.3s',
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.6')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 267 512.43" style={{ width: 30, height: 30 }}>
                <path fill="currentColor" fillRule="nonzero" d="M3.22 18.9c-4.28-4.3-4.3-11.31-.04-15.64s11.2-4.35 15.48-.04l245.12 245.16c4.28 4.3 4.3 11.31.04 15.64L18.66 509.22a10.874 10.874 0 0 1-15.48-.05c-4.26-4.33-4.24-11.33.04-15.63L240.5 256.22 3.22 18.9z"/>
              </svg>
            </button>
          )}
        </div>
      )}

      <style>{`
        @keyframes scrollBob {
          0%, 100% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(6px); opacity: 0.4; }
        }
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </div>
  )
}

function ServiceCard({ svc, index }: { svc: typeof SERVICES[0]; index: number }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? 'rgba(20,184,166,0.06)' : 'rgba(6,14,14,0.8)',
        padding: '2.5rem',
        transition: 'background 0.3s',
        cursor: 'default',
        borderRight: (index % 3 !== 2) ? '1px solid rgba(20,184,166,0.1)' : 'none',
        borderBottom: index < 3 ? '1px solid rgba(20,184,166,0.1)' : 'none',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
        <span style={{
          fontFamily: 'var(--font-mono)', fontSize: 11, color: '#14b8a6',
          letterSpacing: '0.2em', textTransform: 'uppercase',
        }}>{svc.number}</span>
        <div style={{
          width: 32, height: 32, borderRadius: '50%',
          border: `1px solid ${hovered ? 'rgba(20,184,166,0.6)' : 'rgba(20,184,166,0.2)'}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'border-color 0.3s, transform 0.3s',
          transform: hovered ? 'rotate(45deg)' : 'rotate(0deg)',
        }}>
          <div style={{ width: 8, height: 1, backgroundColor: hovered ? '#2dd4bf' : '#475569', transition: 'background 0.3s' }} />
        </div>
      </div>
      <h3 style={{
        fontFamily: 'var(--font-display)', fontWeight: 700,
        fontSize: 24, color: '#f1f5f9', letterSpacing: '-0.01em',
        marginBottom: '0.75rem', lineHeight: 1.2,
      }}>{svc.title}</h3>
      <p style={{ fontSize: 14, color: '#64748b', lineHeight: 1.7, marginBottom: '1.5rem' }}>{svc.desc}</p>
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        {svc.tags.map(tag => (
          <span key={tag} style={{
            fontSize: 11, color: '#2dd4bf',
            border: '1px solid rgba(20,184,166,0.2)',
            borderRadius: 4, padding: '3px 8px',
            fontFamily: 'var(--font-mono)',
          }}>{tag}</span>
        ))}
      </div>
    </div>
  )
}

function ProjectCard({
  project,
  hovered,
  onHover,
  onSelect,
}: {
  project: typeof PROJECTS[0]
  hovered: boolean
  onHover: (id: number | null) => void
  onSelect: (project: typeof PROJECTS[0]) => void
}) {
  return (
    <div
      onMouseEnter={() => onHover(project.id)}
      onMouseLeave={() => onHover(null)}
      onClick={() => onSelect(project)}
      style={{
        borderRadius: 12, overflow: 'hidden',
        border: '1px solid rgba(20,184,166,0.12)',
        cursor: 'pointer',
        transition: 'transform 0.3s, box-shadow 0.3s',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: hovered ? `0 20px 60px rgba(20,184,166,0.15)` : '0 2px 20px rgba(0,0,0,0.3)',
        background: '#0f2222',
      }}
    >
      <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: '4/3' }}>
        <img
          src={project.img}
          alt={project.title}
          style={{
            width: '100%', height: '100%', objectFit: 'cover',
            transition: 'transform 0.5s, filter 0.3s',
            transform: hovered ? 'scale(1.05)' : 'scale(1)',
            filter: hovered ? 'brightness(0.7) saturate(1.2)' : 'brightness(0.6) saturate(1.1)',
          }}
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: `linear-gradient(to top, rgba(6,14,14,0.9) 0%, transparent 60%)`,
        }} />
        <div style={{
          position: 'absolute', top: 16, right: 16,
          fontFamily: 'var(--font-mono)', fontSize: 10,
          color: 'rgba(255,255,255,0.5)', letterSpacing: '0.1em',
          background: 'rgba(6,14,14,0.6)', padding: '4px 10px', borderRadius: 4,
        }}>{project.year}</div>
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1.5rem',
          transform: hovered ? 'translateY(0)' : 'translateY(8px)',
          transition: 'transform 0.3s, opacity 0.3s',
          opacity: hovered ? 1 : 0.8,
        }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: project.accent, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 6 }}>{project.category}</div>
          <h3 style={{
            fontFamily: 'var(--font-display)', fontWeight: 700,
            fontSize: 22, color: '#f8fafc', letterSpacing: '-0.01em',
            margin: 0, lineHeight: 1.2,
          }}>{project.title}</h3>
        </div>
      </div>
    </div>
  )
}

