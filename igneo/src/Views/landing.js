import Apresentacao from "../Componets/apresentacao";
import BtnOrcamento from "../Componets/btnOrcamento";
import Header from "../Componets/header";
import Parallax from "../Componets/parallax";



export default function Landing()
{
    return(
        <div>
            <Header/>
            <Parallax/>
            <Apresentacao/>
        </div>
    )
}