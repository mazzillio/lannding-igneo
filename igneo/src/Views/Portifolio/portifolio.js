import styles from './portifolio.module.css'
import BtnOrcamento from "../../Componets/Btns/btnOrcamento";
import CardPortifolio from '../../Componets/Cards/cardPortifolio';

export default function Portifolio()
{
    return <section className={styles.portifolio} id='portifolio'>
        <h2 className="title">Portifólio</h2>
        <div className={styles.divPortifolios}>
            <ul>
                <li><CardPortifolio/></li>
                <li><CardPortifolio/></li>
                <li><CardPortifolio/></li>
                <li><CardPortifolio/></li>
                <li><CardPortifolio/></li>
                <li><CardPortifolio/></li>
            </ul>
        </div>
        <BtnOrcamento/>
    </section>
}