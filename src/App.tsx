import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Container from './components/Container';
import { type } from 'os';

type MyProps = {}
type MyState = {
  theme: string
}
class App extends Component<MyProps, MyState> {
  constructor(props: any) {
    super(props);
    this.state = {
      theme: "light"
    }
    this.handleThemeClick = this.handleThemeClick.bind(this);
  }

  handleThemeClick() {
    let theme;
    if (this.state.theme === "light") {
      theme = "dark";
    } else {
      theme = "light";
    }
    this.setState({
      theme: theme
    });
  }

  render() {
    return (
      <div className="">
        <Navbar theme={this.state.theme} onClick={this.handleThemeClick} />
        <Header theme={this.state.theme} />
        <Container theme={this.state.theme} />
      </div>
    );
  }
}

export default App;
