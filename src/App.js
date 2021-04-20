import Home from './pages/Home'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ProductPage from './pages/ProductPage';
import Navbar from './components/NavBar';
import Cart from './components/Cart';
import Products from './pages/Products';
import NavMenu from './components/NavMenu';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Cart />
      <NavMenu />
      <Switch>
        <Route path="/products/:handle">
          <ProductPage />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
