import './styles.css';

import { Card } from '../../components/Card'

function Home() {

  function handleNameChange(name) {
    console.log(name)
  }

  return (
    <div className='container'>
       <h1>Lista de Presença</h1>
       <input type="text" placeholder='Digite o nome...' />
       <button type='button'>Adicionar</button>

       <Card name="Patrique" time="16:35:35" />
       <Card name="Lorena" time="13:30:35" />
       <Card name="Tais" time="08:30:35" />
    
    </div>  
  )
}

export default Home
