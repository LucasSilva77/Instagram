import './LadoDireito.css'
import ItemMenuD from './Componentes/ItemMenuD/ItemMenuD'
import Sugestoes from './Componentes/SugestoesPerfil/Sugestoes'
import Links from './Componentes/Links/Links'
import ImgPerfil from '../LadoDireito/Imagens/perfilzola.jpg'
import sugestao1 from '../LadoDireito/Imagens/dgzada.jpg'
import sugestao2 from '../LadoDireito/Imagens/gabs.jpg'
import sugestao3 from '../LadoDireito/Imagens/MANEL GOME.jpg'
import sugestao4 from '../LadoDireito/Imagens/proalogo.jpg'
import sugestao5 from '../LadoDireito/Imagens/qgato.jpg'

function LadoDireito(){
    return(
        <div className="LadoDireito">
            <div className="PerfilD">
                <ItemMenuD nomeUsuario="rukasu.777" nomePerfil="𝕷𝖚𝖈𝖆𝖘" imgPerfil={ImgPerfil} />
            </div>
            <div className="Sugestoes">
                <div className="titulo">
                    <span className="um">Sugestões para você</span>
                    <span className="dois">Ver todas</span>
                </div>
                <Sugestoes imgPerfil={sugestao1} nomePerfil="eudg_" seguidoPor="Segue você"/>
                <Sugestoes imgPerfil={sugestao2} nomePerfil="gab.augustoz" seguidoPor="Seguido por eudg_" />
                <Sugestoes imgPerfil={sugestao3} nomePerfil="manoelgomesbr" seguidoPor="Seguido por gab.augustoz" />
                <Sugestoes imgPerfil={sugestao4} nomePerfil="instituto.proa" seguidoPor="Seguido por manoelgomesbr" />
                <Sugestoes imgPerfil={sugestao5} nomePerfil="qgatopreto" seguidoPor="Seguido por manoelgomesbr" />
            </div>
            <div className='link'>
                <Links />
            </div>
        </div>
    )
}

export default LadoDireito