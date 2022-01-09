import styles from './porqueDesign.module.css'
import BlocoDesign from '../../Componets/BlocoDesign/blocoDesign'
import BtnOrcamento from '../../Componets/Btns/btnOrcamento'

export default function PorqueDesign()
{
    return <section className={styles.design}>
        <h2 className="title">Por que investir design</h2>
        <div className={styles.block}>
            <BlocoDesign 
                title="Credibilidade"
                text={`Um bom design gera
                       confiança e transmite
                       seridade e profissionalismo
                       para seu público 
                    `}
            />
            <BlocoDesign
                title="Decisão de compra"
                text={`O fator visual é um dos 
                       mais relevantes na decisão 
                       de compra. Atrás apenas
                       do preço.  
                    `}
            />
            <BlocoDesign
                title="Agrega Valor"
                text={`Melhora a percepção dos 
                       seus clientes e gera conexão,
                       possibilitando até a prática
                       de preços mais lucrativos. 
                    `}
            />

        </div>
    </section>
}