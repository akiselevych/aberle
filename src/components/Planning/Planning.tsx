//libs
import Image from "next/image";
//styles
import styles from './styles.module.scss'
import global from '@/styles/global.module.scss'
//images
import edit from '../../../public/assets/icons/edit.svg'
import eye from '../../../public/assets/icons/eye.svg'
import monitor from '../../../public/assets/icons/monitor.svg'
import tool from '../../../public/assets/icons/tool.svg'
import thumbs from '../../../public/assets/icons/thumbs-upBlue.svg'
import user from '../../../public/assets/icons/user.svg'

const Planning = () => {
    return (
        <section className={styles.container}>
            <h2 className={`${global.h1_small} ${styles.title}`}>Unser Ansatz für Finanzplanung</h2>
            <div className={styles.content}>
                <div className={styles.col}>
                    <div className={styles.card}>
                        <Image src={edit} alt={"icon"} className={styles.icon} />
                        <h6 className={styles.cardTitle}>Bedarfsanalyse und Zielsetzung</h6>
                        <p className={styles.desc}>Analyse der Bedürfnisse und Festlegung finanzieller Ziele.</p>
                    </div>
                    <div className={styles.card}>
                        <Image src={monitor} alt={"icon"} className={styles.icon} />
                        <h6 className={styles.cardTitle}>Investitions- und Anlageberatung</h6>
                        <p className={styles.desc}>Beratung zu verschiedenen Anlageoptionen.</p>
                    </div>
                </div>

                <div className={styles.col}>
                    <div className={styles.card}>
                        <Image src={thumbs} alt={"icon"} className={styles.icon} />
                        <h6 className={styles.cardTitle}>Bestandsaufnahme und Bewertung</h6>
                        <p className={styles.desc}>Bewertung der aktuellen finanziellen Situation.</p>
                    </div>
                    <div className={styles.card}>
                        <Image src={tool} alt={"icon"} className={styles.icon} />
                        <h6 className={styles.cardTitle}>Risikomanagement und Absicherung</h6>
                        <p className={styles.desc}>Entwicklung der Absicherungsstrategie und des Risikomanagements.</p>
                    </div>
                </div>

                <div className={styles.col}>
                    <div className={styles.card}>
                        <Image src={user} alt={"icon"} className={styles.icon} />
                        <h6 className={styles.cardTitle}>Individuelle Strategieentwicklung</h6>
                        <p className={styles.desc}>Entwicklung einer maßgeschneiderten Finanzstrategie.</p>
                    </div>
                    <div className={styles.card}>
                        <Image src={eye} alt={"icon"} className={styles.icon} />
                        <h6 className={styles.cardTitle}>Implementierung und Überwachung</h6>
                        <p className={styles.desc}>Umsetzung der Finanzstrategie mit regelmäßiger Überwachung.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Planning;
