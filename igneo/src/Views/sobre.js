import styles from '../Assets/Views/sobre.module.css'


export default function Sobre()
{
    return <section className={styles.sobre} id='sobre'>
            <h2 className="title">Sobre Nós</h2>
            <article>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen 
            book. It has survived not only five centuries, but also the leap into electronic 
            typesetting, remaining essentially unchanged.
            </article>
    </section>
}