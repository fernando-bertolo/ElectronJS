import React from 'react'

const NumberList = ({numbers}) => {

    //Estruturas de loop - for, while
    //Metodos array - filter, map, reduce

    // chaves - key
    // identificador unico para cada elemento
  return (
    <ul>
      {numbers.map((numbers, index) => (
        <li key={index}>
            {numbers}
        </li>
      ))}
    </ul>
  )
}

export default NumberList
