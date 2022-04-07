import React from 'react';
import {Routes, Route} from "react-router-dom"
import {useSelector, useDispatch} from "react-redux"
import {Link} from "react-router-dom"

import {RootState} from "./type/root_reducer"
import {change_language} from "./redux/action/language"

import TopPage from "./components/TopPage"
import Profile from "./components/Profile"

import {Navbar, Nav} from "react-bootstrap"
import {Container} from "react-bootstrap"

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function App() {

  const dispatch = useDispatch()
  const language = useSelector((state: RootState) => state.language)

  return (
    <div className="App">
      <div className="top-page-navbar">
        <Navbar className="fixed-top" style={{backgroundColor: "black"}}>
          <Container>
            <Navbar.Brand
              href="#home"
              style={{color: "white"}}
            >
              <Link
                to="/"
                className="navbar-brand-title"
              >
                K Kurihara
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Nav className="justify-content-end">
              <Nav.Link
                onClick={() => dispatch(change_language("ja"))}
                style={{color: "white"}}
              >
                日本語
              </Nav.Link>
              <Nav.Link
                onClick={() => dispatch(change_language("en"))}
                style={{color: "white"}}
              >
                English
              </Nav.Link>
              <Nav.Link
                onClick={() => dispatch(change_language("zh_CN"))}
                style={{color: "white"}}
              >
                中文
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
      <Routes>
        <Route path="/" element={<TopPage/>} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
    </div>
  );
}

export default App;
