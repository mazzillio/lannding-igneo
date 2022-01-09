import styles from './cardServicos.module.css'


export default function CardServicos({title,text})
{
    return <div className={styles.card}>
        <h2 className={styles.h2}>{title}</h2>
        <p className={styles.p}>{text}</p>

    </div>
}