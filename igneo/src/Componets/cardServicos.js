import styles from '../Assets/Componets/cardServicos.module.css'


export default function CardServicos({titulo})
{
    return <div className={styles.card}>
        <h2>{titulo}</h2>

    </div>
}