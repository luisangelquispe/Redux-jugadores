import { connect } from "react-redux";

const Jugadores = ({ jugadores }) => {
    return (
        <section>
            <h2>Jugadores</h2>
            <div className="contenedor-jugaddores">
                {
                    jugadores.map(j => (
                        <article>
                            <img width={150} src={j.foto} alt={j.nombre} />
                            <h3>{j.nombre}</h3>
                            <div>
                                <button>Titular</button>
                                <button>Suplente</button>
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
const mapDispachToProps = (dispach) => {
    return {

    }
}
export default connect(mapStateToProps, mapDispachToProps)(Jugadores)