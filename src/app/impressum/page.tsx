//styles
import styles from './styles.module.scss'
import global from '@/styles/global.module.scss'

const Impressum = () => {
    return (
        <section className={`${global.sectionContainer} ${styles.container}`}>
            <h1 className={`${styles.title} ${global.infoPageTitle}`}>Impressum</h1>
            <article className={styles.content}>
                <article>
                    <p className={styles.text}>Angaben gemäß § 5 TMG:</p>
                    <p className={styles.text}>Aberle Solutions GmbH</p>
                    <p className={styles.text}>Stuttgarterstraße 66 in</p>
                    <p className={styles.text}>74321 Bietigheim-Bissingen</p>
                </article>
                <article>
                    <p className={styles.text}>Vertreten durch:</p>
                    <p className={styles.text}>Herr Tim Aberle</p>
                </article>
                <article>
                    <p className={styles.text}>Kontakt:</p>
                    <p className={styles.text}>Telefon: +49 15758518193</p>
                    <p className={styles.text}>E-Mail: Tim.Aberle@aberlesolutions.de</p>
                </article>
                <article>
                    <p className={styles.lightText}>Registereintrag:</p>
                    <p className={styles.lightText}>Registergericht: NOCH OFFEN</p>
                    <p className={styles.lightText}>Registernummer: NOCH OFFEN</p>
                    <p className={styles.lightText}>Umsatzsteuer-ID: NOCH OFFEN</p>
                    <p className={styles.lightText}>Umsatzsteuer-Identifikationsnummer gemäß §27a</p>
                    <p className={styles.lightText}>Umsatzsteuergesetz: DE NOCH OFFEN</p>
                    <p className={styles.lightText}>Wirtschaftsidentifikationsnummer: NOCH OFFEN</p>
                    <p className={styles.lightText}>Wirtschaftsidentifikationsnummer gemäß § 139c Abgabenordnung: DE NOCH OFFEN</p>
                </article>
                <article>
                    <p className={styles.lightText}>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</p>
                    <p className={styles.lightText}>Tim Aberle, Stuttgarterstraße 66 in 74321 Bietigheim-Bissingen</p>
                </article>
            </article>
        </section>
    );
};

export default Impressum;
