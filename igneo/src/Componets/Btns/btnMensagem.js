import styles from './btnMensagem.module.css'
export function BtnMesnagem()
{
    const text='Ola niga estou testando enviar msg para vc '
    return <button className={styles.btnMsg}>
        <a href={`https://api.whatsapp.com/send?phone=5538992085656&text=${text}`}
            target='_blank'
        >
            Nos envie uma mensagem
        </a>
        </button>
}