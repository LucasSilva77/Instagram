import './LadoEsquerdo.css'
import ItemMenu from './componentes/ItemMenu';
import { HiHome } from "react-icons/hi";
import { GrAddCircle } from "react-icons/gr";


import Logo from './imagens/instagram icone.png';
import Logo2 from './imagens/instagram icone2.png';

export default function LadoEsquerdo() {
    return (
        <div className="LadoEsquerdo">
            <div className= 'logo'>
                <img src={Logo} alt="logo" /> 
                <img src={Logo2} alt="logo2" /> 
            </div>
            <div className="menu-principal">
               <ItemMenu icone= {<HiHome />} texto="Home"/>
               <ItemMenu icone={< GrAddCircle/>} texto="Discover"/>
               <ItemMenu icone="#" texto="Reels"/>
             
        
            </div>
        </div>
    )
}