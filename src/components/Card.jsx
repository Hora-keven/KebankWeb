

export default function Card({ title, content, img }) {
    return (
        <div className="card">
            <div className="imgCard">
                <img src={img} />
            </div>

            <h1>{title}</h1>
            <div className="textoCard">
                <p>{content}</p>
            </div>

        </div>
    )
}