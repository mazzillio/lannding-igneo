import { useState } from 'react'
import styles from './slider.module.css'
import{FaArrowAltCircleRight,FaArrowAltCircleLeft} from 'react-icons/fa'
export default function Slider({ projeto,imagens }) {
    const [current,setCurrent]=useState(0)
    const length=imagens.length
    if(!Array.isArray(imagens)|| imagens.length<=0)
    {
            return null
    }
    const prevSlide=()=>{
        setCurrent(current===0?length-1:current-1)
    }
    const nextSlide=()=>{
        setCurrent(current === length-1? 0:current+1)
    }
    return <div className={styles.slider}>
            <FaArrowAltCircleLeft className={styles.leftArrow} onClick={prevSlide} />
            <FaArrowAltCircleRight className={styles.rightArrow} onClick={nextSlide}/>
            <h3>{projeto}</h3> 
            {
                imagens.map((imagem,index)=>{

                    return(
                        <div key={index} className={index===current?`${styles.slide} ${styles.active}`:styles.slide}>
                            {index ===current &&(<img  src={imagem} className={styles.imgSlide}/>)}
                        </div>
                    ) 
                    
                })
            }
    </div>
}