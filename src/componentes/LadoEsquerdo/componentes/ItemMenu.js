export default function ItemMenu(props) {
    return (
        <span>
            <span className='icone'>{props.icone}</span>
            <span className='texto'>{props.texto}</span>
        </span>
    )
}