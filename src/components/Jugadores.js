import { connect } from "react-redux";
import { agregarTitular,agregarSuplente } from "../store/jugadoresC/action";

const Jugadores = ({ jugadores,agregarTitular,agregarSuplente }) => {
    return (
        <section>
            <h2>Jugadores</h2>
            <div className="contenedor-jugaddores">
                {
                    jugadores.map(j => (
                        <article key={j.id}>
                            <img width={150} src={j.foto} alt={j.nombre} />
                            <h3>{j.nombre}</h3>
                            <div>
                                <button onClick={()=>agregarTitular(j)}>Titular</button>
                                <button onClick={()=>agregarSuplente(j)}>Suplente</button>
                            </div>
                        </article>
                    ))
                }
            </div>
        </section>
    );
}

const mapStateToProps = state => {
    return {
        jugadores: state.reducerEntrenador.jugadores
    }
}
// const mapDispachToProps = (dispach) => {
//     return {

//     }
// }
export default connect(mapStateToProps, {agregarTitular,agregarSuplente})(Jugadores)