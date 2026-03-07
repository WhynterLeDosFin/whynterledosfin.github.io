import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./cssModules/Modal.module.scss";

interface ModalProps {
    isOpen: boolean;
    tech: {
        id: string;
        name: string;
        logo: string;
        opportunities: {
            id: string;
            name: string;
            date?: string;
            contractType?: string;
            projects: { id: string; title: string; description: string }[];
        }[];
    } | null;
    selectedOpportunity: string | null;
    onSelectOpportunity: (id: string) => void;
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({
                                         isOpen,
                                         tech,
                                         selectedOpportunity,
                                         onSelectOpportunity,
                                         onClose
                                     }) => {
    const [expandedProjectId, setExpandedProjectId] = useState<string | null>(null);
    const opportunity = tech?.opportunities.find((o) => o.id === selectedOpportunity);

    useEffect(() => {
        setExpandedProjectId(null);
    }, [selectedOpportunity]);

    return (
        <AnimatePresence>
            {isOpen && tech && (
                <motion.div
                    className={styles.overlay}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    <motion.div
                        layout
                        className={styles.modal}
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        transition={{
                            layout: { type: "spring", damping: 25, stiffness: 300 },
                            default: { type: "spring", damping: 25, stiffness: 300 }
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className={styles.scrollArea}>
                            <img src={tech.logo} alt={tech.name} className={styles.logo} />
                            <h1 className="text-3xl font-bold mb-4">{tech.name}</h1>

                            <div className={styles.opportunites}>
                                <h3>Expériences & Projets</h3>
                                <div className={styles.logos}>
                                    {tech.opportunities.length ? (
                                        tech.opportunities.map((opp) => (
                                            <motion.div
                                                key={opp.id}
                                                className={`${styles.fakeLogo} ${selectedOpportunity === opp.id ? styles.selected : ""}`}
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                onClick={() => onSelectOpportunity(opp.id)}
                                            >
                                                {opp.name}
                                            </motion.div>
                                        ))
                                    ) : (
                                        <p className={styles.noData}>Aucune expérience répertoriée pour cette technologie.</p>
                                    )}
                                </div>
                            </div>

                            <AnimatePresence mode="wait">
                                {opportunity && (
                                    <motion.div
                                        key={opportunity.id}
                                        className={styles.projects}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        {(opportunity.date || opportunity.contractType) && (
                                            <div className={styles.opportunityMeta}>
                                                {opportunity.date && <p><strong>Période:</strong> {opportunity.date}</p>}
                                                {opportunity.contractType && <p><strong>Contrat:</strong> {opportunity.contractType}</p>}
                                            </div>
                                        )}
                                        {opportunity.projects.map((p) => {
                                            const isExpanded = expandedProjectId === p.id;
                                            return (
                                                <div
                                                    key={p.id}
                                                    className={`${styles.projectCard} ${isExpanded ? styles.expanded : ""}`}
                                                    onClick={() => setExpandedProjectId(isExpanded ? null : p.id)}
                                                >
                                                    <div className={styles.projectHeader}>
                                                        <strong>{p.title}</strong>
                                                        <motion.span
                                                            className={styles.arrow}
                                                            animate={{ rotate: isExpanded ? 180 : 0 }}
                                                            transition={{ duration: 0.3 }}
                                                        >
                                                            <svg
                                                                width="18"
                                                                height="18"
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                strokeWidth="2"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            >
                                                                <path d="m6 9 6 6 6-6"/>
                                                            </svg>
                                                        </motion.span>
                                                    </div>
                                                    <AnimatePresence initial={false}>
                                                        {isExpanded && (
                                                            <motion.div
                                                                initial={{ height: 0, opacity: 0 }}
                                                                animate={{ height: "auto", opacity: 1 }}
                                                                exit={{ height: 0, opacity: 0 }}
                                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                                                className={styles.projectDescription}
                                                            >
                                                                <p>{p.description}</p>
                                                            </motion.div>
                                                        )}
                                                    </AnimatePresence>
                                                </div>
                                            );
                                        })}
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <button className={styles.closeBtn} onClick={onClose}>
                                Fermer
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Modal;