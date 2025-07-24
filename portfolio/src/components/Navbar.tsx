import React from 'react';
import styles from './cssModules/Navbar.module.scss';
import {FaGithubSquare, FaLinkedin} from "react-icons/fa";
import { HiOutlineDocumentDownload } from "react-icons/hi";

export const Navbar: React.FC = () => {
    return (
        <div className={styles.navbarContainer}>
            <div className={styles.navbarSections}>
                <h1 className={styles.title}>{"Présentation"}</h1>
                <h1 className={styles.title}>{"Expériences"}</h1>
                <h1 className={styles.title}>{"Formations"}</h1>
                <h1 className={styles.title}>{"Réalisations"}</h1>
                <h1 className={styles.title}>{"Métriques"}</h1>
                <h1 className={styles.title}>{"Projets"}</h1>
                <h1 className={styles.title}>{"Contact"}</h1>
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