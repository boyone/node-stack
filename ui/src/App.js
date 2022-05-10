import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

const endPoint = process.env.REACT_APP_END_POINT || 'https://localhost/api/v1/greeting';

class App extends Component {
  greeting = {};

  constructor(props) {
    super(props);
    this.state = { isLoading: true, greeting: undefined };
  }

  componentDidMount() {
    axios
      .get(endPoint, {
        headers: { 'Content-Type': 'application/json' },
      })
      .then((response) => {
        this.setState({ greeting: response.data });
        this.setState({ isLoading: false });
      });
  }
  render() {
    const { isLoading, greeting } = this.state;

    if (isLoading) {
      return <div className="App">Loading...</div>;
    }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title" id='message'>{greeting.message}, {this.props.name}</h1>
        </header>
      </div>
    );
  }
}

export default App;
