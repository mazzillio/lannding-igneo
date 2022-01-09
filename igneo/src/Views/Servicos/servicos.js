import styles from './servicos.module.css'
import BtnOrcamento from '../../Componets/Btns/btnOrcamento'
import CardServicos from '../../Componets/Cards/cardServicos'


export default function Servicos()
{
    return <section className={styles.servicos} id='servicos'>
        <h2 className="title">Serviços</h2>
        <div className={styles.conteudoServicos}>
            <CardServicos 
                titulo="Id.Visual"
                texto={``}
            />
            <CardServicos titulo="Social M"/>
            <CardServicos titulo="Sites"/>
        </div>
        <BtnOrcamento/>
    </section>
}