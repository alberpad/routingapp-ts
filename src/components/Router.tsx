import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Productos from './Productos/Productos';
import Nosotros from './Nosotros/Nosotros';
import Error from './Error/Error';
import infoProductos from '../datos/datos.json';
import Header from './Header/Header';
import VerProducto from './VerProducto/VerProducto';
import Navegacion from './Navegacion/Navegacion';
import Contacto from './Contacto/Contacto';

import { IProductoData } from './Producto/Producto';
interface IRouterState {
  productos: IProductoData[];
  terminoBusqueda: string;
}
class Router extends Component<{}, IRouterState> {
  state = {
    productos: [],
    terminoBusqueda: ''
  };

  componentWillMount() {
    this.setState({
      productos: infoProductos
    });
  }

  busquedaProducto = (busqueda: string) => {
    if (busqueda.length > 2) {
      this.setState({
        terminoBusqueda: busqueda
      });
    } else {
      this.setState({
        terminoBusqueda: ''
      });
    }
  };

  render() {
    let productos = [...this.state.productos];
    let resultado: any[];
    let busqueda = this.state.terminoBusqueda;
    !busqueda
      ? (resultado = productos)
      : (resultado = productos.filter(
          (producto: IProductoData) =>
            producto.nombre.toLowerCase().indexOf(busqueda.toLowerCase()) !== -1
        ));
    return (
      <BrowserRouter>
        <Header />
        <Navegacion />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Productos
                productos={resultado}
                busquedaProducto={this.busquedaProducto}
              />
            )}
          />
          <Route
            exact
            path="/productos"
            render={() => (
              <Productos
                productos={resultado}
                busquedaProducto={this.busquedaProducto}
              />
            )}
          />
          <Route exact path="/nosotros" component={Nosotros} />
          <Route
            exact
            path="/productos/:productoId"
            render={(props) => {
              let idProducto = props.location.pathname.replace(
                '/productos/',
                ''
              );
              return (
                <VerProducto
                  producto={this.state.productos[Number(idProducto)]}
                />
              );
            }}
          />
          <Route exact path="/contacto" component={Contacto} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default Router;
