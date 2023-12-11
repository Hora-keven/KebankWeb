
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useContext, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { InformationsContext } from "../context/InformationsContext";
import api from "../../api/Api";
import { useNavigate } from "react-router-dom";

//Tela aonde eu entro com dados do usuario e retorno.

export default function Login() {
    const { informationsAccountUser, userLog, cardUserLog } = useContext(InformationsContext)
    const [cpfCnpj, setCpfCnpj] = useState("")
    const [password, setPassword] = useState("")
   

  
    const getCpfCnpj = (event) => {
        setCpfCnpj(event.target.value);

    }
    const getPassword = (event) => {
        setPassword(event.target.value)
    }
    const navigate = useNavigate()

    const { handleSubmit,  formState: { errors } } = useForm();

    async function onSubmit() {
        try {

            api.post('auth/token/login/', {
                cpf_cnpj: cpfCnpj,
                password: password

            }).then(function (response) {

                localStorage.setItem("token", response.data.auth_token)

                try {
                    api.defaults.headers.Authorization = `Token ${response.data.auth_token}`
                    api.get("users/me/").then(function (response) {
                   
                        userLog(response.data.id, response.data.first_name, response.data.email, response.data.cpf_cnpj)

                    })
                    try {
                        api.get(`account/?${(cpfCnpj.length) == 11 ? 'physical_person=' + cpfCnpj : 'juridic_person=' + cpfCnpj}`).then(function (response) {
                            console.log(response.data[0])

                            informationsAccountUser(
                                response.data[0].id,
                                response.data[0].agency,
                                response.data[0].number_verificate,
                                response.data[0].number,
                                response.data[0].limit

                            )
                            cardUserLog(
                                response.data[0].account_card[0].number,
                                response.data[0].account_card[0].validity
                            )
                         
                           navigate("/informations")
                        }).catch(function (error) {
                            console.error(error)
                        })

                    } catch (error) {
                        console.error(error)
                    }
                } catch (error) {
                    console.error(error)

                }

            }).catch(function (error) {
                console.error(error);
                if (error.response.status === 400) {
                    alert("Usuário não encontrado!", "Verifique seu usuario e senha!")
                }
            });

        } catch (error) {
            console.log(error)
        }

    }
   
    return (
        <>
            <Header enable={false} />
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="windowForm">
                    <h1>Login</h1>
                    <label>
                        Digite seu CPF/CNPJ:
                        <input type="text"  value={cpfCnpj} maxLength={14} onChange={getCpfCnpj} />
                    </label>
                    <label>
                        Digite sua senha:
                        <input type="password" value={password} maxLength={30} onChange={getPassword} />
                    </label>
                    <button type="submit" >Search</button>
                </div>
              
            </form>
            <Footer />
        </>

    )
}
