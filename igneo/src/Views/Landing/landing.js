import Apresentacao from "../../Componets/Apresentacao/apresentacao";
import Header from "../../Componets/Header/header";
import Parallax from "../../Componets/Parallax/parallax";
import Conteudo from "../Conteudo/conteudo";




export default function Landing()
{
    return(
        <div>
            <Header/>
            <Parallax/>
            <Apresentacao/>
            
            <Conteudo/>
        </div>
    )
}