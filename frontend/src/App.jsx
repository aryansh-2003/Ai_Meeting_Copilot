import { useEffect, useState } from 'react'
import './App.css'
import {socket} from '../service/socket.service'
import { useDispatch, useSelector } from 'react-redux'
import {login} from './Store/authSlice'
import Outlet from './Outlet'
import { useNavigate } from 'react-router-dom'

function App() {
  const userData = useSelector(state => state.userData)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [user,setUser] = useState(JSON.parse(localStorage.getItem("userData")))

  useEffect(() => {
    if(location.pathname !== "/dm"){
    if(!userData){
      socket.on("connect",() => {
          setUser(prevUser => {
            return {
              ...prevUser,
              socketID: socket.id
            }
          })
              socket.emit("connected" ,{user,socketID:socket.id})
              console.log({user,socketID:socket.id})
      })

      if(!user) return
      dispatch(login(user))
      navigate('/home')
    }else if(userData){
      navigate('/home')
    }}
  },[userData])

 return(
  <>
    <Outlet/>
  </>
 )
}

export default App
