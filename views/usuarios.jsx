var React = require('react');

class HelloMessage extends React.Component {
  render() {
    return <h1>Hello {this.props.name}</h1>;
  }
}

module.exports = HelloMessage;
