import React, { Component } from 'react';
import { ThemeContext } from './contexts/ThemeContext';

export default class PageContent extends Component {
   static contextType = ThemeContext;
   render() {
      const { isDarkMode } = this.context;

      return (
         <div
            style={{
               width: '100%',
               height: '100vh',
               backgroundColor: isDarkMode ? 'black' : 'white',
            }}
         >
            {this.props.children}
         </div>
      );
   }
}
