import styles from './conteudo.module.css'
import PorqueDesign from '../Porque/porqueDesign.js'
import Portifolio from '../Portifolio/portifolio.js'
import Servicos from '../Servicos/servicos.js'
import Sobre from '../Sobre/sobre.js'


export default function Conteudo()
{
    return <div className={styles.conteudo}>
        <Sobre />
        <PorqueDesign />
        <Servicos />
        <Portifolio />
    </div>
}