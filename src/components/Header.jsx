import { Link } from "react-router-dom";
function Header() {
    return (

        <div className="header">
            <div className="slogan">
                <Link to="/">
                <div className="kebank">
                    <h1 id='firstName'>Ke</h1>
                    <h1 id='secondName'>Bank</h1>
                </div>
                </Link>
            
                <p id="mensagemSlogan">O banco que facilita</p>
            </div>
            <div className="pages">
                <ul>
                <Link to="/conta">Abra sua conta</Link>
                </ul>
            </div>
        </div>

    )
}
export default Header;