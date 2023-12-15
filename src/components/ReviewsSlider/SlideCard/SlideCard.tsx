//libs
import Image, {StaticImageData} from "next/image";
import {FC} from "react";
// styles
import styles from './styles.module.scss'
import global from '@/styles/global.module.scss'
//images
import icon from '../../../../public/assets/icons/ann.svg'



interface Props{
    text: string,
    name: string,
    position: string,
    image: StaticImageData
}
const SlideCard: FC<Props> = ({text,name,position,image}) => {
    return (
        <div className={styles.container}>
            <Image src={icon} alt={"icon"} className={styles.icon} />
            <p className={`${global.text2} ${styles.text}`}>
                {text}
            </p>
            <div className={styles.person}>
                <div className={styles.data}>
                    <p className={`${styles.name}`}>{name}</p>
                    <p className={styles.position}>{position}</p>
                </div>
                <Image priority loading={"eager"} src={image} alt={name} className={styles.image}/>
            </div>
        </div>
    );
};

export default SlideCard;
