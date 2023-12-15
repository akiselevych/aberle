//libs
import Image from "next/image";
//styles
import styles from './styles.module.scss'
import global from '@/styles/global.module.scss'
//images
import image from '../../../public/assets/images/consult.webp'
import ClientBtn from "@/components/Consultation/ClientBtn/ClientBtn";

const Consultation = () => {
    return (
        <section className={styles.wrapper}>
            <div className={styles.container}>
                <Image src={image} alt={"Konsultation über DIN 77230"} className={styles.image}/>
                <div className={styles.content}>
                    <h2 className={`${global.h1_small} ${styles.title}`}>Konsultation über DIN 77230</h2>
                    <p className={styles.desc}>DIN 77230 Basis-Finanzanalyse für Privathaushalte ist die erste deutsche Norm für die Finanzdienstleistung. Sie beschreibt einen objektiven, reproduzierbaren und transparenten Analyseprozess, der eine ganzheitliche Betrachtung der finanziellen Situation von Privathaushalten ermöglicht.</p>
                </div>
                <h4 className={styles.subTitle}>Vorteile:</h4>
                <ul className={styles.list}>
                    <li className={styles.item}>eine bestmögliche Absicherung gegen Lebensrisiken auf Basis der privaten Finanzen.</li>
                    <li className={styles.item}>eine vorausschauende Gestaltung der finanziellen Zukunft durch entsprechende Vermögensplanung und.</li>
                    <li className={styles.item}>eine Orientierung an Bedürfnissen und Zielvorstellungen des Privathaushalts.</li>
                </ul>
                <ClientBtn/>
            </div>
        </section>
    );
};

export default Consultation;
