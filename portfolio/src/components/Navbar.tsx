import React from 'react';
import styles from './cssModules/Navbar.module.scss';
import {FaGithubSquare, FaLinkedin} from "react-icons/fa";
import { HiOutlineDocumentDownload } from "react-icons/hi";

export const Navbar: React.FC = () => {
    return (
        <div className={styles.navbarContainer}>
            <div className={styles.navbarSections}>
                <a href="#presentation" className={styles.title}>Présentation</a>
                <a href="#formations" className={styles.title}>Formations</a>
                <a href="#experiences" className={styles.title}>Expériences</a>
                <a href="#realisations" className={styles.title}>Réalisations</a>
                <a href="#metriques" className={styles.title}>Métriques</a>
                <a href="#projets" className={styles.title}>Projets</a>
                <a href="#contact" className={styles.title}>Contact</a>
            </div>
            <div className={styles.navbarNetworks}>
                <a href="https://www.linkedin.com/in/ton-profil" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={42} color="#FFFFFF" className={styles.networkIcon}/>
                </a>
                <a href="https://www.linkedin.com/in/ton-profil" target="_blank" rel="noopener noreferrer">
                    <FaGithubSquare size={42} color="#FFFFFF" className={styles.networkIcon}/>
                </a>
                <a href="https://www.linkedin.com/in/ton-profil" target="_blank" rel="noopener noreferrer">
                    <HiOutlineDocumentDownload size={42} color="#FFFFFF" className={styles.networkIcon}/>
                </a>
            </div>
        </div>
    );
};