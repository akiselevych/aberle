"use client"
//libs
import Image from "next/image";
import Link from "next/link";
import {usePathname, useRouter} from "next/navigation";
import {useEffect, useRef, useState} from "react";
import { Sling as Hamburger } from 'hamburger-react'

//styles
import styles from './styles.module.scss'
import global from '@/styles/global.module.scss'
import "./burger.scss"
//images
import logo from '../../../public/assets/logos/mainLogo.svg'
import arrowClosed from '../../../public/assets/icons/arrow.svg'
import arrowOpen from '../../../public/assets/icons/arrovOpen.svg'
//components
import DropDown from "@/components/Header/DropDown";


const Header = () => {
    const [isDropDownOpen, setIsDropDownOpen] = useState<boolean>(false);
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [isClient, setIsClient] = useState(false)
    const router = useRouter();
    useEffect(() => {
        setIsClient(true)
    }, [])
    const path = usePathname();
    const liRef = useRef<HTMLLIElement>(null);

    const handleAmount = (num: number, higher: boolean) => {
        return typeof window != "undefined" && (higher ? window.innerWidth < num : window.innerWidth > num)
    }
    const scrollToContent = () => {
        if (path === "/uber-uns"){
            router.push("/");
            setTimeout(() =>{
                const element = document.getElementById("calendly");
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            },500)
        } else {
            const element = document.getElementById("calendly");
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }

    };

    return (
        <>
            {isClient && <header className={styles.container}>
                <div className={styles.logoWrapper}>
                    <Link href={"/"} onClick={() => {
                        setIsMenuOpen(false);
                        setIsDropDownOpen(false);
                    }}>
                        <Image src={logo} alt={"Aberlepartner logo"} className={styles.logo}/>
                    </Link>
                </div>
                {(handleAmount(846, false) || isMenuOpen) && <nav className={`${styles.menu}`}>
                    <ul className={styles.list}>
                        <li
                            onClick={() => {
                                setIsMenuOpen(false);
                                setIsDropDownOpen(false);
                            }}
                            className={`${styles.listItem} ${path === "/" && styles.activeListItem}`}>
                            <Link href={"/"}>Home</Link>
                        </li>
                        <li className={styles.listItem} ref={liRef}>
                            <div onClick={() => setIsDropDownOpen(prev => !prev)}>
                                Services <Image src={isDropDownOpen ? arrowOpen : arrowClosed} alt={"arrow"}/>
                                {handleAmount(846, true) && <div
                                    className={`${styles.mobDropDown} ${isDropDownOpen && styles.activeMobDropDown}`}>
                                    <Link href={"/ganzheitliche-finanzberatung"}
                                          onClick={() => setIsMenuOpen(false)}
                                          className={`${styles.dropItem} `}>Ganzheitliche
                                        Finanzberatung
                                    </Link>
                                    <Link
                                        href={"/investitionsstrategien"}
                                        onClick={() => setIsMenuOpen(false)}
                                        className={`${styles.dropItem} `}>Investitionsstrategien
                                    </Link>
                                    <Link
                                        href={"/immobilien"}
                                        onClick={() => setIsMenuOpen(false)}
                                        className={`${styles.dropItem} `}>Immobilien
                                    </Link>
                                    <Link
                                        href={"/photovoltaik"}
                                        onClick={() => setIsMenuOpen(false)}
                                        className={`${styles.dropItem} `}>Photovoltaik
                                    </Link>
                                    <Link
                                        href={"/versicherungen"}
                                        onClick={() => setIsMenuOpen(false)}
                                        className={`${styles.dropItem} `}>Versicherungen
                                    </Link>
                                </div>}
                            </div>

                            {(isDropDownOpen && handleAmount(846, false)) &&
                                <DropDown liRef={liRef} closeModal={() => setIsDropDownOpen(false)}/>}
                        </li>
                        <li className={`${styles.listItem} ${path === "/uber-uns" && styles.activeListItem}`}>
                            <Link href={"/uber-uns"} onClick={() => {
                                setIsMenuOpen(false);
                                setIsDropDownOpen(false);
                            }}>Über uns</Link>
                        </li>
                        <li onClick={() => {
                            setIsMenuOpen(false);
                            setIsDropDownOpen(false);
                            scrollToContent()
                        }} className={`${global.primaryButton} ${styles.listItem} ${styles.decorated}`}>
                            Kostenlose DIN Analyse
                        </li>
                    </ul>
                </nav>}
                <div className={styles.burgerMenu}>
                    <Hamburger toggled={isMenuOpen} toggle={setIsMenuOpen} duration={0.6} easing={"ease-in"} rounded/>
                </div>
            </header>}
        </>

    );
};

export default Header;
