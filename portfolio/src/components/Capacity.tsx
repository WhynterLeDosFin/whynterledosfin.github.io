import React, { useState } from 'react';
import styles from './cssModules/Capacity.module.scss';
import { capacities, Capacity } from '../assets/data/capacities';
import { MdExpandMore, MdExpandLess } from 'react-icons/md';
import { motion, AnimatePresence } from 'framer-motion';

const CapacityCard: React.FC<{ capacity: Capacity }> = ({ capacity }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const maxInitialSkills = 4;
    const hasMore = capacity.skills.length > maxInitialSkills;
    const initialSkills = capacity.skills.slice(0, maxInitialSkills);
    const extraSkills = capacity.skills.slice(maxInitialSkills);

    return (
        <motion.div
            layout
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className={`${styles.capacityCard} ${isExpanded ? styles.isExpanded : ''}`}
        >
            <motion.h3 layout="position">{capacity.title}</motion.h3>
            <ul className={styles.skillsList}>
                {initialSkills.map((skill, index) => (
                    <motion.li
                        layout="position"
                        key={`initial-${index}`}
                    >
                        {skill}
                    </motion.li>
                ))}
                <AnimatePresence initial={false}>
                    {isExpanded && extraSkills.map((skill, index) => (
                        <motion.li
                            key={`extra-${index}`}
                            initial={{ opacity: 0, height: 0, marginTop: 0 }}
                            animate={{ opacity: 1, height: 'auto', marginTop: '0.75rem' }}
                            exit={{ opacity: 0, height: 0, marginTop: 0 }}
                            transition={{ duration: 0.3 }}
                            style={{ overflow: 'hidden' }}
                        >
                            {skill}
                        </motion.li>
                    ))}
                </AnimatePresence>
            </ul>
            {hasMore && (
                <motion.button
                    layout="position"
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
                </motion.button>
            )}
        </motion.div>
    );
};

const Capacities: React.FC = () => {
    return (
        <motion.div layout className={styles.capacitiesContainer}>
            {capacities.map((capacity, index) => (
                <CapacityCard key={index} capacity={capacity} />
            ))}
        </motion.div>
    );
};

export default Capacities;
