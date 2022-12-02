import { NavLink, useNavigate } from "react-router-dom"
import './NavBar.css'
const NavBar = ({search, setSearch}) => {
    
    const navigate = useNavigate()

    return(
        <>
        <header>
            <nav>
                <input
                    type='text' 
                    placeholder="Search"
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                />
                <ul>
                    <li><NavLink to='/' end>Main</NavLink></li>
                    <li><NavLink to='/flags'>Flags</NavLink></li>
                    <li><NavLink to='/about'>About</NavLink></li>
                </ul>
                
            </nav>
            <button onClick={() => {
                navigate(-1)
            }}>
                &#8592;	back
            </button>
            <button onClick={() => {
                navigate(1)
            }}>
                next &#8594;
            </button>
            <hr/>
        </header>
        </>
    )
}
export default NavBar