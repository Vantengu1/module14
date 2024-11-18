//import { useState } from "react";
import style from "./style.module.css"
// import SwitchTheme from "../SwitchTheme";

// function HomePage() {
//   return <h2>Главная страница</h2>;
// }

// function AboutPage() {
//   return <h2>О нас</h2>;
// }

// function ContactPage() {
//   return <h2>Контакты</h2>;
// }

const Header = () => {

    // const [currentPage, setCurrentPage] = useState('home');

    // const renderPage = () => {
    //     switch (currentPage) {
    //       case 'home':
    //         return <HomePage />;
    //       case 'about':
    //         return <AboutPage />;
    //       case 'contact':
    //         return <ContactPage />;
    //       default:
    //         return <HomePage />;
    //     }
    //   };

    return(
        <header className={style.header}>
            <div className={style.logo}>
                <span>{'{Vantengu/}'}</span>
            </div>
            <nav className={style.nav}>
                <a onClick={() => setCurrentPage('home')}>Home</a>
                <a onClick={() => setCurrentPage('about')}>About Me</a>
                <a onClick={() => setCurrentPage('technology')}>Technologes</a>
                <a onClick={() => setCurrentPage('project')}>Projects</a>
                {/* <SwitchTheme /> */}
            </nav>
            <nav className={style.menu__burger}>
                <button className={style.burger}></button>
                <div className={style.menu__mobile}>
                    <a onClick={() => setCurrentPage('home')}>Home</a>
                    <a onClick={() => setCurrentPage('about')}>About Me</a>
                    <a onClick={() => setCurrentPage('technology')}>Technologes</a>
                    <a onClick={() => setCurrentPage('project')}>Projects</a>
                    {/* <SwitchTheme /> */}
                </div>
            </nav>
            <div className={style.socialsBlock}>
                <button className={style.socials}>Contact Me</button>
            </div>
            {/* Отображение текущей страницы
            <div>{renderPage()}</div> */}
        </header>
    );
};

export default Header;