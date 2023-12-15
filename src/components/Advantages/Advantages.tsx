//libs

//styles
import styles from './styles.module.scss'
import global from '@/styles/global.module.scss'
import {StaticImageData} from "next/image";
import {FC} from "react";
import AdvantagesCard from "@/components/Advantages/AdvantagesCard";

interface Props{
    cards: {
        title: string,
        text: string,
        icon: StaticImageData
    }[]
}

const Advantages:FC<Props> = ({cards}) => {
    return (
        <section className={styles.container}>
            <h2 className={`${global.h1_small} ${styles.title}`}>Vorteile des Dienstes</h2>
            <div className={styles.content}>
                {cards.map(({title,text,icon},i) => (
                    <AdvantagesCard title={title} text={text} icon={icon} key={i}/>
                ))}
            </div>
        </section>
    );
};

export default Advantages;
