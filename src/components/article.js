import Emoji from './emoji'

function Article({title, date = 'January 1, 1970', preview, read}){

    return(
        <article>
            <h3>{title}</h3>
            <small>{date}</small> <Emoji symbol="☕" number={Math.ceil(read/5)} /> <small>{read} min read</small>
            <p>{preview}</p>
            
        </article>
    )
}

    export default Article