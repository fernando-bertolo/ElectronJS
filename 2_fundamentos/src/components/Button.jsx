import React from 'react'

const Button = () => {
    
    const handleClick = (event) => {
        console.log("Clicou")
    }
    
    return (
    <div>
      <button onClick={handleClick}>Clique em mim</button>
    </div>
  )
}

export default Button
