import React from "react"
import Link from "next/link"
import styles from "./Navbar.module.css"
import { useRouter } from "next/router"
import UserBadge from "../UserBadge/UserBadge"



export default function Navbar(){

    const router = useRouter()

    return(
    <nav className={styles.navbar}>
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <span>MCloud</span>
                <div className={styles.divider}></div>
                <ul>
                    <li className={router.pathname === '/' ? styles.active : ''}>
                        <Link href="/">Home</Link>
                    </li>
                    <li className={router.pathname === '/unity' ? styles.active : ''}>
                        <Link href="/unity">Unidades</Link>
                    </li>
                </ul>
            </div>
            <UserBadge/>
        </div>
    </nav>
    )
}