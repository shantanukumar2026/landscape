import { useEffect, useState } from 'react';
import './index.css';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header style={{ 
        boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.5)' : 'none'
      }}>
        <div className="top-bar" style={{ 
          background: scrolled ? 'var(--bg-dark)' : 'var(--primary-dark)',
          transition: 'background 0.3s ease'
        }}>
          <a href="#" className="logo-container" style={{ display: 'flex', alignItems: 'center' }}>
            <img src="/images/logo.png" alt="Eber Jimenez Landscape Logo" style={{ height: '80px', width: 'auto', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.2)' }} />
          </a>
          
          <div className="top-links">
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
              History
            </button>
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
              Our Values
            </button>
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
              Locations
            </button>
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect x="2" y="4" width="20" height="16" rx="2"></rect></svg>
              Contact
            </button>
          </div>
        </div>
        
        <div className="bottom-bar" style={{
          display: scrolled ? 'none' : 'flex',
          transform: scrolled ? 'translateY(-100%)' : 'translateY(0)',
          transition: 'all 0.3s ease',
          opacity: scrolled ? 0 : 1
        }}>
          <nav className="bottom-nav">
            <button>Products <div className="nav-underline"></div></button>
            <button>Capabilities <div className="nav-underline"></div></button>
            <button>Industries <div className="nav-underline"></div></button>
            <button>Quality <div className="nav-underline"></div></button>
            <button>Company <div className="nav-underline"></div></button>
          </nav>
          
          <div className="search-box">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--primary-dark)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)'}}><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
            <input type="text" placeholder="Search resources..." />
          </div>
        </div>
      </header>

      <section className="hero-section">
        <div className="hero-left">
          <div className="hero-content">
            <h1 className="hero-title">
              DESIGNING <span>TOMORROW'S</span> LANDSCAPES
            </h1>
            <p className="hero-sub">
              We merge architectural precision with ecological intelligence to create sustainable, breathtaking environments that endure for generations.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="btn-primary">
                View Projects <span>→</span>
              </a>
              <a href="#consultation" className="btn-secondary">
                Request Consultation
              </a>
            </div>
          </div>
        </div>
        
        <div className="hero-right">
          <div className="hero-bg"></div>
          
          <div className="floating-stats">
            <div className="stat-item">
              <span className="stat-value">25+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">150</span>
              <span className="stat-label">Awards Won</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">5k+</span>
              <span className="stat-label">Acres Designed</span>
            </div>
          </div>
        </div>
        
        {/* Extreme Edge UI kept on the right side overlay */}
        <div className="extreme-edge">
          <div className="extreme-edge-text">Connect with us</div>
          <div className="extreme-edge-icons">
            <div className="icon-wrapper">
              <a href="#chat" className="side-btn-filled">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
              </a>
            </div>
            <div className="icon-wrapper">
              <a href="#call" className="side-btn-filled">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="capabilities" className="glass-section">
        <div style={{ textAlign: 'center', marginBottom: '80px', padding: '0 20px' }}>
          <h2 className="font-display" style={{ fontSize: '3rem', fontWeight: 900, textTransform: 'uppercase', marginBottom: '16px' }}>
            The <span style={{ color: 'var(--primary-light)' }}>Standard</span> of Trust
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto', fontSize: '1.2rem' }}>
            Engineered for absolute reliability. Designed to redefine environmental standards.
          </p>
        </div>
        
        <div className="glass-grid">
          <div className="glass-card">
            <div className="glass-card-accent"></div>
            <div className="glass-icon-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
            </div>
            <h3>WHO WE ARE</h3>
            <p>Industry leaders in advanced landscape architecture, forged on a foundation of precision and environmental stewardship.</p>
          </div>

          <div className="glass-card">
            <div className="glass-card-accent"></div>
            <div className="glass-icon-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
            </div>
            <h3>WHAT WE DO</h3>
            <p>We engineer cutting-edge outdoor infrastructure. Implementing sustainable systems for complex urban and natural environments.</p>
          </div>

          <div className="glass-card">
            <div className="glass-card-accent"></div>
            <div className="glass-icon-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
            </div>
            <h3>WHY TRUST US</h3>
            <p>Decades of rigorous design. Our solutions don't just meet aesthetic standards—they define ecological responsibility.</p>
          </div>
        </div>
      </section>

      <section className="portfolio-section">
        <div className="portfolio-grid">
          <div className="portfolio-content">
            <div className="badge" style={{ marginBottom: '24px' }}>
              <span className="badge-text">THROUGH ENGINEERING</span>
            </div>
            <h2 className="font-display" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 900, marginBottom: '24px', textTransform: 'uppercase', fontStyle: 'italic' }}>
              DEDICATED TO SAVING OUR ENVIRONMENTS
            </h2>
            <div style={{ width: '80px', height: '4px', background: 'var(--primary-light)', marginBottom: '32px' }}></div>
            <p style={{ color: 'var(--text-muted)', fontSize: '16px', lineHeight: 1.8, marginBottom: '32px' }}>
              Landscape was founded with a single unwavering mission: to develop landscaping management products that actively reduce environmental harm while creating stunning spaces.
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary-light)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span style={{ fontWeight: 700, textTransform: 'uppercase', fontSize: '14px' }}>Actively reduces environmental footprint</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary-light)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span style={{ fontWeight: 700, textTransform: 'uppercase', fontSize: '14px' }}>Industrial-grade botanical management</span>
              </li>
            </ul>
          </div>
          <div className="portfolio-media">
            <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Sustainable Landscape" />
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#" className="footer-logo" style={{ display: 'inline-block', marginBottom: '16px' }}>
              <img src="/images/logo.png" alt="Eber Jimenez Landscape Logo" style={{ height: '100px', width: 'auto', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.3)' }} />
            </a>
            <p className="footer-desc">
              Precision-engineered landscaping management infrastructure dedicated to creating sustainable, beautiful, and enduring outdoor environments.
            </p>
            <div style={{ marginTop: '16px', color: 'var(--text-muted)' }}>
              <p>132 Lockwood</p>
              <p>Huntington, NY 11763</p>
              <p style={{ marginTop: '8px' }}>+1 (631) 327-2544</p>
              <p>631-827-7408</p>
            </div>
          </div>
          
          <div>
            <h4 className="footer-title">Navigation</h4>
            <ul className="footer-links">
              <li><a href="#capabilities">Capabilities</a></li>
              <li><a href="#products">Products & Services</a></li>
              <li><a href="#industries">Industries</a></li>
              <li><a href="#quality">Quality & Compliance</a></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-title">Company</h4>
            <ul className="footer-links">
              <li><a href="#about">About Us</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#news">News & Media</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-title">Connect</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '16px', lineHeight: 1.6 }}>
              Subscribe to our newsletter for the latest in sustainable environmental engineering.
            </p>
            <div style={{ display: 'flex', gap: '8px' }}>
              <input type="email" placeholder="Email address" style={{ 
                padding: '10px 16px', 
                background: 'rgba(255,255,255,0.05)', 
                border: '1px solid rgba(255,255,255,0.1)',
                color: 'white',
                borderRadius: '4px',
                flex: 1,
                outline: 'none'
              }} />
              <button style={{ 
                background: 'var(--primary)', 
                color: 'white', 
                border: 'none', 
                padding: '0 16px', 
                borderRadius: '4px',
                cursor: 'pointer',
                fontWeight: 700
              }}>Join</button>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div>&copy; {new Date().getFullYear()} Eber Jimenez Landscape. All rights reserved.</div>
          <div style={{ display: 'flex', gap: '24px' }}>
            <a href="#" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Privacy Policy</a>
            <a href="#" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Terms of Service</a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
