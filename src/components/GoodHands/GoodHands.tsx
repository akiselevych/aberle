//libs
import Image from "next/image";
//styles
import styles from './styles.module.scss'
import global from '@/styles/global.module.scss'
//images
import hands from '../../../public/assets/images/hands.webp'
import handsMob from '../../../public/assets/images/handsMob.webp'


const GoodHands = () => {
    return (
        <section className={styles.container}>
            <h2 className={`${global.h1_small} ${styles.title}`}>Sie sind in guten Händen!</h2>
            <div className={styles.content}>
                <div className={styles.left}>
                    <Image src={hands} alt={"Hands"} className={styles.image}/>
                    <Image src={handsMob} alt={"Hands"} className={styles.imageMob}/>
                </div>
                <div className={styles.right}>
                    <article className={styles.block}>
                        <h5 className={styles.subTitle}>Hochwertige Ausführung</h5>
                        <div className={styles.line}></div>
                        <p className={styles.text}>Wir legen großen Wert auf individuelle und maßgeschneiderte Finanzpläne für jeden unserer Kunden. Jeder Schritt wird sorgfältig und intelligent geplant, um Qualität sicherzustellen und Ihnen eine hochwertige Dienstleistung zur Verfügung stellen zu können.
                        </p>
                    </article>

                    <article className={styles.block}>
                        <h5 className={styles.subTitle}>Wir haben umfangreiche Erfahrungen</h5>
                        <div className={styles.line}></div>
                        <p className={styles.text}>Unsere umfangreichen Erfahrungen in der Finanzbranche erstrecken sich über viele Jahre. Wir haben erfolgreich zahlreiche Kunden betreut und sind mit den sich ständig wandelnden Marktbedingungen bestens vertraut. Dies ermöglicht es uns, maßgeschneiderte Lösungen individuell auf Ihre Lebenssituation zugeschnitten anzubieten.
                        </p>
                    </article>

                    <article className={styles.block}>
                        <h5 className={styles.subTitle}>Wir erklären es deutlich</h5>
                        <div className={styles.line}></div>
                        <p className={styles.text}>Wir vermitteln Ihnen komplexe Sachverhalte so, dass Sie diese mühelos verstehen und ohne offene Fragen und mit einem guten Gefühl nach Hause gehen.
                            Unsere Kunden schätzen unsere Fähigkeit, schwierige Themen in einfache, leicht nachvollziehbare Informationen zu übersetzen.</p>
                    </article>

                    <article className={styles.block}>
                        <h5 className={styles.subTitle}>Wirkungsgrad</h5>
                        <div className={styles.line}></div>
                        <p className={styles.text}>Effizienz ist etwas, das uns auszeichnet. Wir setzen auf Digitalisierung, um unsere Prozesse zu optimieren und Ressourcen effektiv zu nutzen. Dies ermöglicht uns, kosteneffiziente Dienstleistungen anzubieten und die besten Ergebnisse für unsere Kunden zu erzielen.</p>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default GoodHands;
