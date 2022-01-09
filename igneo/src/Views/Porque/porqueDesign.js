import styles from './porqueDesign.module.css'
import BlocoDesign from '../../Componets/BlocoDesign/blocoDesign'
import BtnOrcamento from '../../Componets/Btns/btnOrcamento'

export default function PorqueDesign()
{
    return <section className={styles.design}>
        <h2 className="title">Por que investir design</h2>
        <div className={styles.block}>
            <BlocoDesign/>
            <BlocoDesign/>
            <BlocoDesign/>

        </div>
        <BtnOrcamento/>
    </section>
}