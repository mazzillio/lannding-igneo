import styles from '../Assets/Views/conteudo.module.css'
import PorqueDesign from './porqueDesign'
import Portifolio from './portifolio'
import Servicos from './servicos'
import Sobre from './sobre'


export default function Conteudo()
{
    return <div className={styles.conteudo}>
        <Sobre />
        <PorqueDesign />
        <Servicos />
        <Portifolio />
    </div>
}