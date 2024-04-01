import React from 'react'
import { useState } from 'react'


const Contador = () => {
    
    const [contador, setContador] = useState(0);
  
    return (
        <div>
            <p>{contador}</p>
            <button onClick={() => setContador(contador + 1)}>Clique para contar</button>
        </div>
  )
}

export default Contador
