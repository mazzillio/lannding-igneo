import styles from './portifolio.module.css'
import BtnOrcamento from "../../Componets/Btns/btnOrcamento";
import { portifolioData } from '../../Componets/Slider/sliderdata';
import Slider from '../../Componets/Slider/Slider';

export default function Portifolio()
{
    return <section className={styles.portifolio} id='portifolio'>
        <h2 className="title">Portifólio</h2>
        <div className={styles.divPortifolios}>
            <ul>
               {
                   portifolioData.map((projeto,index)=>{
                       return <li key={index}><Slider 
                                    projeto={projeto.projeto}
                                    imagens={projeto.imagens}

                       /></li>
                   })
               }
            </ul>
        </div>
        <BtnOrcamento/>
    </section>
}