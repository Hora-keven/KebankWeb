import { Link } from "react-router-dom";
import Kebank from "./SloganKebank";
import { useContext } from 'react'
import { InformationsContext } from '../context/InformationsContext'
function Header({ enable }) {
    const { userAccount, user } = useContext(InformationsContext)

    return (

        <div className="header">
            <Kebank />
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