import React from "react";
import "./Paginador.css";

export default class Paginador extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      paginaActual: this.props.paginaActual || 1,
      pagMin: this.props.pagMin || 1,
      pagMax: this.props.pagMax || 10,
    };
  }

  //Con este método aseguramos que el valor de paginaActual nunca pueda ser menor a 1
  static getDerivedStateFromProps(props, state) {
    if (state.paginaActual < state.pagMin) {
      return { paginaActual: state.pagMin };
    } else if (state.paginaActual > state.pagMax) {
      return { paginaActual: state.pagMax };
    }

    return null;
  }

  cambiaPagina(newPage) {
    this.setState({ paginaActual: newPage });
  }

  generaBotonesPaginas() {
    return Array.from(
      Array(1 + this.state.pagMax - this.state.pagMin),
      (e, i) => {
        return (
          <li
            className={
              this.state.paginaActual === i + this.state.pagMin ? "active" : ""
            }
            key={i}
          >
            <button
              className=""
              onClick={() => this.cambiaPagina(i + this.state.pagMin)}
            >
            
              {i + this.state.pagMin}
            </button>
          </li>
        );
      }
    );
  }

  render() {
    return (
      <div className="paginador">
        <ul>
          <li
            className={
              "prev " +
              (this.state.paginaActual === this.state.pagMin ? "disabled" : "")
            }
          >
            <button
              onClick={() => this.cambiaPagina(this.state.paginaActual - 1)}
            >
              &lt; Anterior
            </button>
          </li>
          {this.generaBotonesPaginas()}
          <li
            className={
              "prev " +
              (this.state.paginaActual === this.state.pagMax ? "disabled" : "")
            }
          >
            <button
              onClick={() => this.cambiaPagina(this.state.paginaActual + 1)}
            >
              Siguiente &gt;{" "}
            </button>
          </li>
        </ul>
      </div>
    );
  }
}
