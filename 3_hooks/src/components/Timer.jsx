import { useEffect, useState } from 'react'

const Timer = () => {
    //setInterval, setTimedOut

    const [segundos, setSegundos] = useState(0);

    useEffect(() => {

        const intervalID = setInterval(() => {
            setSegundos((prevSegundos) => prevSegundos + 1) //Acessando o dado anterior
        }, 1000);
        
        //Limpeza de Estado
        return () => clearInterval(intervalID);
    }, []) //Array de dependências

  return (
    <div>
      Timer: {segundos} segundos.
    </div>
  )
}

export default Timer
