import './Stories.css';
import Story from './componentes/Story';
import FotoPerfil from './imagens/pfp.jpg';

function Stories() {
    return(
        <div className="Stories">
            <Story imgPerfil={FotoPerfil} nomeDaConta="gb.araujo" />
            <Story imgPerfil={FotoPerfil} nomeDaConta="gb.araujo" />
            <Story imgPerfil={FotoPerfil} nomeDaConta="gb.araujo" />
            <Story imgPerfil={FotoPerfil} nomeDaConta="gb.araujo" />
            <Story imgPerfil={FotoPerfil} nomeDaConta="gb.araujo" />
            
        </div>
    )
}

export default Stories;