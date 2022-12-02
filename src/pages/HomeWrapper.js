import React from "react"
import NavBar from "../components/NavBar/NavBar"
import { Outlet } from "react-router-dom"

const HomeWrapper = ({search, setSearch}) => {

    return(
        <>
            <NavBar search={search} setSearch={setSearch} />
            <Outlet />
        </>
    )
}
export default HomeWrapper