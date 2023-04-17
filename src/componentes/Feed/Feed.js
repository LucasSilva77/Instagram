import './Feed.css';
import imgExemplo from './imagens/spiderman.jpg'
import imgExemplo2 from './imagens/haranha.jpg'
import imgExemplo3 from './imagens/miranha.jpg'
import imagemPerfilExemplo01 from '../Feed/imagens/pfp.jpg'

import Post from './componentes/Post/Post'

export default function Feed() {
    return (
        <div className="Feed">
            <Post 
            nomePerfil="Gabriel" 
            imagemPost={imgExemplo}
            imagemPerfil={imagemPerfilExemplo01}
            />

            <Post 
            nomePerfil='Tatu' 
            imagemPost={imgExemplo2}
            imagemPerfil={imagemPerfilExemplo01}
            />
            <Post 
            nomePerfil='Dudu' 
            imagemPost={imgExemplo3}
            imagemPerfil={imagemPerfilExemplo01}
            />
        </div>
    )
}