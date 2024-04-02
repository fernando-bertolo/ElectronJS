import {useReducer} from 'react'

const estadoInicial = {contador: 0};


function reducer(estado, acao) {
    switch (acao.tipo){
        case "incrementar":
            return {contador: estado.contador + 1}
        case "decrementar":
            return {contador: estado.contador - 1}
        case "resetar":
            return {contador: 0}
        default:
            throw new Error("Ação não suportada");
    }
}


const Contador = () => {
    //Inicializar o useReducer com estado inicial e função modificadora

    const [estado, dispatch] = useReducer(reducer, estadoInicial)

  return (
    <div>
        <h2>UseReducer</h2>
        <p>Contagem {estado.contador}</p>
        <button onClick={() => dispatch({tipo: "incrementar"})} style={{backgroundColor: "pink", margin: "10px"}}>Incrementar</button>
        <button onClick={() => dispatch({tipo: "decrementar"})} style={{backgroundColor: "pink", margin: "10px"}}>Decrementar</button>
        <button onClick={() => dispatch({tipo: "resetar"})} style={{backgroundColor: "pink"}}>Resetar</button>
      
    </div>
  )
}

export default Contador
