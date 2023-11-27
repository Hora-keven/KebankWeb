import { createContext, useState } from "react";

export const InformationsContext = createContext()

export const InformationProvider = ({children}) =>{
    const [value, setValue] = useState("")
    const [userAccount, setUserAccount]= useState({})
    const [user, setUser] = useState({})

    const changeValue = (teste)=> {
        setValue(teste)

    }
    
    function userLog(id, nameOrCompanyName, email, cpfCnpj){

        setUser({
            id:id,
            nameOrCompanyName:nameOrCompanyName,
            email:email,
            cpfCnpj:cpfCnpj

        })

    }

    const informationsAccountUser = (id, agency, numberVerificate, number, limit )=>{
        setUserAccount({
            id:id,
            agency:agency,
            numberVerificate:numberVerificate,
            number:number,
            limit:limit

        })
    }
    return (
        <InformationsContext.Provider value={{value, user, changeValue, userAccount, userLog, informationsAccountUser}}>
            {children}
        </InformationsContext.Provider>
    )
}