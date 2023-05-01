import './Stories.css';
import Story from './componentes/Story';
import FotoPerfil0 from './imagens/pitas.jpg';
import FotoPerfil1 from './imagens/nubix.jpg';
import FotoPerfil2 from './imagens/vin.jpg';
import FotoPerfil3 from './imagens/mitico.jpg';
import FotoPerfil4 from './imagens/sow.jpg';
import FotoPerfil5 from './imagens/duolingo.jpg';
import FotoPerfil6 from './imagens/color.jpg';
import FotoPerfil7 from './imagens/maze.jpg';


function Stories() {
    return(
        <div className="Stories">
            <Story imgPerfil={FotoPerfil0} nomeDaConta="pitayaq" />
            <Story imgPerfil={FotoPerfil1} nomeDaConta="mubiix" />
            <Story imgPerfil={FotoPerfil2} nomeDaConta="vindiesel" />
            <Story imgPerfil={FotoPerfil3} nomeDaConta="mitico" />
            <Story imgPerfil={FotoPerfil4} nomeDaConta="snows_garage" />
            <Story imgPerfil={FotoPerfil5} nomeDaConta="duolingobrasil" />
            <Story imgPerfil={FotoPerfil6} nomeDaConta="colorpalette" />
            <Story imgPerfil={FotoPerfil7} nomeDaConta="mazesp" />
            
            
        </div>
    )
}

export default Stories;