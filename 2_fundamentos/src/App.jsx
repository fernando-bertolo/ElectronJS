import Welcome from './components/Welcome';
import BomDia from "./components/BomDia";
import './App.css';
import Pai from './components/Pai';
import Descricao from './components/Descricao';
import Cachorro from './components/Cachorro';
import Counter from './components/Counter';
import UserInfoForm from './components/UserInfoForm';
import Button from './components/Button';
import PaiFunction from './components/PaiFunction';
import FilhoFuncao from './components/FilhoFuncao';
import Form from './components/Form';
import RenderCondicional from './components/RenderCondicional';
import LoginButton from './components/LoginButton';
import Warning from './components/Warning';
import NumberList from './components/NumberList';
import BotaoEstilizado from './components/BotaoEstilizado';
import BotaoAzul from './components/BotaoAzul';
import Greeting from './components/Exercicios/Greeting';
import Contador from './components/Exercicios/Contador';
import TaskList from './components/Exercicios/TaskList';

function App() {

  return (
    <>
      <Welcome/>
      <BomDia/>
      {/* Componente Dentro de Componente */}
      <Pai/>
      {/* Props */}
      <Descricao nome="Fernando" idade={30}/>
      {/* Desestruturação de Props */}
      <Cachorro nome="Jully" raca="Vira-lata"/>
      {/* useState -> hook */}
      <Counter/>
      {/* Múltiplos estados */}
      <UserInfoForm/>
      {/* Eventos */}
      <Button/>
      {/* Passando funções de manipulação de eventos como props */}
      <PaiFunction/>
      {/* Eventos de form */}
      <Form/>
      {/* Renderização condicional */}
      <RenderCondicional user="Fernando"/> 

      {/* Expressão ternária */}
      <LoginButton loggedIn={true}/>
      <LoginButton loggedIn={false}/>

      {/* Render nulo */}
      <Warning warning={null}/>

      {/* Listas e chaves */}
      <NumberList numbers={[1,2,3,4,5]}/>

      {/* Estilos por atributos */}
      <BotaoEstilizado/>

      {/* Estilos Globais */}
      <BotaoAzul/>

      {/* Exercicios  */}
      <Greeting name="João"/>
      <Contador/>
      <TaskList task={[{text: "Comprar leite"}, {text: "Comprar coca"}]}/>

    </>
  )
}

export default App
