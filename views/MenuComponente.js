import React, { Component } from 'react';

class MenuComponente extends Component {
  render() {
    const {props} = this.props;
    return (
      <div>hola {props.nombre}</div>
    );
  }
}

export default MenuComponente;
