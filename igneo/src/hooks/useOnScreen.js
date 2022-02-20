import { useEffect, useState } from "react";


export function useOnScreen(ref)
{
        const [visible,setVisible]=useState(false)
        useEffect(()=>{
            const observer= new IntersectionObserver(([entry])=>{
                    setVisible(entry.isIntersecting)
            })
            if(ref.current)
            {
                observer.observe(ref.current)
            }
            return ()=>{
                if(ref.current)
                    observer.unobserve(ref.current)
                observer.disconnect()
            }
            
        },[])

        return visible       
}