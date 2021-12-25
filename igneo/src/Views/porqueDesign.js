import styles from '../Assets/Views/porqueDesign.module.css'
import BlocoDesign from '../Componets/blocoDesign'
import BtnOrcamento from '../Componets/btnOrcamento'

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