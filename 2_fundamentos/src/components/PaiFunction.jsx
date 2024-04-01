import React from 'react'
import FilhoFuncao from './FilhoFuncao'

function PaiFunction() {
    const handleChildClick = () => {
        console.log("Clicou no botão do elemente Filho")
    }

    return (
    <div>
      <FilhoFuncao onChildClick={handleChildClick}/>
    </div>
  )
}

export default PaiFunction
