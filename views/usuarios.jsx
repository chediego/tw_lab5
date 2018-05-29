var React = require('react');
import HeaderComponent from './HeaderComponent';
import ContentComponent from './ContentComponent';
import FooterComponent from './FooterComponent';

class HelloMessage extends React.Component {
  render() {
    let contenido = 'Bienvenidos a la pagina de administracion de usuarios, aqui podra ver toda la informacion de los usuarios';
    let header={
      width : '100%',
      height: '100%',
      maring: 'auto'
    }
    const usuarios = [
      'garethbale',
      'cristiano7',
      'elgato'
    ];
    return (
      <div style={header}>
        <HeaderComponent>
        </HeaderComponent>
        <ContentComponent informacion={contenido} contenido = {usuarios}>
        </ContentComponent>
        <FooterComponent>
        </FooterComponent>
      </div>);
  }
}

module.exports = HelloMessage;
