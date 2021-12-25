import styles from '../Assets/Componets/header.module.css'

export default function Header()
{

    return <header className={styles.header}>
        <ul>
            <li>Sobre Nós</li>
            <li>Serviços</li>
            <li>Portifólio</li>
        </ul>
    </header>
}