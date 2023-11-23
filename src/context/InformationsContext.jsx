import { createContext, useState } from "react";

export const InformationsContext = createContext()

export const InformationProvider = ({children}) =>{
    const [value, setValue] = useState("")

    const changeValue = (teste)=> {
        setValue(teste)

    }
    return (
        <InformationsContext.Provider value={{value, changeValue}}>
            {children}
        </InformationsContext.Provider>
    )
}