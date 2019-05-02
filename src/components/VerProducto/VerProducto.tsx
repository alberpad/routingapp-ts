import React, { Component } from 'react';

import { IProductoData } from '../Producto/Producto';
import './VerProducto.css';

interface IVerProducto {
  producto: IProductoData;
}
class VerProducto extends Component<IVerProducto> {
  render() {
    const { nombre, precio, imagen, descripcion } = this.props.producto;
    if (!imagen || !nombre) return null;
    return (
      <div className="info-producto">
        <div className="imagen">
          <img src={`../img/${imagen}.png`} alt={nombre} />
        </div>
        <div className="info">
          <h2>{nombre}</h2>
          <p className="precio">$ {precio} </p>
          <p>{descripcion}</p>
        </div>
      </div>
    );
  }
}

export default VerProducto;
