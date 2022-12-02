import React from "react"
import { Link } from "react-router-dom"
import './Error.css'

const Error = () => {
const styleImg = {
    height: '100vh',
    width: '90%',
}

    return(
        <>
            <Link className="errorBtn" to='https://musheghmartirosyan.github.io/Flags-App/' > &#8592; Go Back To The Homepage</Link>
            <p className="errorTxt">This Page Isn't Available</p>
            <img className="errorImg"  src="https://i.pinimg.com/originals/0e/c0/db/0ec0dbf1e9a008acb9955d3246970e15.gif"/>
        </>
    )
}
export default Error