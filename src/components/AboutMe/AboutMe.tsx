//libs
import Image from "next/image";
//styles
import styles from './styles.module.scss'
import global from '@/styles/global.module.scss'
//images
import aberle from '../../../public/assets/images/TimAberleAboutMe.webp'
import blackCheck from '../../../public/assets/icons/blackCheck.svg'
import ClientBtn from "@/components/AboutMe/ClientBtn/ClientBtn";


const AboutMe = () => {
    return (
        <section className={styles.container}>
            <div className={styles.left}>
                <Image priority loading={"eager"} src={aberle} alt={"Tim Aberle Gründer der Finanzberatung"} className={styles.photo}/>
            </div>
            <div className={styles.right}>
                <h3 className={`${global.h1_small} ${styles.title}`}>Tim Aberle</h3>
                <Image priority loading={"eager"} src={aberle} alt={"Tim Aberle Gründer der Finanzberatung"} className={styles.mobPhoto}/>
                <p className={`${global.h2} ${styles.position}`}>Gründer der Finanzberatung</p>
                <p className={`${global.text2} ${styles.desc}`}>
                    Es ist meine Leidenschaft, Menschen dabei zu unterstützen, ihre finanziellen Ziele zu erreichen und eine solide Grundlage für eine sichere Zukunft zu schaffen
                </p>
                <div className={styles.points}>
                    <div className={styles.point}>
                        <Image src={blackCheck} alt={"black check icon"} className={styles.icon}/>
                        <p className={`${styles.pointText}`}>
                            Entwicklung von maßgeschneiderten Lösungen für Kunden, die ihren spezifischen Bedürfnissen und Zielen entsprechen.
                        </p>
                    </div>
                    <div className={styles.point}>
                        <Image src={blackCheck} alt={"black check icon"} className={styles.icon}/>
                        <p className={`${styles.pointText}`}>
                            Durch eine vertrauensvolle und partnerschaftliche Beziehung mit meinen Kunden strebe ich danach, sie in allen verschiedenen Finanzbereichen auf ihrem Weg zu begleiten.
                        </p>
                    </div>
                    <div className={styles.point}>
                        <Image src={blackCheck} alt={"black check icon"} className={styles.icon}/>
                        <p className={`${styles.pointText}`}>
                            Dynamische Anpassung an Marktveränderungen, um beste Ergebnisse für Sie zu erzielen.
                        </p>
                    </div>
                </div>
                <p className={`${global.text2} ${styles.desc}`}>
                    Bei uns steht der Kunde im Mittelpunkt, und ich freue mich darauf, mit dir deine Träume in die Realität umzusetzen.
                </p>
                <ClientBtn/>
            </div>
        </section>
    );
};

export default AboutMe;
