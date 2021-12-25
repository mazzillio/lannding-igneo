import Apresentacao from "../Componets/apresentacao";
import Header from "../Componets/header";
import Parallax from "../Componets/parallax";
import PorqueDesign from "./porqueDesign";
import Sobre from "./sobre";



export default function Landing()
{
    return(
        <div>
            <Header/>
            <Parallax/>
            <Apresentacao/>
            <Sobre/>
            <PorqueDesign/>
        </div>
    )
}