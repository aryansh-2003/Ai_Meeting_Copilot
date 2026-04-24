import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import store from './Store/store.js'
import { createBrowserRouter, RouterProvider, useNavigate } from 'react-router-dom'
import App from './App.jsx'
import LandingPage from './pages/LandingPage.jsx'
import UserContextProvider from './context/UserContextProvider'
import HomePage from './pages/HomePage'




  const router = createBrowserRouter(
    [
      {
        path:'/',
        element: <App/>,
        children:[
          {
            path:'/',
            element:<LandingPage/>
          } ,
          {
            path:'/Home',
            element:<HomePage/>
          } 
        ]
      }
    ]
  )

createRoot(document.getElementById('root')).render(
    <UserContextProvider>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
    </UserContextProvider>
)
