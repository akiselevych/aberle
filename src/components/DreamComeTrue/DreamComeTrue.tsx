//libs

//styles
import styles from './styles.module.scss'
import global from '@/styles/global.module.scss'
//images
import inc from '../../../public/assets/icons/trending-up.svg'
import thumb from '../../../public/assets/icons/thumbs-up.svg'
import userIcon from '../../../public/assets/icons/userIcon.svg'
import Image from "next/image";
import ClientBtn from "@/components/DreamComeTrue/ClientBtn/ClientBtn";

const DreamComeTrue = () => {
    return (
        <section className={styles.container}>
            <h2 className={`${global.h1_small} ${styles.title}`}>Deine Träume können so schnell wie möglich wahr werden!</h2>

            <ClientBtn/>
            <div className={styles.content}>
                <article className={styles.card}>
                    <h5 className={`${global.h1_small} ${styles.cardTitle}`}>Vermehre dein Kapital</h5>
                    <Image src={inc} alt={"icon"} className={styles.icon}/>
                    <p className={`${styles.desc}`}>Mit unserer Strategie helfen wir dir dabei die Entscheidung über den Renteneintritt selbst zu treffen sodass du nicht bis zum 67. Lebensjahr arbeiten musst.</p>
                </article>
                <article className={styles.card}>
                    <h5 className={`${global.h1_small} ${styles.cardTitle}`}>Erfülle dir den Traum vom Eigenheim </h5>
                    <Image src={userIcon} alt={"icon"} className={styles.icon}/>
                    <p className={`${styles.desc}`}>In unserer Beratung erhältst du einen genauen Plan, wie und wann du dein Immobilienportfolio auf- oder ausbauen kannst.</p>
                </article>
                <article className={styles.card}>
                    <h5 className={`${global.h1_small} ${styles.cardTitle}`}>Spare viel Geld</h5>
                    <Image src={thumb} alt={"icon"} className={styles.icon}/>
                    <p className={`${styles.desc}`}>Durch die Unterstützung unseres Teams wirst du nachhaltig Vermögen aufbauen und zusätzlich mehrere Tausende Euro an zu viel gezahlten Steuern und Beiträgen zurückgewinnen.</p>
                </article>
            </div>
        </section>
    );
};

export default DreamComeTrue;
