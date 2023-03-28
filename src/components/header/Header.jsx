import React from 'react';
import module from './Header.module.scss'
import Logo from '../../assets/logo.svg';
import Loop from '../../assets/loop.svg'
import Filter from '../../assets/filter.svg'
import Call from '../../assets/call.svg'
import bovettiimg from '../../assets/bovetti4.png'
import { useState } from 'react';


function Header(props) {

    const links = [
        {
            link: '/',
            name: 'Bovetti'
        },
        {
            link: '/catalog',
            name: 'Leonidas'
        },
        {
            link: '#',
            name: 'Lindt'
        },
        {
            link: '#',
            name: 'Michel Cluizel'
        },
        {
            link: '#',
            name: 'Toblerone'
        }
    ]

    const [isOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <header className={module.header}>
            <div className={module.top}>
                <div className={module.logo}><a href="#"><img src={Logo} /> </a></div>
                <div className={module.search}>
                    <button className={module.filter}><img src={Filter} alt="" /></button>
                    <input type="text" placeholder='Поиск' />
                    <button className={module.loop}><img src={Loop} alt="" /></button>
                </div>
                <div className={module.buttons}>
                    <button className={module.contact}><img src={Call} alt="" /><h1>Контакты: <br /> +996 123 456</h1></button>
                    <button className={module.heart}></button>
                    <button className={module.profile}></button>
                    <button onClick={openModal} className={module.bag}>
                        <h1>Корзина</h1>
                        <div></div>
                        <h2>2</h2>
                    </button>
                    {isOpen && (
                        <div className={module.modal}>
                            <div className={module.modal_content}>
                                <span className="close" onClick={closeModal}>
                                    &times;
                                </span>
                                <h1>Корзина</h1>
                                <section>
                                    <img/>

                                </section>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className={module.bottom}>
                <ul>
                    {links.map((url, index) => {
                        return (
                            <li><a href={url.link}>{url.name}</a></li>
                        )
                    })}
                </ul>
            </div>
        </header>
    );
}

export default Header;