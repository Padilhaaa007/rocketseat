import styles from './header.module.css'

import logoLong from '../assets/logo-long.svg'

export function Header() {
    return (
        <header className={styles.header}>
            <img src={logoLong} />
        </header>
    )
}