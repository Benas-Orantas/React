import './App.css'
import Transactions from './components/Transactions'
import transactions from './transactions.json'

function App() {
  return <Transactions transactions={transactions}/>
}

export default App
