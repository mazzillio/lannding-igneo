import styles from './blocoDesign.module.css'


export default function BlocoDesign({title,text})
{
    return <div className={styles.box}>
            <h3>{title}</h3>
            <p>{text}</p>
    </div>   
}