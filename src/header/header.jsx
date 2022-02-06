import react from 'react';
import './header.css'
import UndefinedUserAvatar from './UndefinedUserAvatar.jpg';
import notActiveBell from './notActiveBell.jpg';
import Logo from '../logo/logo';
import Burger from '../burger/burger';




export default function Header() {

    return (
        <header className='header-box'>
            <Logo color="#4448DA"/>
            <div className='nav-box'>
                <nav className='nav'>
                    <ul className='nav-list'> 
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
                <button className='header-button'>Выйти</button>
                <div className='not-active-bell'>
                    <img src={notActiveBell} className='not-active-bell__min' alt='Bell'/>
                </div>
                <div className='user-avatar-box'>
                    <img src={UndefinedUserAvatar} className='user-avatar' alt='UserAvatar'/> 
                </div>
            </div>
            <Burger /> 
        </header>
    )
}