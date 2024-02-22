import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
        <div id="root"></div>
        <section id="overlay"></section>
        <header className="container">
          <div className="wrapper">
            <nav className="navbar">
              <div className="navbar__logo">
                <img src="./img/logo.jpg" alt="logo" />
                <p>KALAMULLAH TRANSPORTATION COMPANY</p>
              </div>
              <ul className="navbar__links">
                <li className="navbar__link"><a href="#banner">Overview</a></li>
                <li className="navbar__link"><a href="#contagion">Services</a></li>
                <li className="navbar__link"><a href="#symptoms">Community</a></li>
                <li className="navbar__link"><a href="#todo">Why Choose KTC?</a></li>
                <a href="#contact"><button className="navbar__btn">Contact</button></a>
              </ul>
              <div className="navbar__ham">
                <div className="navbar__icon"></div>
              </div>
            </nav>
          </div>
        </header>
        <section id="banner">
          <div className="container">
            <div className="banner__img">
              <img src="./img/banner1.jpg" alt="ceo of ktc" />
            </div>
            <div className="banner__desc">
              <h4 className="banner__tag">CEO of KTC</h4>
              <h1 className="banner__title">Dr. Kalahmullah Salihu Aliyu</h1>
              <p className="banner__detail">
                The Visionary behind the Revolution of the transportation sector in Nigeria. A leader with a vision on a mission of REVOLUTION to REBRAND, EXPAND and build a GRAND future for NIGERIA.
              </p>
              <div className="banner__btn">
                <a href="#contact"><button>let us help</button></a>
              </div>
            </div>
          </div>
        </section>
        <section id="whatis">
          <div className="container">
            <div className="whatis__img">
              <img src="./img/whatis.jpg" alt="virus illustration" />
            </div>
            <div className="whatis__desc">
              <h4 className="section__tag">what is K.T.C</h4>
              <h3 className="section__title">KALAMULLAH TRANSPORTATION COMPANY</h3>
              <p className="section__detail">
                Our commitment to excellence at KTC is unparalleled, we don't just move goods from point A to B; we create lasting connections and deliver beyond expectations.
              </p>
              <div className="whatis__btn">
                <a href="#symptoms"><button>learn more</button></a>
              </div>
            </div>
          </div>
        </section>
        {/* Other sections go here */}
        <footer className="pt">
          <div className="container">
            <div className="wrapper">
              <div className="navbar__logo">
                <img src="img/logo.jpg" alt="logo" />
                <p>KALAMULLAH TRANSPORTATION COMPANY</p>
              </div>
              <ul className="footer__links">
                <li className="footer__link"><a href="#banner">overview</a></li>
                <li className="footer__link"><a href="#contagion">Services</a></li>
                <li className="footer__link"><a href="#symptoms">Community</a></li>
                <li className="footer__link"><a href="#todo">Why Choose KTC?</a></li>
              </ul>
              <div className="footer__socials">
                {/* Social icons */}
              </div>
            </div>
          </div>
          <div className="footer__bottom">
            <p>2024 &copy; All rights reserved by KTC</p>
          </div>
        </footer>
        {/*<script src="/src/main.js"></script>*/}
      </div>
  );
}

export default App;
