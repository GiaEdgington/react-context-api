import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class Book extends Component {
  static contextType = ThemeContext;

  render() { 
    let styleColor = this.context.LightTheme ? this.context.light.bg : this.context.dark.bg;
    console.log(styleColor);
    return ( 
      <h2 style={{color: styleColor}}>Pirates of the Caribbean</h2>
    );
  }
}
 
export default Book;