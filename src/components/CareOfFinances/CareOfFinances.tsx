//libs
import Image from "next/image";
//styles
import styles from './styles.module.scss'
import global from '@/styles/global.module.scss'
//images
import check from '../../../public/assets/icons/check.svg'
import timAberle from '../../../public/assets/images/TimAberle.webp'
import timAberleMob from '../../../public/assets/images/TimAberleMob.webp'
import ClientBtn from "@/components/CareOfFinances/ClientBtn/ClientBtn";

const CareOfFinances = () => {
    return (
        <section className={styles.container}>
            <div className={styles.left}>
                <h2 className={`${global.h1_small} ${styles.title}`}>Wir wissen, wie wir uns um Ihre Finanzen kümmern!</h2>
                <p className={`${global.text1} ${styles.desc}`}>
                    Viele Menschen schaffen es nicht, mehr als eine oder überhaupt eine Immobilie zu besitzen. Im Gegensatz dazu zeigen wir unseren Mandanten wie sie durch unsere Strategie bereits in jungen Jahren die erste Immobilie erwerben können.
                    <br/>
                    <br/>
                    Deine Ergebnisse durch unsere Strategieberatung:
                </p>

                <div className={styles.ponts}>
                    <div className={styles.point}>
                        <Image src={check} alt={"check icon"} className={styles.icon}/>
                        <p className={styles.pointText}>Mit unserer Strategie verhelfen wir dir dein Kapital zu vermehren und Steuervorteile zu nutzen</p>
                    </div>
                    <div className={styles.point}>
                        <Image src={check} alt={"check icon"} className={styles.icon}/>
                        <p className={styles.pointText}>Wir helfen dabei dein Immobilienportfolio auf- oder auszubauen</p>
                    </div>
                    <div className={styles.point}>
                        <Image src={check} alt={"check icon"} className={styles.icon}/>
                        <p className={styles.pointText}>Eine Unabhängigkeit für deine Arbeitskraft. Zusätzlich schaffen wir dir eine Strategie für die Planungssicherheit im Alter</p>
                    </div>
                    <div className={styles.point}>
                        <Image src={check} alt={"check icon"} className={styles.icon}/>
                        <p className={styles.pointText}>Mit uns die finanzielle Unabhängigkeit erreichen</p>
                    </div>
                </div>

                <ClientBtn/>

                <Image priority loading={"eager"} src={timAberleMob} alt={"Tim Aberle Gründer der Finanzberatung"} className={styles.imageMob}/>
            </div>
            <div className={styles.right}>
                <Image priority loading={"eager"} src={timAberle} alt={"Tim Aberle Gründer der Finanzberatung"} className={styles.image}/>
            </div>
        </section>
    );
};

export default CareOfFinances;
