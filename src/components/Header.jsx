import { Link } from "react-router-dom";
import Kebank from "./SloganKebank";
function Header() {
    return (

        <div className="header">
            <Kebank />
            <div className="pages">
                <li>
                    <ul>
                        <Link to="/conta">Entrar</Link></ul>
                    <ul>
                        <Link to="/conta">Abra sua conta</Link>
                    </ul>
                </li>

            </div>
        </div>

    )
}
export default Header;