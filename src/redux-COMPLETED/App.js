import React, { Component } from 'react';
import './App.css';
// import connect from react-redux
import { connect } from 'react-redux'


class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>{this.props.items[0]}</h1>
      </div>
    );
  }
}

//mapStatetoProps

const mapStateToProps = state => {
  return {
    items: state.items
  }
}
//export default connect
export default connect(mapStateToProps, null)(App);
