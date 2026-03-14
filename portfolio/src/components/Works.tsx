import React, { useState } from "react";
import Carrousel from "./Carrousel";
import Modal from "./Modal";
import styles from "./cssModules/Works.module.scss";
import { technologies, type Technology } from "../assets/data/technologies";

const Works: React.FC = () => {
    const [selectedTech, setSelectedTech] = useState<Technology | null>(null);
    const [selectedOpportunity, setSelectedOpportunity] = useState<string | null>(null);

    return (
        <div id="works" className={styles.works}>
            <Carrousel items={technologies} onSelect={setSelectedTech} />
            <Modal
                isOpen={!!selectedTech}
                tech={selectedTech}
                selectedOpportunity={selectedOpportunity}
                onSelectOpportunity={setSelectedOpportunity}
                onClose={() => {
                    setSelectedTech(null);
                    setSelectedOpportunity(null);
                }}
            />
        </div>
    );
};

export default Works;
