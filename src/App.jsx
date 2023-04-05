import { Outlet } from "react-router-dom"
import Header from "./components/Header"

function App() {
  return (
    <div className='container mx-auto'>
     <Header></Header>
     <Outlet></Outlet>
    </div>
  )
}

export default App
