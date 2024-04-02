import {useContext} from 'react'
import { MeuContexto } from '../contexts/MeuContexto'

const ComponentFilho = () => {
  
  const {mensagem, setMensagem} = useContext(MeuContexto);
  return (
    <div>

      <h3>Componente Filho</h3>
      <button onClick={() => setMensagem("Nova Mensagem")} style={{backgroundColor: "pink"}}>Clique para mudar a mensagem</button>
      <p>A mensagem é: {mensagem}</p>
      
    </div>
  )
}

export default ComponentFilho
