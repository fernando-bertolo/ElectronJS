import {useState} from 'react'


const UserInfoForm = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        // acessar API via fetch ou axios

        console.log(name, email);
    }


    return (
    <>
        <form onSubmit={handleSubmit}>
            <input type='text' value={name} onChange={(event) => setName(event.target.value)} placeholder='Digite o seu nome'/>
            <input type='text' value={email} onChange={(event) => setEmail(event.target.value)} placeholder='Digite o seu email'/>
            <button type='submit'>Enviar</button>
        </form>
    </>
  )
}

export default UserInfoForm
