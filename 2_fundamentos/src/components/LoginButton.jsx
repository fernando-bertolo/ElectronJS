import React from 'react'

function LoginButton({loggedIn}) {
    // Entrar -> deslogado
    // Sair -> Logado

  return (
    <div>
      {loggedIn ? <button>Sair</button> : <button>Entrar</button>}
    </div>
  )
}

export default LoginButton
