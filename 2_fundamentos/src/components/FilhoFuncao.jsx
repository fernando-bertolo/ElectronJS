import React from 'react'

function FilhoFuncao({onChildClick}) {
  return (
    <div>
        <button onClick={onChildClick}>Botão filho</button>
    </div>
  )
}

export default FilhoFuncao
