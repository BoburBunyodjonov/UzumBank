import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Menu from "../components/Menu"

const layout = () => {
  return (
    <>
            <Menu/>
            <Navbar/>
            <Outlet/>

    </>
  )
}

export default layout