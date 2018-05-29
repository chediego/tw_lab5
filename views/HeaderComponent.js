import React, { Component } from 'react';
import { hydrate } from "react-dom"
import { Alert } from 'react-bootstrap';
class HeaderComponent extends Component {
  render() {
    const nav ={
      width : '100%',
      margin: 'auto'
    }
    const ul ={
      background: 'gray',
      width: '100%',
      listStyle:'none'
    };
    const li = {
      float: 'left',
      position: 'relative',
      width:'auto'
    };
    const a = {
      background: '#30A6E6',
    	color: '#FFFFFF',
    	display: 'block',
    	padding: '10px 25px',
      textAlign: 'center',
      textDecoration: 'none'
    };
    return (

      <nav style={nav}>
              <ul style={ul}>
                <li style={li}><a href="/" style={a}>Index</a></li>
                <li style={li}><a href="/ligas" style={a}>Ligas</a></li>
                <li style={li}><a href="/usuarios" style={a}>Usuarios</a>
                </li>
              </ul>
            </nav>);
  }
}

export default HeaderComponent;
