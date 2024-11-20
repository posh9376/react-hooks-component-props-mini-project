function Emoji ({symbol, number}){
    return(
        <span>
            {'\u2022' + symbol.repeat(number)}
        </span>
    )
}

export default Emoji