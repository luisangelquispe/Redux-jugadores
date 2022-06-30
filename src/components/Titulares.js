import { connect } from "react-redux";
import { quitarTitular } from "../store/jugadoresC/action";
const Titulares =({titulares,quitarTitular})=>{
    return(
        <section>
            <h2>Titulares</h2>
            <div className="cancha">
                {
                    titulares.map(j=>(
                        <article key={j.id} className="titulares">
                            <div>
                                <img width={150} src={j.foto} alt={j.nombre}/>
                                <button onClick={()=>quitarTitular(j)}>X</button>
                            </div>
                            <p>{j.nombre}</p>
                        </article>
                    ))
                }
            </div>
        </section>
    );
}
const mapStateToProps = state => {
    return {
        titulares: state.reducerEntrenador.titulares
    }
}
// const mapDispachToProps = (dispach) => {
//     return {

//     }
// }
export default connect(mapStateToProps, {quitarTitular})(Titulares)