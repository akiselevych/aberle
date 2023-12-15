//libs

//styles
import styles from './styles.module.scss'
import global from '@/styles/global.module.scss'
//components
import FAQblock from "@/components/Faq/FAQblock/FAQblock";
import {FC} from "react";

interface Props{
    questions: {
        text: string,
        answer: string
    }[]
}
const Faq:FC<Props> = ({questions}) => {
    return (
        <section className={styles.container}>
            <h2 className={`${global.h1_small} ${styles.title}`}>FAQ-Bereich</h2>
            <FAQblock questions={questions}/>
        </section>
    );
};

export default Faq;
