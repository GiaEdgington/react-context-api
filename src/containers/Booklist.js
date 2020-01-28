import React, { Component } from 'react';
import Book from './Book';
import ThemeChangeButton from './ThemeChangeButton';


class Booklist extends Component {

  render() { 
    return (
      <div>
        <h1>Clifford the Big Red Dog</h1>
        <Book />
        <ThemeChangeButton />
      </div>

    );
  }
}
 
export default Booklist;