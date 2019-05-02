import React, { Component } from 'react';

import Producto, { IProductoData } from '../Producto/Producto';
import './Productos.css';
import Buscador from '../Buscador/Buscador';

interface IProductosProps {
  productos: IProductoData[];
  busquedaProducto: (termino: string) => void;
}
class Productos extends Component<IProductosProps> {
  render() {
    const { productos } = this.props;
    return (
      <div className="productos">
        <h2>Nuestros Productos</h2>
        <Buscador busqueda={this.props.busquedaProducto} />
        <ul className="lista-productos">
          {Object.keys(productos).map((key) => (
            <Producto key={key} producto={productos[Number(key)]} />
          ))}
        </ul>
      </div>
    );
  }
}

export default Productos;
