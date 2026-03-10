import { Features } from 'tailwindcss'
import './App.css'
import featureFlags from './featureFlags.json'
import Featuress from './components/Featuress'

function App() {
  return <Featuress featureFlags={featureFlags}/>
}

export default App
