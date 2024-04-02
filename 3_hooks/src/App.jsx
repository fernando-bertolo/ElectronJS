import './App.css'
import ExemploUseEffect from './components/ExemploUseEffect'
import Timer from './components/Timer'
import { MeuContextoProvider } from './contexts/MeuContexto'
import ComponentFilho from './components/ComponentFilho'
import ValorDoContexto from './components/ValorDoContexto'
import Contador from './components/Contador'
import DisplayWindowSize from './components/DisplayWindowSize'

function App() {

  return (
    <>
      <h1>Hooks React JS</h1>
      {/* useEffect */}

      <ExemploUseEffect/>
      <Timer/>

      {/* useContext */}
      {/* Aplicações de pequeno e médio porte, que precisam transferir o estado entre componentes */}
      <MeuContextoProvider>
        <ValorDoContexto/>
        <ComponentFilho/>
      </MeuContextoProvider>

      {/* useReducer */}
      {/* Estados mais complexos */}
      <Contador/>

      {/* Custom hook */}
      <DisplayWindowSize/>

      {/* Slots e children props */}
    </>
  )
}

export default App
