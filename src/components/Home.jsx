import "./Home.css"
import PaletaLista from "./PaletaLista"

function Home(){
    return (
        <div className="Home" 
            style={{margin: "15px", padding: '15px'}}> 
            <PaletaLista />
        </div>
        )
}

export default Home