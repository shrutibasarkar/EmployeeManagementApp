import logo from './logo.svg';
import './App.css';
import { Button, Container, Row, Col } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import Home from './components/Home';
import Header from './components/Header';
import AllEmployees from './components/AllEmployees';
import AddEmployee from './components/AddEmployee';
import Menu from './components/Menu';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import Contact from './components/contact';
import About from './components/About';

function App() {
  const btnHandle = () => toast.success("Successfull!!");
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
