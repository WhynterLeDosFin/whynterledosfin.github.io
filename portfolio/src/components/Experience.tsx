import React, { useState } from 'react';
import { MdExpandMore, MdExpandLess } from 'react-icons/md';
import { experiences, type ExperienceData } from '../assets/data/experiences';
import styles from './cssModules/Experience.module.scss';

const ExperienceItem: React.FC<{ data: ExperienceData }> = ({ data }) => {
    const [isFunctionalOpen, setIsFunctionalOpen] = useState(false);
    const [isTechnicalOpen, setIsTechnicalOpen] = useState(false);

    return (
        <div className={styles.experienceItem}>
            <div className={styles.header}>
                <div className={styles.titleWrapper}>
                    <h3 className={styles.title}>{data.title}</h3>
                    <span className={styles.company}> — {data.company}</span>
                </div>
                <span className={styles.period}>{data.period}</span>
            </div>
            <p className={styles.description}>{data.description}</p>

            <div className={styles.extensions}>
                <div className={styles.extension}>
                    <button
                        className={styles.toggleButton}
                        onClick={() => setIsFunctionalOpen(!isFunctionalOpen)}
                    >
                        <span>Compétences fonctionnelles</span>
                        {isFunctionalOpen ? <MdExpandLess size={24} /> : <MdExpandMore size={24} />}
                    </button>
                    <div className={`${styles.skillsList} ${isFunctionalOpen ? styles.open : ''}`}>
                        {data.functionalSkills.map((skill, i) => (
                            <span key={i} className={styles.skillTag}>{skill}</span>
                        ))}
                    </div>
                </div>

                <div className={styles.extension}>
                    <button
                        className={styles.toggleButton}
                        onClick={() => setIsTechnicalOpen(!isTechnicalOpen)}
                    >
                        <span>Compétences techniques</span>
                        {isTechnicalOpen ? <MdExpandLess size={24} /> : <MdExpandMore size={24} />}
                    </button>
                    <div className={`${styles.skillsList} ${isTechnicalOpen ? styles.open : ''}`}>
                        {data.technicalSkills.map((skill, i) => (
                            skill.url ? (
                                <a
                                    key={i}
                                    href={skill.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`${styles.skillTag} ${styles.link}`}
                                >
                                    {skill.name}
                                </a>
                            ) : (
                                <span key={i} className={styles.skillTag}>{skill.name}</span>
                            )
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const Experience: React.FC = () => {
    return (
        <div id="experiences" className={styles.experienceContainer}>
            {experiences.map((exp, index) => (
                <ExperienceItem key={index} data={exp} />
            ))}
        </div>
    );
};

export default Experience;