export function Gun(props) {
    return (
        <button
            style={{
                backgroundImage: `url(${props.img})`,
            }}
            className={"gun "+props.gnum}
            onClick={props.handleClick}
        >
        </button>
    )
}