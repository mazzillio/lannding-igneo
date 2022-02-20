import { useRef } from 'react'
import { useOnScreen } from '../../hooks/useOnScreen'
import styles from './sobre.module.css'


export default function Sobre()
{
    const targetRef=useRef(null)
    const animation=useOnScreen(targetRef)
    return <section className={styles.sobre} id='sobre' >
            <h2 className="title" >Sobre Nós</h2>
            <div ref={targetRef}>
            <article  className={animation===true?styles.animationSobre:''}>
            Somos um estúdio que acredita no potencial que o design tem de gerar
            valor e conectar marcas como pessoas. Estamos a 3 anos no mercado
            ajudando a construir marcas com propósito que comunicam a 
            mensagem certa para as pessoas certas.
            </article>
            </div>
    </section>
}