import style from './style.module.css'
import techStack from '../../data/techStack.json'
import { Technology } from '../../types'

const Servis = () => {
    return(
        <section className={style.servis}>
            <div className={style.block_one}>
                <div className={style.name}>
                    <h2>Skills</h2>
                    <h3>Skills & Experience</h3>
                </div>
            </div>
            <div className={style.block_two}>
                    <p className={style.subtitle}>
                        Проблема - это шанс для вас сделать все, что в ваших силах.
                    </p>
                    <p className={style.block_text}>
                        Основная область специализации - front end разработка (клиентская часть веб-сайта).
                        HTML, CSS, JS, создание небольших и средних веб-приложений с использованием Vue или React, пользовательских плагинов, функций, анимации и создание интерактивных макетов.
                    </p>
                </div>
                <div className={style.block_skills}>
                    {techStack.technologies.map((tech: Technology) => (
                        <div key={tech.id} className={style.tech}>
                            <img src={`${tech.icon}`} alt="#" />
                            <span>{tech.name}</span>
                        </div>
                    ))}
                </div>
        </section>
    )
}

export default Servis;