//libs
import Link from "next/link";
import Image from "next/image";
//styles
import styles from './styles.module.scss'
import global from '@/styles/global.module.scss'
//images
import logo from '../../../public/assets/logos/mainLogo.svg'
const Footer = () => {
    return (
        <footer className={styles.container}>
            <h4 className={`${global.h2} ${styles.modTitle}`}>Aberle Solutions</h4>
            <div className={styles.content}>
                <div className={styles.column}>
                    <h6 className={styles.colTitle}>Navigation</h6>
                    <Link href={"/uber-uns"} className={styles.link}>Über uns</Link>
                    <Link href={"/ganzheitliche-finanzberatung"} className={styles.link}>Ganzheitliche Finanzberatung</Link>
                    <Link href={"/investitionsstrategien"} className={styles.link}>Investitionsstrategien</Link>
                    <Link href={"/immobilien"} className={styles.link}>Immobilien</Link>
                    <Link href={"/photovoltaik"} className={styles.link}>Photovoltaik</Link>
                    <Link href={"/versicherungen"} className={styles.link}>Versicherungen</Link>
                </div>
                <div className={styles.middleColumn}>
                    <Image src={logo} alt={"logo"} className={styles.logo}/>
                    <h3 className={styles.title}>Gemeinsam Wachsen</h3>
                </div>
                <div className={styles.column}>
                    <h6 className={styles.colTitle}>Informationen</h6>
                    <p className={styles.link}>Stuttgarterstraße 66, <br/> 74321 Bietigheim-Bissingen,<br/> Deutschland</p>
                    <a href="tel:+49 15758518193" className={styles.link}>+49 15758518193</a>
                    <a href={"mailto:Tim.Aberle@aberlesolutions.de"} className={styles.link}>Tim.Aberle@aberlesolutions.de</a>
                    <Link href={"/impressum"} className={styles.link}>Impressum</Link>
                    <Link href={"/datenschutzpolitik"} className={styles.link}>Datenschutzpolitik</Link>
                </div>
            </div>
            <p className={styles.desc}>©2023 von Aberle Solutions. Alle Rechte vorbehalten.</p>
        </footer>
    );
};

export default Footer;
