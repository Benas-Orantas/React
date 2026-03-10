import { useState } from 'react'
import { useMemo } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from "./components/Main"
import { robots as robotsData } from './robots'

function App() {

  const [robots, setRobot] = useState(
    robotsData.map((r) => ({
      ...r,
    }))
  )

  const reserveRobot = (id) => {
    setRobot((arr) => {
      return arr.map((r) => (r.id === id ? {...r, reserved : true } : r))
    }) 
  }

  const [search, setSearch] = useState("")

  const filtered = useMemo(() => {
    const f = search.toLowerCase().trim();
    return robots.filter((r) => r.name.toLowerCase().includes(f))
  }, [robots, search])

  return (
    <div className="page_style">
      <Header search={search} setSearch={setSearch}/>
      <Main robots={filtered} onReserve={reserveRobot}/>
      <Footer />
    </div>
  )
}

export default App
