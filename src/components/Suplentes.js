import { connect } from "react-redux";
const Suplentes =({suplentes})=>{
    return(
        <section>
            <h2>Suplentes</h2>
            <div className="suplentes">
                {
                    suplentes.map(j=>(
                        <article className="suplentes">
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
        suplentes: state.reducerEntrenador.suplentes
    }
}
const mapDispachToProps = (dispach) => {
    return {

    }
}
export default connect(mapStateToProps, mapDispachToProps)(Suplentes)