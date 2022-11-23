import Image from 'next/image'
import styles from './UserBadge.module.css'
import DefaultImage from '../../public/images/userprofile.jpg'
import { useState } from 'react'

export default function UserBadge(){

    const [openMenu, setOpenMenu] = useState(false)

    const handleClick = () => {
        setOpenMenu(!openMenu)
        console.log(openMenu)
    }

    return(
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div 
                  className={styles.profileImageBorder}
                  onClick={handleClick}
                >
                    <Image
                    className={styles.profileImage} 
                    src={DefaultImage} 
                    alt="Profile Image"
                    />
                </div>
                <div className={styles.userInfo}>
                    <p>Username</p>
                    <p>#Admin</p>
                </div>
            </div>
            <ul id="menu" className={openMenu ? 
                styles.menu : 
                styles.menu + ' ' + styles.hiddenMenu}>
                <li>Opção 1</li>
                <li>Opção 2</li>
                <li>Opção 3</li>
            </ul>
        </div>
    )

}