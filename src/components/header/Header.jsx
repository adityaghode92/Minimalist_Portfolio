import React, { useState, useEffect } from 'react';
import './header.css';

const Header = () => {
  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState('#home');
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('dark-mode') === 'true';
    setIsDarkMode(savedMode);
    if (savedMode) {
      document.body.classList.add('dark-mode');
      document.querySelector('.header').classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
      document.querySelector('.header').classList.remove('dark-mode');
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.body.classList.add('dark-mode');
      document.querySelector('.header').classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
      document.querySelector('.header').classList.remove('dark-mode');
    }
    localStorage.setItem('dark-mode', !isDarkMode);
  };

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.header');
      if (window.scrollY >= 80) header.classList.add('scroll-header');
      else header.classList.remove('scroll-header');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isDarkMode ? 'dark-mode' : ''}`}>
      <nav className="nav container">
        <a href="index.html" className="nav__logo">Portfolio</a>
        <div className={Toggle ? 'nav__menu show-menu' : 'nav__menu'}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                onClick={() => setActiveNav('#home')}
                className={activeNav === '#home' ? 'nav__link active-link' : 'nav__link'}
              >
                Home
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#about"
                onClick={() => setActiveNav('#about')}
                className={activeNav === '#about' ? 'nav__link active-link' : 'nav__link'}
              >
                About
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#skills"
                onClick={() => setActiveNav('#skills')}
                className={activeNav === '#skills' ? 'nav__link active-link' : 'nav__link'}
              >
                Skills
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#qualification"
                onClick={() => setActiveNav('#qualification')}
                className={activeNav === '#qualification' ? 'nav__link active-link' : 'nav__link'}
              >
                Qualification
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#portfolio"
                onClick={() => setActiveNav('#portfolio')}
                className={activeNav === '#portfolio' ? 'nav__link active-link' : 'nav__link'}
              >
                Projects
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#contact"
                onClick={() => setActiveNav('#contact')}
                className={activeNav === '#contact' ? 'nav__link active-link' : 'nav__link'}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="nav__right">
          <button onClick={toggleDarkMode} className="dark-mode-toggle">
            {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          </button>
          <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
            {/* Add your menu icon here */}
            {Toggle ? (
              <i className="nav__icon fas fa-times"></i>
            ) : (
              <i className="nav__icon fas fa-bars"></i>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
