import useWindowSize from "../hooks/useWindowSize"

const DisplayWindowSize = () => {
    const {width, height} = useWindowSize();
  return (
    <div>

        <p>A lagura da tela é: {width}</p>
        <p>A altura da tela é: {height}</p>
      
    </div>
  )
}

export default DisplayWindowSize
