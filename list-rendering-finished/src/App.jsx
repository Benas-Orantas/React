import './App.css'
import Cards from './components/Cards'
import data from './data.json'
import Heading from './components/Heading'

function App() {
  return (
    <div className='h-screen flex flex-col justify-between'>
      <Heading />
      <Cards data={data}/>
    </div>
  )
}

export default App
