import { Link } from "react-router-dom";
import Kebank from "./SloganKebank";
function Header() {
    return (

        <div className="header">
            <Kebank />
            <div className="pages">
                <li>
                    <ul>
                        <Link to="/login">Entrar</Link>
                    </ul>

                </li>

            </div>
        </div>

    )
}
export default Header;