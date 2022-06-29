import { connect } from "react-redux";
const Titulares =({titulares})=>{
    return(
        <section>
            <h2>Titulares</h2>
            <div className="cancha">
                {
                    titulares.map(j=>(
                        <article className="titulares">
                            <div>
                                <img src={j.foto} alt={j.nombre}/>
                                <button>X</button>
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
const mapDispachToProps = (dispach) => {
    return {

    }
}
export default connect(mapStateToProps, mapDispachToProps)(Titulares)