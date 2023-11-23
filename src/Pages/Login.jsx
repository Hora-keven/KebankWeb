
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useContext, useState } from "react";
import { InformationsContext } from "../context/InformationsContext";


export default function Login() {
    const {changeValue, value} = useContext(InformationsContext)
    const [teste, setTeste] = useState("")
    const [iscpfCnpj, setIsCpfCnpj] = useState(" ")
    const [noMask, setNoMask] = useState(" ")

    const handleChange = (event) => {
        setTeste(event.target.value);

    }
    const change = () =>{
        if (teste.length == 11) {
            teste = teste.replace(/(\d{3})(\d)/, "$1.$2")
            teste = teste.replace(/(\d{3})(\d)/, "$1.$2")
            teste = teste.replace(/(\d{3})(\d{1,2})$/, "$1-$2")
        
          } else {
            teste = teste.replace(/^(\d{2})(\d)/, "$1.$2")
            teste = teste.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
            teste = teste.replace(/\.(\d{3})(\d)/, ".$1/$2")
            teste = teste.replace(/(\d{4})(\d)/, "$1-$2")
          }
          changeValue(value)
          console.log(value)
    }
   
    return (
        <>
            <Header />
            <form >
                <div className="windowForm">
                    <label>
                        Digite seu CPF/CNPJ:
                        <input value={teste} maxLength={18} onChange={handleChange}  placeholder="Digite seu cpf"/>
                    </label>
                    <label>
                        Digite sua senha:
                        <input value={noMask} maxLength={18} onChange={handleChange}  placeholder="Digite sua senha"/>
                    </label>
                    <button onClick={()=>change()} type="submit">Search</button>
                </div>
            <div className="teste">
                <p>{value}</p>
            </div>
            </form>
            <Footer />
        </>

    )
}