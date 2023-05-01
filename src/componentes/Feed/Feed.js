import './Feed.css';
import imgExemplo from './imagens/ana.jpg'
import imgExemplo2 from './imagens/jordan.webp'
import imgExemplo3 from './imagens/supra.jpg'
import imgExemplo4 from './imagens/mitiquin.jpeg'
import imgExemplo5 from './imagens/liuz.jpg'
import imagemPerfilExemplo01 from '../Feed/imagens/pitas.jpg'
import imagemPerfilExemplo02 from '../Feed/imagens/maze.jpg'
import imagemPerfilExemplo03 from '../Feed/imagens/sow.jpg'
import imagemPerfilExemplo04 from '../Feed/imagens/miticojovem.jpg'
import imagemPerfilExemplo05 from '../Feed/imagens/liu.jpg'

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
            nomePerfil='snows_' 
            imagemPost={imgExemplo3}
            imagemPerfil={imagemPerfilExemplo03}
            />

            <Post 
            nomePerfil="mitico⠀" 
            imagemPost={imgExemplo4}
            imagemPerfil={imagemPerfilExemplo04}
            />

            <Post 
            nomePerfil="liulive⠀" 
            imagemPost={imgExemplo5}
            imagemPerfil={imagemPerfilExemplo05}
            />
        </div>
    )
}