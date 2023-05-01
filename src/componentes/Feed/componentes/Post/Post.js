import './Post.css'
import { FiHeart } from "react-icons/fi";
import { FaRegComment } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { BsBookmark } from "react-icons/bs";
import { VscSmiley } from "react-icons/vsc";
import { FiMoreHorizontal } from "react-icons/fi";






export default function Post(props) {
    return(
        <div className='Post'>
            <div className="BarraSuperior">
                <div className="ImagemPerfilAutor">
                    <img alt="imagem de perfil" src={props.imagemPerfil}/>
                    
                
                </div>
           

                <div className="NomePerfilAutor">{props.nomePerfil}</div>
                <div className="MenuBarraSuperior">• 6 min</div>

                <div className='icone-mais'>
                <div className='iconmore1'>
                    <div className='iconsmore'>
                        <div className="iconmore3"><FiMoreHorizontal size={20}/> </div>
                         
            </div>
                </div>
            </div>

            </div>
            <div className="ConteudoPost"><img alt="imagem de super-héroi" src={props.imagemPost}/></div>
            <div className='conteuroInferior'>
                
                <div className='icons-1'>
                    <div className='icons'>
                        <div className="icon"><FiHeart size={20}/> </div>
                        <div className="icon"><FaRegComment size={20}/> </div>
                        <div className="icon"><FiSend size={20}/> </div>
                        <div className="icon2"><BsBookmark size={20}/> </div>
                  
            </div>
                </div>
            </div>
       
            <div className='Curtidas'>
            187.033 curtidas
                </div>


             <div className='coment'>
                <div className='usuario1'>
                Usuario
                </div>


                <div className='Comentarios'>
                Eu comentei aqui!
                </div>
                </div>


                <div className='VerTodos'>
                Ver todos os 646 comentários
                </div>
              
              <input className='BarraPesquisa' placeholder="Adicione um comentário..."/>

        </div>

    )
}