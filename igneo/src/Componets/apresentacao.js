import BtnOrcamento from "./btnOrcamento";
import styles from "../Assets/Componets/apresentacao.module.css"
export default function Apresentacao()
{
    return <div className={styles.apresentacao}>
        <img src="logo512.png"/>
        <article>
        It is a long established fact that a reader will be distracted by the readable content 
        of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
        </article>
        <BtnOrcamento className={styles.btn}/>
    </div>
}