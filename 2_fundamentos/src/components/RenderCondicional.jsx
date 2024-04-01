import React from 'react'

function RenderCondicional({user}) {

    //se  houver usuário, exiba uma mensagem de boas vindas

  return (
    <div>
        {user && <h3>Boas vindas, {user}!</h3>
        
        }
      
    </div>
  )
}

export default RenderCondicional
