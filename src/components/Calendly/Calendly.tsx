//libs

//styles
import styles from './styles.module.scss'
import global from '@/styles/global.module.scss'

const Calendly = () => {
    return (
        <section className={styles.container} id={"calendly"}>
            <h2 className={`${global.h1_small} ${styles.title}`}>Vereinbare ein kostenloses Kennenlerngespräch</h2>
            <div className={styles.content}>
                <iframe
                    title={"Calendly for book a meeting"}
                    className={styles.calendly}
                    src="https://calendly.com/aberlesolutions/kennenlerngesprach">
                </iframe>
            </div>
        </section>
    );
};

export default Calendly;
