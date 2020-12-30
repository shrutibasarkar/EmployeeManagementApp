
import './App.css';
import {  Container, Row, Col } from "reactstrap";
import { ToastContainer } from "react-toastify";
import Home from './components/Home';
import Header from './components/Header';
import AllEmployees from './components/AllEmployees';
import AddEmployee from './components/AddEmployee';
import Menu from './components/Menu';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Contact from './components/contact';
import About from './components/About';

function App() {
  
  return (
    <div>
      <Router>
        <ToastContainer />
        <Container>
          <Header />
          <Row>
            <Col md={4}>
              <Menu />
            </Col>
            <Col md={8}>

              <Route path="/" component={Home} exact />
              <Route path="/add-employee" component={AddEmployee} exact />
              <Route path="/view-employees" component={AllEmployees} exact />
              <Route path="/contact" component={Contact} exact />
              <Route path="/about" component={About} exact />

            </Col>
          </Row>
        </Container>
      </Router>

    </div>
  );
}

export default App;
