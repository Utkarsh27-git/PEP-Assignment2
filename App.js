import './App.css'
import Counter from './Components/Cards/Counter'
import { useState } from 'react';
import { Header } from 'semantic-ui-react';
import "semantic-ui-css/semantic.min.css"

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
          <div>
          <Counter counts={count} setCounts={setCount}/>
        </div>
      
        <Header as= "h2" textAlign="center">
            Done by : Utkarsh Solanki  ( 12008171 )
        </Header>
      </>

  )
}
  export default App;