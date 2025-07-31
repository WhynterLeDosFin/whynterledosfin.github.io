import styles from './cssModules/Typewriter.module.scss';
import React, { useEffect, useState } from "react";

interface TypewriterProps {
    texts: string[];
    period?: number; // en ms
}

export const Typewriter: React.FC<TypewriterProps> = ({ texts, period = 2000 }) => {
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    useEffect(() => {
        const handleTyping = () => {
            const i = loopNum % texts.length;
            const fullText = texts[i];

            setText((prevText) =>
                isDeleting ? fullText.substring(0, prevText.length - 1) : fullText.substring(0, prevText.length + 1)
            );

            setTypingSpeed(isDeleting ? 75 : 150);

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), period);
            } else if (isDeleting && text === "") {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting]);

    return (
        <span className={styles.typewriter}>
          <span className={styles.wrap}>{text}</span>
        </span>
    );
};
