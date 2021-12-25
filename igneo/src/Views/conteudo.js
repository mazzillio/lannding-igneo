import styles from '../Assets/Views/conteudo.module.css'
import PorqueDesign from './porqueDesign'
import Servicos from './servicos'
import Sobre from './sobre'


export default function Conteudo()
{
    return <div className={styles.conteudo}>
        <Sobre/>
        <PorqueDesign/>
        <Servicos/>
    </div>
}