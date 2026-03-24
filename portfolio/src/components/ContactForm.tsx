import React, { useState } from 'react';
import styles from './cssModules/ContactForm.module.scss';

const ContactForm: React.FC = () => {
    const [status, setStatus] = useState<string>("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const data = new FormData(form);

        try {
            const response = await fetch("https://formspree.io/f/mkoqdwra", {
                method: "POST",
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setStatus("SUCCESS");
                form.reset();
            } else {
                setStatus("ERROR");
            }
        } catch (error) {
            setStatus("ERROR");
        }
    };

    return (
        <div className={styles.contactContainer} id="contact">
            <div className={styles.formSection}>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.row}>
                        <input
                            type="email"
                            name="email"
                            placeholder="Renseignez votre adresse mail"
                            required
                            className={styles.input}
                        />
                        <input
                            type="text"
                            name="name"
                            placeholder="Renseignez votre nom/prénom"
                            required
                            className={styles.input}
                        />
                    </div>
                    <div className={styles.row}>
                        <input
                            type="text"
                            name="address"
                            placeholder="Renseignez l'objet/sujet"
                            className={styles.input}
                        />
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Renseignez votre téléphone"
                            className={styles.input}
                        />
                    </div>
                    <textarea
                        name="message"
                        placeholder="Saisissez votre message ! :D"
                        required
                        className={styles.textarea}
                    ></textarea>

                    <button type="submit" className={styles.submitBtn}>
                        Envoyer
                    </button>

                    {status === "SUCCESS" && <p className={styles.successMsg}>Message bien envoyé !</p>}
                    {status === "ERROR" && <p className={styles.errorMsg}>Il y a eu une erreur avec cet envoi, oupsi :/</p>}
                </form>
            </div>

            <div className={styles.textSection}>
                <div className={styles.description}>
                    <p>
                        Aujourd'hui je suis ouvert à une nouvelle opportunité et suis en
                        recherche active de celle-ci ! Si mon profil a retenu votre attention,
                        qu'il vous a intrigué ou que vous avez simplement des questions/recommandations,
                    </p>
                </div>
                <h2 className={styles.title}>Contactez-moi</h2>
                <div className={styles.description}>
                    <p>
                        Je me fais toujours un plaisir de rencontrer de nouvelles personnes, voir de nouveaux
                        horizons ou simplement d'échanger à propos de vos projets !
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
