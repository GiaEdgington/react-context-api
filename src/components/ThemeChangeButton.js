import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class ThemeChangeButton extends Component {
  static contextType = ThemeContext;

  render() { 
    return ( 
      <button onClick={this.context.changeTheme}>Change Theme</button>
    );
  }
}
 
export default ThemeChangeButton;