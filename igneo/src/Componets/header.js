import styles from '../Assets/Componets/header.module.css'

export default function Header()
{
    const click=(param)=>
    {
        window.location.href=`/#${param}`
    }    
    return <header className={styles.header}>
        <ul>
            <li onClick={()=>click('sobre')}>Sobre Nós</li>
            <li onClick={()=>click('servicos')}>Serviços</li>
            <li onClick={()=>click('portifolio')}>Portifólio</li>
        </ul>
    </header>
}