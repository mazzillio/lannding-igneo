import styles from '../Assets/Views/portifolio.module.css'
import BtnOrcamento from "../Componets/btnOrcamento";
import CardPortifolio from '../Componets/cardPortifolio';

export default function Portifolio()
{
    return <section className={styles.portifolio}>
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