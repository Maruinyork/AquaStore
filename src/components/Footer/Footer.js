import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo2.png'
import AppStore from '../../assets/app.jpg'
import GooglePlay from '../../assets/play.jpg'
import Pay from '../../assets/pay.png'
import '../Footer/Footer.css'

const Footer = () => {
  return (
    <div>
      <footer className="text-white bg-black py-3">
        <div className="container">
          <nav className="row">
            <Link to="/" className=" column col-12 col-md-3">
              <img src={Logo} alt="" height="35" width="100" />
            </Link>
            <ul className=" column col-12 col-md-3 list-unstyled">
              <li className="fw-bold">E-commerce</li>
              <li>Proyecto realizado para la catedra de React de Coderhouse</li>
            </ul>
            <ul className="column col-12 col-md-3 list-unstyled">
              <li className="fw-bold mb-2">Enlaces</li>
              <li>
                <Link to="/category/natacion" className="textFooter">
                  Natación
                </Link>
              </li>
              <li>
                <Link to="/category/surf" className="textFooter">
                  Surf
                </Link>
              </li>
              <li>
                <Link to="/category/buceo" className="textFooter">
                  Buceo
                </Link>
              </li>
            </ul>
            <ul className="column col-12 col-md-3 list-unstyled">
              <li className="fw-bold">Siguenos</li>
              <li className="d-flex">
                <a href="https://www.facebook.com/">
                  <i className="textFooter bi bi-facebook" />
                </a>
                <a href="https://www.instagram.com/">
                  <i className="textFooter bi bi-instagram" />
                </a>
                <a href="https://www.twitter.com/">
                  <i className=" textFooter bi bi-twitter" />
                </a>
              </li>
              <div className="install">
                <h5> Instalar App</h5>
                <p>Desde App Store o Google Play</p>
                <img src={AppStore} alt="" />
                <img src={GooglePlay} alt="" />
                <h5>Medios de pago seguros</h5>
                <img src={Pay} alt=""  className='pay'/>
              </div>
            </ul>

            <div>
              <p className="text-center">
                <i className="bi bi-c-circle">
                  {' '}
                  2022 | Developed by Maruinyork 
                </i>
              </p>
            </div>
          </nav>
        </div>
      </footer>
    </div>
  )
}

export default Footer
