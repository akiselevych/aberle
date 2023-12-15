"use client"
//styles
import styles from '../styles.module.scss'
import global from "@/styles/global.module.scss";
import {usePathname, useRouter} from "next/navigation";
const ClientBtn = () => {
    const path = usePathname();
    const router = useRouter();
    const scrollToContent = () => {
        const element = document.getElementById("calendly");
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <div onClick={() => {
            if (path === "/uber-uns"){
                router.push("/",{scroll: true})
                setTimeout(() => scrollToContent(),500)
            } else {
                scrollToContent()
            }
        }} className={`${global.primaryButton} ${styles.btn}`}>Kostenlose Beratung ausmachen</div>
    );
};

export default ClientBtn;
