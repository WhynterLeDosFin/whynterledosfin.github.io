import React, { useEffect, useState } from 'react';
import styles from './cssModules/Navbar.module.scss';
import { FaGithubSquare, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import { HiOutlineDocumentDownload } from "react-icons/hi";

export const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={`${styles.navbarContainer} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={styles.navbarSections}>
                <a href="#presentation">Présentation</a>
                <a href="#formations">Formations</a>
                <a href="#CePortfolio">Portfolio</a>
                <a href="#experiences">Expériences</a>
                <a href="#realisations">Réalisations</a>
                <a href="#metriques">Métriques</a>
                <a href="#projets">Projets</a>
                <a href="#contact">Contact</a>
            </div>

            <div className={styles.burger} onClick={toggleMenu}>
                {isOpen ? <FaTimes size={28} color="#fff" /> : <FaBars size={28} color="#fff" />}
            </div>

            <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
                <a href="#presentation" onClick={closeMenu}>Présentation</a>
                <a href="#formations" onClick={closeMenu}>Formations</a>
                <a href="#experiences" onClick={closeMenu}>Expériences</a>
                <a href="#realisations" onClick={closeMenu}>Réalisations</a>
                <a href="#metriques" onClick={closeMenu}>Métriques</a>
                <a href="#projets" onClick={closeMenu}>Projets</a>
                <a href="#contact" onClick={closeMenu}>Contact</a>
            </div>

            {isOpen && <div className={styles.overlay} onClick={closeMenu}></div>}

            <div className={styles.navbarNetworks}>
                <a href="https://www.linkedin.com/in/ton-profil" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={28} color="#FFFFFF" />
                </a>
                <a href="https://github.com/ton-profil" target="_blank" rel="noopener noreferrer">
                    <FaGithubSquare size={28} color="#FFFFFF" />
                </a>
                <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
                    <HiOutlineDocumentDownload size={28} color="#FFFFFF" />
                </a>
            </div>
        </div>
    );
};
