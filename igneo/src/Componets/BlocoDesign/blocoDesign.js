import styles from './blocoDesign.module.css'


export default function BlocoDesign({title,text})
{
    return <div className={styles.box}>
            <h2>{title}</h2>
            <p>{text}</p>
    </div>   
}