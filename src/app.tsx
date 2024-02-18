import type { Component } from 'solid-js';
import { Router, Route } from '@solidjs/router';
import Home from '../pages/Home';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import '../css/index.css';

const App: Component = () => {
  return (
    <>
    <Nav />
    <Router>
      <Route path={"/"} component={Home} />
    </Router>
    <Footer />
    </>
  );
};

export default App;
