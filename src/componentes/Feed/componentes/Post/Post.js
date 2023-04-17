import './Post.css'

export default function Post(props) {
    return(
        <div className='Post'>
            <div className="BarraSuperior">
                <div className="ImagemPerfilAutor">
                    <img alt="imagem de perfil" src={props.imagemPerfil}/>
                </div>

                <div className="NomePerfilAutor">{props.nomePerfil}</div>
                <div className="MenuBarraSuperior">...</div>
            </div>
            <div className="ConteudoPost"><img alt="imagem de super-héroi" src={props.imagemPost}/></div>
        </div>

    )
}