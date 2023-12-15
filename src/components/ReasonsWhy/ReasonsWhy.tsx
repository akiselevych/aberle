//libs

//styles
import styles from './styles.module.scss'
import global from '@/styles/global.module.scss'
//images
import smile from '../../../public/assets/icons/meh.svg'
import clock from '../../../public/assets/icons/clock.svg'
import warning from '../../../public/assets/icons/alert-triangle.svg'
import Image from "next/image";

const ReasonsWhy = () => {
    return (
        <section className={styles.container}>
            <h2 className={`${global.h2} ${styles.title}`}>Die 3 häufigsten Gründe warum man seine finanzielle Situation nicht verbessert.</h2>
            <div className={styles.content}>
                <article className={styles.reason}>
                    <Image src={smile} alt={"smile icon"} className={styles.icon}/>
                    <h5 className={`${global.h1_small} ${styles.cardTitle}`}>Ich mach`s lieber selbst:</h5>
                    <p className={`${global.text1}  ${styles.desc}`}>
                        Lass deinen finanziellen Erfolg nicht von deinem „Ego“ zerstören. Erfolgreiche Menschen vermeiden unnötig Fehler und lassen sich von Experten beraten. So kommen sie deutlich schneller an ihr Ziel
                    </p>
                </article>
                <article className={styles.reason}>
                    <Image src={clock} alt={"clock icon"} className={styles.icon}/>
                    <h5 className={`${styles.cardTitle}`}>Auf die Falschen hören:</h5>
                    <p className={`${global.text1} ${styles.desc}`}>
                        Die meisten Menschen hören lieber auf Personen, die sie kennen, jedoch nicht das nötige Know-how haben. Um aber deine Ziele und Wünsche in die tat umzusetzen solltest du auf Experten in dem jeweiligen Bereich hören.
                    </p>
                </article>
                <article className={styles.reason}>
                    <Image src={warning} alt={"warning icon"} className={styles.icon}/>
                    <h5 className={`${styles.cardTitle}`}>Keine Prioritäten & Ziele:</h5>
                    <p className={`${global.text1} ${styles.desc}`}>
                        Habe deine Ziele und Wünsche immer im Blick. Mit der richtigen Strategie und Investitionen in deine Zukunft kannst du dir nicht nur den Luxus von heute leisten, sondern auch den von morgen.
                    </p>
                </article>
            </div>
        </section>
    );
};

export default ReasonsWhy;
