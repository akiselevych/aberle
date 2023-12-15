//libs
import Image, {StaticImageData} from "next/image";
import {FC} from "react";
//styles
import styles from './styles.module.scss'


interface Props{
    title: string,
    text: string,
    icon: StaticImageData
}

const AdvantagesCard:FC<Props> = ({text,icon,title}) => {
    return (
        <div className={styles.cardContainer}>
            <h4 className={styles.cardTitle}>{title}</h4>
            <Image src={icon} alt={"icon"} className={styles.icon}/>
            <p className={styles.text}>{text}</p>
        </div>
    );
};

export default AdvantagesCard;
