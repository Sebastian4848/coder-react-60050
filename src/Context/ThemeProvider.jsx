import { createContext, useState } from "react"


// 1. Crear el cotexto
export const Theme = createContext()


//2. crear el componente que va aproveer ese contexto <NombreProvider>
const ThemeProvider = ({ children }) => {
    const [dark, setDark] = useState(false)

    return (
        <Theme.Provider value={{ dark, setDark }}>{children}</Theme.Provider>
    )
}

export default ThemeProvider
