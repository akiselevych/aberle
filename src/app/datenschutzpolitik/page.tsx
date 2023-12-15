//styles
import styles from './styles.module.scss'
import global from '@/styles/global.module.scss'

const Impressum = () => {
    return (
        <section className={`${global.sectionContainer} ${styles.container}`}>
            <h1 className={`${styles.title} ${global.infoPageTitle}`}>Datenschutzpolitik</h1>
            <article className={styles.content}>
                <article className={styles.subBlock}>
                    <h4 className={styles.subTitle}>Datenschutzerklärung</h4>
                    <p className={styles.text}>Diese Datenschutzerklärung erläutert, wie [Ihr Name/Firmenname] personenbezogene Daten sammelt, verwendet und schützt. Ihre Privatsphäre ist uns wichtig, und wir ergreifen angemessene Maßnahmen, um sicherzustellen, dass Ihre Informationen geschützt werden.</p>
                </article>
                <article className={styles.subBlock}>
                    <h4 className={styles.subTitle}>Welche Informationen sammeln wir?</h4>
                    <p className={styles.text}>Wir können personenbezogene Daten, wie Ihren Namen, Ihre E-Mail-Adresse und Telefonnummer, sammeln, wenn Sie uns kontaktieren oder Formulare auf unserer Website ausfüllen.</p>
                </article>
                <article className={styles.subBlock}>
                    <h4 className={styles.subTitle}>Wie verwenden wir Ihre Informationen?</h4>
                    <p className={styles.text}>Wir verwenden Ihre Daten, um Ihre Anfragen zu beantworten und Ihnen die gewünschten Dienstleistungen anzubieten. Wir nutzen sie auch, um unsere Dienstleistungen zu verbessern und unsere Website zu schützen.</p>
                </article>
                <article className={styles.subBlock}>
                    <h4 className={styles.subTitle}>Teilen wir Ihre Informationen?</h4>
                    <p className={styles.text}>Wir teilen Ihre persönlichen Daten nicht ohne Ihre ausdrückliche Zustimmung an Dritte, es sei denn, dies ist gesetzlich vorgeschrieben.</p>
                </article>
                <article className={styles.subBlock}>
                    <h4 className={styles.subTitle}>Datensicherheit</h4>
                    <p className={styles.text}>Wir schützen Ihre Daten vor unbefugtem Zugriff und Missbrauch durch angemessene Sicherheitsmaßnahmen.</p>
                </article>
                <article className={styles.subBlock}>
                    <h4 className={styles.subTitle}>Änderungen an dieser Datenschutzerklärung</h4>
                    <p className={styles.text}>Diese Datenschutzerklärung kann gelegentlich aktualisiert werden. Bitte überprüfen Sie sie regelmäßig auf Aktualisierungen.</p>
                </article>
                <article className={styles.subBlock}>
                    <h4 className={styles.subTitle}>Kontakt</h4>
                    <span className={styles.text}>Wenn Sie Fragen zur Datenschutzerklärung haben, kontaktieren Sie uns bitte unter.</span>
                    <p className={styles.text}>Diese kurze Datenschutzerklärung bietet einen allgemeinen Überblick über die Datensammlung und -verwendung auf Ihrer Website und sollte in der Regel ausreichen. Sie können weitere Details hinzufügen, wenn Ihre Website spezifische Datensammel- oder Verarbeitungspraktiken aufweist, die erläutert werden müssen. Bitte stellen Sie sicher, dass Ihre Datenschutzerklärung den geltenden Datenschutzbestimmungen entspricht.</p>
                </article>
            </article>
        </section>
    );
};

export default Impressum;
