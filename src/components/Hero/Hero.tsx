//libs
import Image from "next/image";
//styles
import styles from './styles.module.scss'
import global from '@/styles/global.module.scss'
//images
import whiteLogo from '../../../public/assets/logos/whiteLogo.svg'
import ClientBtn from "@/components/Hero/ClientBtn/ClientBtn";



const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.logoWrapper}>
                <Image priority loading={"eager"} src={whiteLogo} alt={"White Logo Aberle"} className={styles.logo}/>
                <h3 className={styles.logoTitle}>Gemeinsam Wachsen</h3>
            </div>
            <div className={styles.content}>
                <h1 className={`${global.h1} ${styles.heroTitle}`}>Willkommen bei Aberle Solutions - Finanzlösungen Bietigheim-Bissingen
                </h1>
                <p className={styles.desc}>Vermehren Sie Ihr Kapital vertrauensvoll und mit Freude!
                    Wir sind Ihr Schlüssel zu Ihrer umfassenden Finanziellen Freiheit und Sicherheit.</p>
               <ClientBtn/>
            </div>
        </section>
    );
};

export default Hero;
