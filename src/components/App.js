import React, { Component } from 'react';
import Notes from './notes/Notes';
import './App.css';

export default class App extends Component {

  render() {
    return (
      <div className="grid-wrap">
        <header id="main-header">
          <h1>Notes App</h1>
        </header>
        <main id="main-content" role="main">
          <Notes />
        </main>
        <footer id="main-footer" role="contentinfo">
          <small>&copy; 2018 this app.</small>
        </footer>
      </div>
    );
  }
}