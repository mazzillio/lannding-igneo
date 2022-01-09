
import styles from './footer.module.css'
export function Footer(){
    const redirect=(local)=>{
        window.location.href=`#${local}`
    }
    return <footer className={styles.divFooter}>
        <p>Produzido por Estúdio Igneo</p>
        <ul>
            <li onClick={()=>redirect('sobre')}>Sobre nós</li>
            <li onClick={()=>redirect('servicos')}>Serviços</li>
            <li onClick={()=>redirect('portifolio')}>Portifólio</li>
        </ul>
    </footer>
}