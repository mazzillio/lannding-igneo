import styles from './servicos.module.css'

import CardServicos from '../../Componets/Cards/cardServicos'
import { BtnMesnagem } from '../../Componets/Btns/btnMensagem'
import { useRef } from 'react'
import { useOnScreen } from '../../hooks/useOnScreen'


export default function Servicos()
{
    const tragetRef=useRef(null)
    const visible=useOnScreen(tragetRef)
    return <section className={styles.servicos} id='servicos' ref={tragetRef}>
        <h2 className="title">Serviços</h2>
        <div className={visible===true?`${styles.conteudoServicos} ${styles.animationServico}`:styles.conteudoServicos}>
            <CardServicos 
                title="Id.Visual"
                text={`Logotipo, tipografia paleta
                        de cores e todo e universo
                        visual de sua marca pensando
                        de forma estratégica para se 
                        comunicar de forma eficiente com seu público.
                `}
            />
            <CardServicos 
                title="Social M"
                text={`Com o avanço digital uma
                       comunicação efetiva nas 
                       redes sociais têm papel 
                       fundamental para qualquer
                       negócio alcançar o sucesso.
                       Conte com quem entende
                       do assunto e está
                       em constante atualização. 
                `}
            />
            <CardServicos 
                title="Sites"
                text={`Se você deseja expandir o 
                       seu alcance ou áreas de contato,
                       aumentar sua autoridade
                       ou até mesmo vendas 24h um 
                       site é uma das respostas,
                       e é mais um dos serviços que
                       oferecemos para ajudar
                       você a atingir os seus o objetivos. 
                    `}
            />
        </div>
        <div>
            <p className={styles.p}>Precisa de outro serviço?
            <br/>Vamos conversar, que a gente desenrola.</p>
        </div>
        <BtnMesnagem/>
    </section>
}