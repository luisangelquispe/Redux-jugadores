import { connect } from "react-redux";
import { quitarSuplente } from "../store/jugadoresC/action";
const Suplentes =({suplentes,quitarSuplente})=>{
    return(
        <section>
            <h2>Suplentes</h2>
            <div className="suplentes">
                {
                    suplentes.map(j=>(
                        <article key={j.id} className="suplentes">
                            <div>
                                <img width={150} src={j.foto} alt={j.nombre}/>
                                <button onClick={()=>quitarSuplente(j)}>X</button>
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
        suplentes: state.reducerEntrenador.suplentes
    }
}
// const mapDispachToProps = (dispach) => {
//     return {

//     }
// }
export default connect(mapStateToProps, {quitarSuplente})(Suplentes)