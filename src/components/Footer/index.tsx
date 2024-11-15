import style from './style.module.css';
import arrowLink from '../../../src/assets/icons/Icon.svg';
import tel from './../../assets/icons/telegram.svg';
import link from './../../assets/icons/linkedin.svg';
import vk from './../../assets/icons/vk.svg';

const Footer = () => {
    return(
        <section className={style.footer}>
            <div className={style.flex}>
                <div className={style.blockDoing}>
                    <div className={style.doing}>
                        <p>LET'S <a className={style.buttom_link} href="#">
                                    <img src={arrowLink} alt="" />
                                </a>
                        WORK TOGETHER
                        </p>
                    </div>
                </div>
                <div className={style.blockLinks}>
                    <div className={style.block_links}>
                        <a href="#"><img src={tel} alt="" />Telegram</a>
                        <a href="#"><img src={vk} alt="" />Vkontakte</a>
                        <a href="#"><img src={link} alt="" />Linkedin</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;