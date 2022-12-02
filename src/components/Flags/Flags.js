import Flag from "../Flag/Flag"
import './Flags.css'
const Flags = ({flags, search}) => {

    return(
        <>
        <h1>Flags</h1>
        <div className="allFlags">
            {
                flags.filter((el) => el.title.toLowerCase().includes(search.toLowerCase())).map(flag => <Flag key={flag.id} id={flag.id} img={flag.img} about={flag.about} title={flag.title} />)
            }
        </div>
        </>
    )
}
export default Flags