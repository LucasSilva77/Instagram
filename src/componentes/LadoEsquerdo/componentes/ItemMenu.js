
export default function ItemMenu(props) {
    return (
        <span className="item">
            <span className='icone'>{props.icone}</span>
            <span className='texto'>{props.texto}</span>
        </span>
    )
}