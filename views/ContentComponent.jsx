import React, { Component } from 'react';


class ContentComponent extends Component {

  render() {
    return (
      <p>
      <br></br>
      <br></br>
      <br></br>
        <h3>{this.props.informacion}
        </h3>
        <div>
      {this.props.contenido.map((contenido)=>{
        return <p>{contenido}</p>
      })}
        </div>
      </p>)
  }
}

export default ContentComponent;
