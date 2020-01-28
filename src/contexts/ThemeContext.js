import React, { Component, createContext } from 'react';

export const ThemeContext = createContext();

class ThemeContext extends Component {

    state= {
        LightTheme: true,
        light: {bg: "#eed"},
        dark: {bg: "444"}
    }

    changeTheme = () => {
        this.setState({
            LightTheme: !this.state.LightTheme
        })
    }

    render() {
        return (
            <ThemeContext.Provider value = {{...this.state, changeTheme: this.changeTheme}}>
                {this.props.children}
            </ThemeContext.Provider>
        )
    }
}

export default ThemeContext;