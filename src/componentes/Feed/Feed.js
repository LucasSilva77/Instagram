import './Feed.css';
import imgExemplo from './imagens/ana.jpg'
import imgExemplo2 from './imagens/jordan.webp'
import imgExemplo3 from './imagens/supra.jpg'
import imagemPerfilExemplo01 from '../Feed/imagens/pitas.jpg'
import imagemPerfilExemplo02 from '../Feed/imagens/maze.jpg'
import imagemPerfilExemplo03 from '../Feed/imagens/sow.jpg'

import Post from './componentes/Post/Post'

export default function Feed() {
    return (
        <div className="Feed">
            <Post 
            nomePerfil="pitayaq" 
            imagemPost={imgExemplo}
            imagemPerfil={imagemPerfilExemplo01}
            />

            <Post 
            nomePerfil='Mazesp' 
            imagemPost={imgExemplo2}
            imagemPerfil={imagemPerfilExemplo02}
            />
            <Post 
            nomePerfil='snows_garage' 
            imagemPost={imgExemplo3}
            imagemPerfil={imagemPerfilExemplo03}
            />
        </div>
    )
}