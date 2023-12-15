//libs
import Image from "next/image";
//styles
import styles from './styles.module.scss'
import global from '@/styles/global.module.scss'
//images
import hero from '../../../public/assets/images/heroUberUns.webp'

const AboutUsHero = () => {
    return (
        <section className={styles.container}>
            <h1 className={`${global.h1_small} ${styles.title}`}>Über uns</h1>
            <p className={styles.text}>Unser Team ist stolz darauf, gemeinsam mit allen unseren kompetenten Partnern die Werte und Ziele, die unser Unternehmen auszeichnen, bestmöglich umzusetzen. Wir setzen auf eine vertrauensvolle Zusammenarbeit.
            </p>
            <h6 className={styles.subTitle}>Warum uns auswählen?</h6>
            <p className={styles.text}>Wir zeichnen uns durch ganzheitliche und individuelle Finanzlösungen aus, die auf die einzigartigen Bedürfnisse jedes Kunden zugeschnitten sind.Es ist, als würden Sie bei einem Schneider einen Maßanzug herstellen lassen. Vom Nehmen des Maßes über die Stoffauswahl, bis hin zur Fertigstellung, nur für Ihre Finanzen.</p>
            <Image src={hero} alt={"Über uns"} className={styles.image}/>
        </section>
    );
};

export default AboutUsHero;
