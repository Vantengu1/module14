import { Project } from '../../types';
import projectsData from '../../data/project.json';
import style from './style.module.css';

const Portfolio = () => {
    return(
        <section className={style.portfolio}>
            <div className={style.block_one}>
                <div className={style.name}>
                    <h2>Portfolio</h2>
                    <h3>Portfolio & Previous Projects</h3>
                </div>
                <div className={style.button_block}>
                    <button className={style.button_more}>See Projects</button>
                </div>
            </div>
            <div className={style.block_two}>
                <div className={style.text}>
                    <p>
                    Я создаю различные проекты, соответствующие различным аспектам бизнеса клиента. Если вы хотите увидеть больше примеров моей работы, чем те, что представлены на этом сайте, пожалуйста, свяжитесь со мной!
                    </p>
                </div>
            </div>
            <div className={style.grid}>
                {projectsData.projects.map((project: Project) => (
                    <div key={project.id} className={style.card}>
                        <div className={style.imageContainer}>
                            <img src={project.image} alt={project.title} />
                        </div>
                        <div className={style.content}>
                            <h4>{project.title}</h4>
                            <p>{project.description}</p>
                            <div className={style.techStack}>
                                {project.techStack.map((tech, index) => (
                                    <span key={index}>{tech}</span>
                                ))}
                            </div>
                            <div className={style.links}>
                                <a href={project.livePreviewUrl} target='_blank' rel='#'>Live Preview</a>
                                <a href={project.codeUrl} target='_blank' rel='#'>Code Preview</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Portfolio;