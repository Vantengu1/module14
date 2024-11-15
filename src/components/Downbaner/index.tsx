import style from './style.module.css';
import star from './../../assets/icons/star.svg'

const Downbaner = () => {
    return(
        <section>
            <div className={style.banerBlock}>
            <p className={style.nameBaner}>Dmitriy</p>
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
        </section>
    );
};

export default Downbaner;