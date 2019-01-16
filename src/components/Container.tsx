import React, { Component } from 'react';
import ControlSection from './ControlSection';
import type from 'os';

type MyProps = {
    theme: string
}
type MyState = {
    boxTheme: string
}
class Container extends Component<MyProps, MyState> {
    constructor(props: any) {
        super(props);
        this.state = {
            boxTheme: "boxLight"
        }
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    handleToggleClick() {
        let boxTheme;
        if (this.state.boxTheme === "boxLight") {
          boxTheme = "boxDark";
        } else {
          boxTheme = "boxLight";
        }
        this.setState({
          boxTheme: boxTheme
        });
      }

    render() {
        return (
            <ControlSection theme={this.props.theme} boxTheme={"box " + this.state.boxTheme} onClick={this.handleToggleClick} />
        );
    }
}

export default Container;