import { useState, createContext } from "react";

export const MeuContexto = createContext(); // Criação do context

export const MeuContextoProvider = ({children}) => { // Criação do provedor do contexto, determina qual componente pode usufruir do contexto

    const [mensagem, setMensagem] = useState("Mensagem Inicial");

    const valorDoContexto = {
        mensagem,
        setMensagem
    }

    return (
        <MeuContexto.Provider value={valorDoContexto}>
            {children}
        </MeuContexto.Provider>
    );
};