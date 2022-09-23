import { Container } from 'react-bootstrap'
import {BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

import HomeScreen from './screen/HomeScreen'
import ProductScreen from './screen/ProductScreen'


function App() {
  return (
    <Router>
      < Header />
      <main className="py-3">
        <Container>
          <Route path='/' component={HomeScreen} exact/>
          <Route path={'/Product/:id'} component={ProductScreen}exact/>
        </Container>
      </main>
      < Footer />
    </Router>
  );
}

export default App;
