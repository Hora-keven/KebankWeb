import { Link } from "react-router-dom";
import Kebank from "./SloganKebank";

function Header({ enable }) {

    return (

        <div className="header">
            <Kebank activeSlogan={true}/>
            <div className="pages">
                <li>
                    <ul>
                        {enable == true ? <Link to="/login">Entrar</Link> : ""}
                    </ul>
                </li>
              

            </div>
        </div>

    )
}
export default Header;