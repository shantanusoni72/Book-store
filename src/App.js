import './App.css';
import Header from './components/header';
import Carousel from './components/carousel';
import Catelog from './components/catelog';
import Footer from './components/footer';
import Login from './components/login';
import Registor from './components/registor';
import { BrowserRouter as Router, Link, Route, Redirect } from "react-router-dom";
import Container from './components/card_external';
import About from './components/about'
import Contact from './components/contact';


function App() {
  return (
    <>
    <Router>
        <Route path="/" render={()=>
        <><Header />
        </>}></Route>

        <Route path="/login" render={()=>
        <> <Login />
        </>}></Route>

        <Route path="/register" render={()=>
        <> <Registor />
        </>}></Route>

        <Route path="/shop/book/fictional" render={()=>
        <> 
        </>}></Route>

        <Route path="/shop/book/selfhelp" render={()=>
        <>
        </>}></Route>

        <Route path="/contactus" render={()=>
        <> <Header value={true} /> < Contact/>
        </>}></Route>

        <Route path="/shop/book/doc" render={()=>
        <>
        </>}></Route>
        <Footer />

        <Route path="/shop/book/contact" render={()=>
        <> <Container /> <Footer />
        </>}></Route>

        <Route path="/shop/book/about" render={()=>
        <> <About /> <Footer />
        </>}></Route>
      </Router>
    </>
  );
}

export default App;
