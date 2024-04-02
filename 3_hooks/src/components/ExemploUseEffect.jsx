import {useEffect, useState} from 'react'

const ExemploUseEffect = () => {


    const [contador, setContador] = useState(0)

    // Executar algo, baseado em algo
    // Pode ser a mudança de um valor, carregamento da página
  
    useEffect(() => {
      document.title =  `Você clicou ${contador} vezes`;
    });
    return (
    <div>
      <h2>UseEffect</h2>
      <p>Você clicou {contador} vezes</p>
      <button onClick={() => setContador(contador + 1)}>Click</button>
  
    </div>
  )
}

export default ExemploUseEffect
