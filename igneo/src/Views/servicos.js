import styles from '../Assets/Views/servicos.module.css'
import BtnOrcamento from '../Componets/btnOrcamento'
import CardServicos from '../Componets/cardServicos'


export default function Servicos()
{
    return <section className={styles.servicos}>
        <h2 className="title">Serviços</h2>
        <div className={styles.conteudoServicos}>
            <CardServicos titulo="Id.Visual"/>
            <CardServicos titulo="Social M"/>
            <CardServicos titulo="Sites"/>
        </div>
        <BtnOrcamento/>
    </section>
}