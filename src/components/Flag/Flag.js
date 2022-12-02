import React from "react";
import './Flag.css'
import { useNavigate } from "react-router-dom";


const Flag = ({title, img, about, id}) => {

    const navigate = useNavigate()

    return(
        
        <div className="flagContenet" onClick={() => navigate(`/flags/${id}`)}>
            <h2>{title}</h2>
            <img  src={img} style={{width: '250px'}} />
            <p>{about.slice(0, 50)}...</p>
            {/* <button> Learn More </button> */}
        </div>
    )
}
export default Flag