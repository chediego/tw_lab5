var React = require('react');
import HeaderComponent from './HeaderComponent';
import ContentComponent from './ContentComponent';
import FooterComponent from './FooterComponent';

class HelloMessage extends React.Component {
  render() {
    let contenido = 'Bienvenidos a la pagina ligas';
    let header={
      width : '100%',
      height: '100%',
      maring: 'auto'
    }
    const ligas = [
      'Premier league',
      'La liga',
      'Ligue 1',
      'Liga argentina',
      'Calcio A'
    ];
    return (
      <div style={header}>
        <HeaderComponent>
        </HeaderComponent>
        <ContentComponent informacion={contenido} contenido = {ligas}>
        </ContentComponent>
        <FooterComponent>
        </FooterComponent>
      </div>);
  }
}

module.exports = HelloMessage;
