import styles from './porqueDesign.module.css'
import BlocoDesign from '../../Componets/BlocoDesign/blocoDesign'
import { useRef } from 'react'
import { useOnScreen } from '../../hooks/useOnScreen'

export default function PorqueDesign()
{
    const targetRef=useRef(null)
    const visible=useOnScreen(targetRef)

    return <section className={styles.design}>
        <h2 className="title" ref={targetRef}>Por que investir design</h2>
        <div className={visible===true?`${styles.block} ${styles.animationPorque}`:styles.block} >
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