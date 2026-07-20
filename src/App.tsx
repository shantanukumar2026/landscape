import { useEffect, useState } from 'react';
import './index.css';
import Logo from './components/Logo';
import { translations } from './translations';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState<'en' | 'es'>('en');

  const t = translations[lang];

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
            <Logo 
              className="app-logo header-logo" 
              style={{ height: '100%', alignItems: 'center' }}
            />
          </a>

          <div className="top-links">
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
              {t.history}
            </button>
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
              {t.ourValues}
            </button>
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
              {t.locations}
            </button>
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect x="2" y="4" width="20" height="16" rx="2"></rect></svg>
              {t.contact}
            </button>
            <select 
              value={lang}
              onChange={(e) => setLang(e.target.value as 'en' | 'es')}
              style={{ 
                background: 'transparent', 
                color: 'white', 
                border: 'none', 
                cursor: 'pointer',
                fontFamily: 'inherit',
                fontWeight: 800,
                fontSize: '13px',
                outline: 'none',
                marginLeft: '8px'
              }}
            >
              <option value="en" style={{ color: '#000' }}>EN</option>
              <option value="es" style={{ color: '#000' }}>ES</option>
            </select>
          </div>
        </div>

        <div className="bottom-bar" style={{
          display: scrolled ? 'none' : 'flex',
          transform: scrolled ? 'translateY(-100%)' : 'translateY(0)',
          transition: 'all 0.3s ease',
          opacity: scrolled ? 0 : 1
        }}>
          <nav className="bottom-nav">
            <button>{t.products} <div className="nav-underline"></div></button>
            <button>{t.capabilities} <div className="nav-underline"></div></button>
            <button>{t.industries} <div className="nav-underline"></div></button>
            <button>{t.quality} <div className="nav-underline"></div></button>
            <button>{t.company} <div className="nav-underline"></div></button>
          </nav>

          <div className="search-box">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--primary-dark)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)' }}><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
            <input type="text" placeholder={t.searchPlaceholder} />
          </div>
        </div>
      </header>

      <section className="hero-section">
        <div className="hero-left">
          <div className="hero-content">
            <h1 className="hero-title">
              {t.heroTitlePart1} <span>{t.heroTitlePart2}</span> {t.heroTitlePart3}
            </h1>
            <p className="hero-sub">
              {t.heroSub}
            </p>
            <div className="hero-actions">
              <a href="#projects" className="btn-primary">
                {t.viewProjects} <span>→</span>
              </a>
              <a href="#consultation" className="btn-secondary">
                {t.requestConsultation}
              </a>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <img src="/images/landscape_hero_1784337352722.png" className="hero-bg" alt="Landscape Architecture" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />

          <div className="floating-stats">
            <div className="stat-item">
              <span className="stat-value">25+</span>
              <span className="stat-label">{t.yearsExperience}</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">150</span>
              <span className="stat-label">{t.awardsWon}</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">5k+</span>
              <span className="stat-label">{t.acresDesigned}</span>
            </div>
          </div>
        </div>

        {/* Extreme Edge UI kept on the right side overlay */}
        <div className="extreme-edge">
          <div className="extreme-edge-text">{t.connectWithUs}</div>
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

      <section id="services" className="services-section">
        <div style={{ textAlign: 'center', marginBottom: '80px', padding: '0 20px' }}>
          <h2 className="font-display" style={{ fontSize: '3rem', fontWeight: 900, textTransform: 'uppercase', marginBottom: '16px' }}>
            {t.servicesTitle}
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto', fontSize: '1.2rem' }}>
            {t.servicesSub}
          </p>
        </div>

        <div className="services-grid">
          {[
            { title: t.service1, img: "/images/irrigation_system_1784337278740.png" },
            { title: t.service2, img: "/images/landscape_construction_1784337289376.png" },
            { title: t.service3, img: "/images/landscape_maintenance_1784337299801.png" },
            { title: t.service4, img: "/images/landscape_lighting_1784337310679.png" },
            { title: t.service5, img: "/images/pressure_washing_1784337329375.png" },
            { title: t.service6, img: "/images/drainage_solutions_1784337340038.png" },
          ].map((service, i) => (
            <div key={i} className="service-card" style={{ display: 'block', padding: 0, overflow: 'hidden', position: 'relative', height: '280px', borderRadius: '16px', border: 'none' }}>
              <img src={service.img} alt={service.title} style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '40px 20px 20px', background: 'linear-gradient(transparent, rgba(0,0,0,0.9))' }}>
                <h3 style={{ margin: 0, fontSize: '1.2rem', color: 'white' }}>{service.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="capabilities" className="glass-section">
        <div style={{ textAlign: 'center', marginBottom: '80px', padding: '0 20px' }}>
          <h2 className="font-display" style={{ fontSize: '3rem', fontWeight: 900, textTransform: 'uppercase', marginBottom: '16px' }}>
            {t.capabilitiesTitlePart1} <span style={{ color: 'var(--primary-light)' }}>{t.capabilitiesTitlePart2}</span> {t.capabilitiesTitlePart3}
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto', fontSize: '1.2rem' }}>
            {t.capabilitiesSub}
          </p>
        </div>

        <div className="glass-grid">
          <div className="glass-card">
            <div className="glass-card-accent"></div>
            <div className="glass-icon-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
            </div>
            <h3>{t.whoWeAre}</h3>
            <p>{t.whoWeAreDesc}</p>
          </div>

          <div className="glass-card">
            <div className="glass-card-accent"></div>
            <div className="glass-icon-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
            </div>
            <h3>{t.whatWeDo}</h3>
            <p>{t.whatWeDoDesc}</p>
          </div>

          <div className="glass-card">
            <div className="glass-card-accent"></div>
            <div className="glass-icon-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
            </div>
            <h3>{t.whyTrustUs}</h3>
            <p>{t.whyTrustUsDesc}</p>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#" className="footer-logo" style={{ display: 'inline-block', marginBottom: '16px' }}>
              <Logo className="app-logo footer-logo-img" />
            </a>
            <p className="footer-desc">
              {t.footerDesc}
            </p>
            <div style={{ marginTop: '16px', color: 'var(--text-muted)' }}>
              <p>132 Lockwood</p>
              <p>Huntington, NY 11763</p>
              <p style={{ marginTop: '8px' }}>+1 (631) 327-2544</p>
              <p>631-827-7408</p>
            </div>
          </div>

          <div>
            <h4 className="footer-title">{t.navigation}</h4>
            <ul className="footer-links">
              <li><a href="#capabilities">{t.capabilities}</a></li>
              <li><a href="#services">{t.productsAndServices}</a></li>
              <li><a href="#industries">{t.industries}</a></li>
              <li><a href="#quality">{t.qualityAndCompliance}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-title">{t.company}</h4>
            <ul className="footer-links">
              <li><a href="#about">{t.aboutUs}</a></li>
              <li><a href="#careers">{t.careers}</a></li>
              <li><a href="#news">{t.newsAndMedia}</a></li>
              <li><a href="#contact">{t.contact}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-title">{t.subscribe}</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '16px', lineHeight: 1.6 }}>
              {t.subscribeText}
            </p>
            <div style={{ display: 'flex', gap: '8px' }}>
              <input type="email" placeholder={t.emailPlaceholder} style={{
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
              }}>{t.join}</button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div>&copy; {new Date().getFullYear()} Eber Jimenez Landscape. {t.rightsReserved}</div>
          <div style={{ display: 'flex', gap: '24px' }}>
            <a href="#" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>{t.privacyPolicy}</a>
            <a href="#" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>{t.termsOfService}</a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
