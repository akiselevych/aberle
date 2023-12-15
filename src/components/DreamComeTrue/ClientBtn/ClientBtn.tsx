"use client"
//styles
import styles from '../styles.module.scss'
import global from "@/styles/global.module.scss";
const ClientBtn = () => {
    const scrollToContent = () => {
        const element = document.getElementById("calendly");
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <div onClick={() => scrollToContent()} className={`${global.primaryButton} ${styles.btn}`}>Kostenlose Beratung buchen</div>
    );
};

export default ClientBtn;
