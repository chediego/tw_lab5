var React = require('react');
import HeaderComponent from './HeaderComponent';
import ContentComponent from './ContentComponent';
import FooterComponent from './FooterComponent';
class Indexpage extends React.Component {
  constructor(){
    super();
  }
  render() {
    let contenido = 'Bienvenidos a la pagina, este es el index, presiona usuarios para ver usuarios registrados y ligas para ver las ligas de futbol';
    let header={
      width : '100%',
      height: '100%',
      maring: 'auto'
    }
    return (
      <div style={header}>
        <HeaderComponent>
        </HeaderComponent>
        <ContentComponent informacion={contenido} contenido = {[]}>
        </ContentComponent>
        <FooterComponent>
        </FooterComponent>
      </div>);
  }
}

module.exports = Indexpage;
