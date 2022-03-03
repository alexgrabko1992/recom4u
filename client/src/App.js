import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AppRouters } from "./components/AppRouters";
import { Container } from "react-bootstrap";
import { NavBar } from "./components/NavBar";

const App = () => {
  return (
    <Router>
      <Container fluid>
        <NavBar />
        <AppRouters />
      </Container>
    </Router>
  );
};

export default App;
