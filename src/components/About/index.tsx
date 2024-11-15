import style from './style.module.css';
import photo from './../../assets/images/hero/me.png';
import star2 from './../../assets/icons/star2.svg';
import tel from './../../assets/icons/telegram.svg';
import vk from './../../assets/icons/vk.svg';
import link from './../../assets/icons/linkedin.svg';

const About = () => {
    return(
        <section className={style.about}>
            <div className={style.block_one}>
                <div className={style.name}>
                    <h2>About</h2>
                    <h3>I am Dima</h3>
                </div>
                <div className={style.button_block}>
                    <button className={style.button_more}>Know More</button>
                </div>
            </div>
            <div className={style.block_two}>
                <div className={style.image}>
                    <img src={photo} alt="me" />
                </div>
                <div className={style.block_info}>
                    <div className={style.introduction}>
                        <p className={style.title}><img src={star2} alt="" />Introduction</p>
                        <p className={style.info}>Мой путь в разработке начался с желания создавать удобные и красивые интерфейсы для разных устройств. Я изучал основы HTML, CSS и JavaScript, а также разные инструменты и методы разработки. Сегодня я могу создавать небольшие проекты и совершенствовать свои навыки. В будущем я хочу стать профессиональным frontend-разработчиком.</p>
                    </div>
                    <div className={style.contact}>
                        <p className={style.title}><img src={star2} alt="" />Contact Information</p>
                        <div className={style.mail}>
                            <p>Email</p>
                            <a href="mailto:krestovcode@gmail.com">krestovcode@gmail.com</a>
                        </div>
                        <div className={style.phone}>
                            <p>Phone Number</p>
                            <a href="tel:+79992601574">+7 (999) 260-15-74</a>
                        </div>
                        <div className={style.block_links}>
                            <a href="#"><img src={tel} alt="" /></a>
                            <a href="#"><img src={vk} alt="" /></a>
                            <a href="#"><img src={link} alt="" /></a>
                        </div>
                        <div className={style.button_block}>
                            <button className={style.button_works}>Let's work</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;