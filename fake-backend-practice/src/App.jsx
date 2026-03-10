import { useState, useEffect } from 'react'
import './App.css'
import UserForm from './components/UserForm'
import UsersList from './components/UsersList'
import { getAllData } from './services/get'

function App() {

  const [users, setUsers] = useState([])

  const fetchUsers = async () => {
    const usersList = await getAllData()
    setUsers(usersList)
  }

  useEffect(() => {
    const getData = async () => {
      await fetchUsers()
    }

    getData()
  }, [])

  return <>
  <UserForm fetchUsers={fetchUsers}/>
  <UsersList users={users} setUsers={setUsers}/>
  </>
}

export default App
