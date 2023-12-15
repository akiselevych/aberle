//libs
import React from 'react';
import Image from "next/image";
//styles
import styles from './styles.module.scss'
import global from '@/styles/global.module.scss'
//images
import granvaloraLogo from '../../../public/assets/logos/granvaloraLogo.svg'
import siebenLogo from '../../../public/assets/logos/siebenLogo.svg'
import blaudirektLogo from '../../../public/assets/logos/blaudirektLogo.svg'
import icapLogo from '../../../public/assets/logos/icapLogo.svg'
import ravidaLogo from '../../../public/assets/logos/ravidaLogo.svg'




const TrustCompanies = () => {


        return (
            <section className={styles.container} >
                <div className={styles.wrapper}>
                    <h2 className={`${global.h2} ${styles.title}`}>Unternehmen vertrauen uns</h2>
                    <div className={styles.content}>
                        <div className={styles.logoWrapper}>
                            <Image src={granvaloraLogo} alt={"GranValora"} className={styles.logo}/>
                        </div>
                        <div className={styles.logoWrapper}>
                            <Image  src={siebenLogo} alt={"Sieben Umzuege"} className={styles.logo}/>
                        </div>
                        <div className={styles.logoWrapper}>
                            <Image src={blaudirektLogo} alt={"Blau Direkt"} className={styles.logo}/>
                        </div>
                        <div className={styles.logoWrapper}>
                            <Image  src={icapLogo} alt={"Icap Group"} className={styles.logo}/>
                        </div>
                        <div className={styles.logoWrapper}>
                            <Image src={ravidaLogo} alt={"Ravida"} className={styles.logo}/>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
;

export default TrustCompanies;
