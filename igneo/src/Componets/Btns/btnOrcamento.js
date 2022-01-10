import styles from './btnOrcamento.module.css'
export default function BtnOrcamento()
{
    const text='Olá, gostaria de solicitar um orçamento.'
    const num ='5538992085656'
    const send=()=>{
        window.open(`https://api.whatsapp.com/send?phone=${num}&text=${text}`,'_blank')
    }
    return <button className={styles.btn} onClick={send}>
        Orçamentos Gratuito
    </button>
}