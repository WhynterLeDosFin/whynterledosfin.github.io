import React, { useState } from 'react';
import styles from './cssModules/Capacity.module.scss';
import { capacities, Capacity } from '../assets/data/capacities';
import { MdExpandMore, MdExpandLess } from 'react-icons/md';

const CapacityCard: React.FC<{ capacity: Capacity }> = ({ capacity }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const maxInitialSkills = 4;
    const hasMore = capacity.skills.length > maxInitialSkills;
    const displayedSkills = isExpanded ? capacity.skills : capacity.skills.slice(0, maxInitialSkills);

    return (
        <div className={`${styles.capacityCard} ${isExpanded ? styles.isExpanded : ''}`}>
            <h3>{capacity.title}</h3>
            <ul className={styles.skillsList}>
                {displayedSkills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
            {hasMore && (
                <button
                    className={styles.expandButton}
                    onClick={() => setIsExpanded(!isExpanded)}
                >
                    {isExpanded ? (
                        <>
                            Voir moins <MdExpandLess size={24} />
                        </>
                    ) : (
                        <>
                            Voir plus <MdExpandMore size={24} />
                        </>
                    )}
                </button>
            )}
        </div>
    );
};

const Capacities: React.FC = () => {
    return (
        <div className={styles.capacitiesContainer}>
            {capacities.map((capacity, index) => (
                <CapacityCard key={index} capacity={capacity} />
            ))}
        </div>
    );
};

export default Capacities;
