import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"
import './UniqFlag.css'

const UniqFlag = ({flags}) => {

    const {id} = useParams()
    const navigate = useNavigate()

    return(
        <>
            <div className='uniqFlag'>
                <h1 className="uniqH1">{flags.find(flag => flag.id === id).title}</h1>
                <img className="uniqImg" src={flags.find(flag => flag.id === id).img} alt="flag"/>
                <p className="uniqP">{flags.find(flag => flag.id === id).about}</p>
                <button className='uniqBackBtn' onClick={() => navigate(-1)}>Back</button>
            </div>
        </>
    )
}
export default UniqFlag