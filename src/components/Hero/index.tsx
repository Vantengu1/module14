import style from './style.module.css'
import abstract from './../../../public/abstract.png'
import arrowLink from '../../../src/assets/icons/Icon.svg'
import star from './../../assets/icons/star.svg'
import arrow_down from './../../assets/icons/arrow-down .svg'
import hub from './../../assets/icons/github.svg'

const Hero = () => {
    return(
        <section>
            <div className={style.baner__top}>
                <div className={style.name}>
                    <p>Code by</p>
                    <p>Dmitriy Yaryshev</p>
                </div>
                <div className={style.picture}>
                    <img src={abstract} alt="" />
                </div>
                <div className={style.doing}>
                    <p>LET'S <a className={style.buttom_link} href="#">
                                <img src={arrowLink} alt="" />
                            </a>
                       WORK TOGETHER
                    </p>
                </div>
            </div>
            <div className={style.baner__middle}>
                <ul className={style.direction_list}>
                    <li><img src={star} alt="" /><p>Website development</p></li>
                    <li><img src={star} alt="" /><p>Design integration </p></li>
                    <li><img src={star} alt="" /><p>Adaptive layout</p></li>
                    <li><img src={star} alt="" /><p>Working with the API</p></li>
                    <li><img src={star} alt="" /><p>Ensuring cross-browser compatibility</p></li>
                    <li><img src={star} alt="" /><p>Performance optimization</p></li>
                </ul>
            </div>
            <div className={style.baner__bottom}>
                <div className={style.speciale}>
                    <p>Front-End Software Developer</p>
                    <p>Разрабатываю многофункциональные веб-приложения и удобные веб-интерфейсы.Решаю задачи, связанные с дизайном, обеспечиваю полезные взаимодействия между пользователями и веб-приложениями.</p>
                    <a href="#">About me <img src={arrow_down} alt="#" /></a>
                </div>
                <div className={style.baner_art}>
                    <span>{'> '}</span>
                    <span></span>
                </div>
            </div>
            <div className={style.linkGitHub}>
                <a href='https://github.com/Vantengu1' target="_blank" ><img src={hub} alt="hub" /></a>
            </div>
        </section>
    )
}

export default Hero;