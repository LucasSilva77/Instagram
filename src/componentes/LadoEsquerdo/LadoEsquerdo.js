import './LadoEsquerdo.css'
import ItemMenu from './componentes/ItemMenu';
import { GrHomeRounded } from "react-icons/gr";
import { FiSearch } from "react-icons/fi";
import { BiMoviePlay } from "react-icons/bi";
import { FaRegCompass } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { CgAddR } from "react-icons/cg";




import Logo2 from './imagens/instagram icone2.png';

export default function LadoEsquerdo() {
    return (
        <div className="LadoEsquerdo">
            <div className= 'logo'>
               
                <img src={Logo2} alt="logo2" /> 
            </div>
            <div className="menu-principal">
               <ItemMenu icone= {<GrHomeRounded />} texto="Pagina inicial"/>
               <ItemMenu icone={< FiSearch/>} texto="Pesquisar"/>
               <ItemMenu icone={< FaRegCompass/>} texto="Explorar"/>
               <ItemMenu icone= {<BiMoviePlay/>} texto="Reels"/>
               <ItemMenu icone= {<AiOutlineMessage />} texto="Mensagens"/>
               <ItemMenu icone= {<AiOutlineHeart />} texto="Notificações"/>
               <ItemMenu icone= {<CgAddR />} texto="Criar"/>
               <ItemMenu icone= {< CgAddR/>} texto="Perfil"/>
             
        
            </div>
        </div>
    )
}