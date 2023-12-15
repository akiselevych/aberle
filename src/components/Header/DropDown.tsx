"use client"
//libs
import {usePathname} from "next/navigation";
import {RefObject, useEffect, useRef} from "react";
//styles
import styles from './styles.module.scss'
import Link from "next/link";


const DropDown = ({closeModal, liRef}: { closeModal: () => void, liRef: RefObject<HTMLLIElement> }) => {
    const path = usePathname();
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node) && liRef.current && !liRef.current.contains(event.target as Node)) {
                closeModal();
            }
        }
        window.addEventListener('mousedown', handleClickOutside);
        return () => {
            window.removeEventListener('mousedown', handleClickOutside);
        }
        //eslint-disable-next-line
    }, []);

    return (
        <div className={styles.dropDown} ref={ref}>
            <Link href={"/ganzheitliche-finanzberatung"}
                  onClick={() => closeModal()}
                  className={`${styles.dropItem} ${path === "/ganzheitliche-finanzberatung" && styles.activeDropItem}`}>Ganzheitliche
                Finanzberatung
            </Link>
            <Link
                href={"/investitionsstrategien"}
                onClick={() => closeModal()}
                className={`${styles.dropItem} ${path === "/investitionsstrategien" && styles.activeDropItem}`}>Investitionsstrategien
            </Link>
            <Link
                href={"/immobilien"}
                onClick={() => closeModal()}
                className={`${styles.dropItem} ${path === "/immobilien" && styles.activeDropItem}`}>Immobilien
            </Link>
            <Link
                href={"/photovoltaik"}
                onClick={() => closeModal()}
                className={`${styles.dropItem} ${path === "/photovoltaik" && styles.activeDropItem}`}>Photovoltaik
            </Link>
            <Link
                href={"/versicherungen"}
                onClick={() => closeModal()}
                className={`${styles.dropItem} ${path === "/versicherungen" && styles.activeDropItem}`}>Versicherungen
            </Link>
        </div>
    );
};

export default DropDown;
