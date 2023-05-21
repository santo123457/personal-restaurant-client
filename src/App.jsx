import './App.css'
import { routes } from './Components/Routes/Routes/Routes'
import { RouterProvider } from 'react-router-dom'

function App() {

  return (
    <>
     <RouterProvider router={routes}></RouterProvider>
    </>
  )
}

export default App
