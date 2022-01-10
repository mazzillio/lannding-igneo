import styles from './btnMensagem.module.css'
export function BtnMesnagem()
{
    const text='Ola, estou precisando de um outro serviço!'
    const num='5538992085656'
    const send=()=>{
        window.open(`https://api.whatsapp.com/send?phone=${num}&text=${text}`,'_blank')
    }
    return <button className={styles.btnMsg} onClick={send}>
        <i id={styles.imsg} class="fab fa-whatsapp"></i>
           <p> Nos envie uma mensagem</p>
        </button>
}