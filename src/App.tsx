import './App.css'
import { Card } from './components/Card'
import { films } from './components/films'

function App() {

  return (
    <>
      {
        films.map(film => <Card film={film}/>)
      }
    </>
  )
}

export default App
