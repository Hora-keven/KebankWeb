import { Link } from "react-router-dom";

export default function Kebank({activeSlogan}) {
    return (
        <div className="slogan">
            <Link to="/">
                <div className="kebank">
                    <h1 id='firstName'>Ke</h1>
                    <h1 id='secondName'>Bank</h1>
                </div>
            </Link>

            <p id="mensagemSlogan">{activeSlogan == true?'O banco que facilita':""}</p>
        </div>
    )
}