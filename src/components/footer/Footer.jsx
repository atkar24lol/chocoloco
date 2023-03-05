import React from 'react';
import module from './Footer.module.scss';

function Footer(props) {
    return (
        <footer className={module.footer}>
            <div className={module.container}>
                <div className={module.company}>
                    <ul>
                        <li className={module.firstOfLi}>
                            <a>Компания</a>
                        </li>
                        <li>
                            <a href="#">О компании</a>
                        </li>
                        <li>
                            <a href="#">Новости</a>
                        </li>
                        <li>
                            <a href="#">Магазины</a>
                        </li>
                    </ul>
                </div>
                <div className={module.info}>
                    <ul>
                        <li className={module.firstOfLi}>
                            <a>Информация</a>
                        </li>
                        <li>
                            <a href="#">Условия оплаты</a>
                        </li>
                        <li>
                            <a href="#">Условия доставки</a>
                        </li>
                        <li>
                            <a href="#">Гарантия на товар</a>
                        </li>
                    </ul>
                </div>
                <div className={module.catalog}>
                    <ul>
                        <li className={module.firstOfLi}>
                            <a>Каталог</a>
                        </li>
                        <li>
                            <a href="#">Toblerone</a>
                        </li>
                        <li>
                            <a href="#">Bovetti</a>
                        </li>
                        <li>
                            <a href="#">Leonidas</a>
                        </li>
                        <li>
                            <a href="#">Lindt</a>
                        </li>
                        <li>
                            <a href="#">Mishel</a>
                        </li>
                    </ul>
                </div>
                <div className={module.contacts}>
                    <ul>
                        <li className={module.firstOfLi}>
                            <a>Наши контакты</a>
                        </li>
                        <li>
                            <a href="#">+996 (700)(170)(804)</a>
                        </li>
                        <li>
                            <a href="#">chocoloco@gmail.com</a>
                        </li>
                        <li>
                            <a href="#">Кыргызстан, Бишкек </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;