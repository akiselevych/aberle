//libs

//styles
import styles from './styles.module.scss'
import global from '@/styles/global.module.scss'
import {FC} from "react";

interface Props{
    text1: string,
    text2: string,
    text3: string
    text4: string
}
const HowItWorks:FC<Props> = ({text1,text2,text3,text4}) => {
    return (
        <section className={styles.container}>
            <h2 className={`${global.h1_small} ${styles.title}`}>Wie es funktioniert</h2>
            <div className={styles.line}></div>
            <div className={styles.content}>
                <div className={styles.firstBlock}>
                    <div className={styles.card}>
                        <p className={`${styles.nums} ${styles.num1}`}>01</p>
                        <p className={`${styles.text} ${styles.text1}`}>{text1}</p>
                    </div>
                    <div className={styles.card}>
                        <p className={`${styles.nums} ${styles.num2}`}>02</p>
                        <p className={`${styles.text} ${styles.text2}`}>{text2}</p>
                    </div>
                </div>
                <div className={styles.secondBlock}>
                    <div className={styles.card}>
                        <p className={`${styles.nums} ${styles.num3}`}>03</p>
                        <p className={`${styles.text} ${styles.text3}`}>{text3}</p>
                    </div>
                    <div className={styles.card}>
                        <p className={`${styles.nums} ${styles.num4}`}>04</p>
                        <p className={`${styles.text} ${styles.text4}`}>{text4}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
