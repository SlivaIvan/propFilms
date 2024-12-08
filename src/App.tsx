import './App.css'
import { Card } from './components/Card'
import { films } from './components/films'

function App() {

  return (
    <div>
      {
        films.map(film => <Card film={film}/>)
      }
    </div>
  )
}

export default App
