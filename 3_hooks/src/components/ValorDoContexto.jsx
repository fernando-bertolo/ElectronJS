import {useContext} from 'react'
import { MeuContexto } from '../contexts/MeuContexto'

const ValorDoContexto = () => {
    const { mensagem} = useContext(MeuContexto)

  return (
    <div>
        <h2>UseContext</h2>
        O valor do contexto é {mensagem}
      
    </div>
  )
}

export default ValorDoContexto
