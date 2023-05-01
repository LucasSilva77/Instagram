import './perfilmenu.css'
import foto from '../imagens/perfilzola.jpg'

function perfilmenu (){
    return(
        <div className='Gostoso'>
            <img src={foto} alt="imagem do perfil"></img>
            <span>perfil</span>
        </div>
    )
}

export default perfilmenu