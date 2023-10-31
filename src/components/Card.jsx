

export default function Card({title, content, img}){
    return(
        <div className="card">
            <img src={img}/>
            <h1>{title}</h1>
            <div className="textoCard">
                <p>{content}</p>
            </div>
         
        </div>
    )
}