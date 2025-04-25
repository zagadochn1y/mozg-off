import { useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import logo from '../images/mind-logo.png'
import globusIcon from '../images/globus-icon.png'
import '../styles/App.css'

export default function HeaderSection() {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
          const element = document.querySelector(location.hash);
          if (element) {
            setTimeout(() => {
              element.scrollIntoView({ behavior: "smooth" });
            }, 5);
          }
        }
      }, [location]);

    return (
        <header className='header'>
          <div className='header-title'>
            <Link to="/">
              <img src={logo} alt="logotype" className='logo'/>
            </Link>

            <div className='title-container'>
              <p className='title first'>Мозг</p>
              <p className='title second'>OFF</p>
            </div>
          </div>

          <nav className='nav' id = 'main'>
              <ul>
                <li className='nav-item'>
                  <Link to='/#main'>Главная</Link>
                </li>

                <li className='nav-item'>
                  <Link to="/games">Игры</Link>
                </li>

                <li className='nav-item'>
                  <Link to="/chatbot" className="nav-link">ИИ-помощник</Link>
                </li>

                <li className='nav-item'>
                    <Link to='/#blog'>Блог</Link>
                </li>

                <li className='nav-item'>
                    <Link to='/#about-us'>О нас</Link>
                </li>
              </ul>  

            <div className='nav-buttons'>
              <button className='language-button'>
                <img src={globusIcon} alt="globus-icon" className='globus-icon'/>
              </button>
            </div>
          </nav>
        </header>
    );
}