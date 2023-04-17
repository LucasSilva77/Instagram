import './Story.css'

function Story(props) {
    return (
    <div className='Story'>
        <div className='imgStory'>
            <img alt="" src={props.imgPerfil} />
        </div>
        <div className='nomeStory'>
            <span>{props.nomeDaConta}</span>
        </div>
    </div>
    )
}

export default Story;