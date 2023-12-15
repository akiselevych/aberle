'use client'
//libs
import { useEffect, useState } from "react";
import Image from "next/image";
//styles
import styles from './styles.module.scss'
import global from '@/styles/global.module.scss'
//images
import closeIcon from './images/closeIcon.svg'



const Banner = () => {
  const [isBanner, setIsBanner] = useState(false);

  useEffect(() => {
    // @ts-ignore
    if (typeof window !== 'undefined' && !JSON.parse(localStorage.getItem("cookieProtectionAberle"))) {
      setIsBanner(true)
    }

    //eslint-disable-next-line
  }, []);

  const btnCloseHandler = () => {
    localStorage.setItem("cookieProtectionAberle", JSON.stringify(true))
    setIsBanner(false);
  }
  return (
    <>
      {isBanner &&
        <div className={styles.overlay}>
          <div className={`${styles.container}`}>
            <Image width={16} height={16} src={closeIcon} alt={"Close banner"} onClick={btnCloseHandler} className={styles.closeBtn} />
            <div className={styles.header}>
              <div className={`${styles.title}`}>
                Wir schätzen Ihre Privatsphäre
              </div>
            </div>
            <div className={`${styles.text}`}>
              Diese Website verwendet Cookies, um Ihr Surferlebnis zu verbessern und personalisierte Inhalte bereitzustellen. Wenn Sie auf &quot;Alle Cookies akzeptieren&quot; klicken, stimmen Sie der Speicherung von Cookies auf Ihrem Gerät zu, um die Nutzung der Website zu analysieren, unsere Dienste zu verbessern und Ihnen relevante Werbung anzuzeigen.
            </div>
            <div className={styles.btnContainer}>
              <div className={`${global.primaryButton} ${styles.acceptBtn}`} onClick={btnCloseHandler}>
                Alle Cookies akzeptieren
              </div>
              <div className={`${global.secondaryButton} ${styles.declineBtn}`} onClick={btnCloseHandler}>
                Ablehnen
              </div>
            </div>
          </div>
        </div>
      }
    </>

  );
};

export default Banner;
