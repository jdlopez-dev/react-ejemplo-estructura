import React from "react";

export default class Paginador extends React.Component {
    constructor(props){
        super(props);

        this.state = { 
            paginaActual: this.props.paginaActual || 1, 
            pagMin: this.props.pagMin || 1, 
            pagMax: this.props.pagMax || 10
        }
    }

    //Con este método aseguramos que el valor de paginaActual nunca pueda ser menor a 1
    static getDerivedStateFromProps(props, state) {
        if(state.paginaActual<state.pagMin) {
            return  { paginaActual: state.pagMin }
        } else if(state.paginaActual>state.pagMax) {
            return  { paginaActual: state.pagMax }
        }

        return null
    }

    cambiaPagina(newPage) {
        this.setState({paginaActual: newPage})
    }

    generaBotonesPaginas(){
        
        // Esta es la versión declarativa
        let listaBotones = Array.from(Array(1 + this.state.pagMax-this.state.pagMin), (e, i) => {
            return (
                <li className={this.state.paginaActual === i+this.state.pagMin ? "active" : ""} key={i}>
                    <a href="/#" className="" onClick={() => this.cambiaPagina(i+this.state.pagMin)}>{i+this.state.pagMin}</a>
                </li>
            )
        });

        console.log("genera botontes paginas")
        console.log(listaBotones)

        return listaBotones
        
    }

    render() {
        return (
            <div className="paginador">
                <ul>
                    <li className={"prev "+ (this.state.paginaActual === this.state.pagMin ? "disabled" : "")}><a href="/#" onClick={() => this.cambiaPagina(this.state.paginaActual-1)}>&lt; Anterior</a></li>
                    {
                        this.generaBotonesPaginas()
                    }
                    <li className={"prev "+ (this.state.paginaActual === this.state.pagMax ? "disabled" : "")}><a href="/#" onClick={() => this.cambiaPagina(this.state.paginaActual+1)}>Siguiente &gt; </a></li>
                </ul>
            </div>
        )
    }
}