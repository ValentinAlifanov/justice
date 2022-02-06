import react from 'react';
import './footer.css'
import Logo from '../logo/logo'


export default function Footer() {
    return (
        <footer className='footer'>
            <div className='footer-up-box'>
                <div className='footer__logo-box'>
                    <Logo color="#FFFFFF"/>
                </div>
                <div className='footer-nav-box'>
                    <nav className='footer-nav'>
                        <ul className='footer-nav-list'> 
                            <li>
                                <a href=''>Главная</a>
                            </li>
                            <li>
                                <a href=''>Список</a>
                            </li>
                            <li>
                                <a href=''>Друзья</a>
                            </li>
                            <li>
                                <a href=''>Контакты</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <hr className='footer-hr'></hr>
            <div className='footer-down-box'>
                <span className='footer-all-rights-reserved'>© 2021 Justice-team. All rights reserved.</span>
                <div className='footer-link1-box'>
                    <a className='footer-link' href=''>Terms & conditions</a>
                </div>
                <div>
                    <a className='footer-link' href=''>Privacy Policy</a>
                </div>
            </div>
        </footer>
    )
}