import './App.css'
import { Routes, Route } from 'react-router'
import HomePage from './pages/HomePage'
import TopicsPage from './pages/TopicsPage'
import CssPage from './pages/CssPage'
import JsPage from './pages/JsPage'
import ReactPage from './pages/ReactPage'
import HtmlPage from './pages/HtmlPage'
import PostgreSqlPage from './pages/PostgreSqlPage'
import NotFound from './components/NotFound'

function App() {

  return (
    <div className=''>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/topics" element={<TopicsPage/>}/>
        <Route path="/css" element={<CssPage/>}/>
        <Route path="/js" element={<JsPage/>}/>
        <Route path="/react" element={<ReactPage/>}/>
        <Route path="/html" element={<HtmlPage/>}/>
        <Route path="/postgresql" element={<PostgreSqlPage/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  )
}

export default App
