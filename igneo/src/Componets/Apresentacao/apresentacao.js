import BtnOrcamento from "../Btns/btnOrcamento";
import styles from "./apresentacao.module.css"
export default function Apresentacao()
{
    return <div className={styles.apresentacao}>
        <img src="logo512.png"/>
        <article>
                Forjamos <span>conexões</span> através de um design <span>estratégico</span> e com <span>significado</span>!
        </article>
        <BtnOrcamento className={styles.btn}/>
    </div>
}