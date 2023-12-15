import Image, {StaticImageData} from "next/image";
import {FC} from "react";
//styles
import styles from './styles.module.scss'
import global from '@/styles/global.module.scss'
//images

import blue from '../../../public/assets/images/blue.png'
import ClientBtn from "@/components/NestedBanner/ClientBtn/ClientBtn";


interface Props{
    title: string,
    text: string,
    image: StaticImageData
}
const NestedBanner:FC<Props> = ({title,text,image}) => {
    return (
        <section className={styles.wrapper}>
            <Image src={blue} alt={"Blue"} className={styles.blue}/>
            <div className={styles.container}>
                <div className={styles.left}>
                    <h1 className={`${global.h1_small} ${styles.title}`}>{title}</h1>
                    <p className={styles.desc}>
                        {text}
                    </p>
                    <ClientBtn/>
                </div>
                <div className={styles.right}>
                    <Image priority loading={"eager"} src={image} alt={title} className={styles.image}/>
                </div>
            </div>
        </section>
    );
};

export default NestedBanner;
