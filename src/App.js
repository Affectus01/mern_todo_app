import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import CreateTodo from "./components/create-todo.component";
import EditTodo from "./components/edit-todo.component";
import TodosList from "./components/todos-list.component";

import logo from "./logo.png";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="container-fluid">
                    <nav className="navbar navbar-expand navbar-dark bg-dark">
                        <div className="navbar-nav">
                            <div className="navbar-brand d-inline-block"><a href="/"><img src={logo} width="30" height="40" alt="Todo Logo" /></a></div>
                            <div>
                                <a className="nav-item nav-link d-inline-block" href="/">Todos</a>
                                <a className="nav-item nav-link d-inline-block" href="/create">Create</a>
                            </div>
                        </div>
                    </nav>
                    <Route path="/" exact component={TodosList} />
                    <Route path="/edit/:id" component={EditTodo} />
                    <Route path="/create" component={CreateTodo} />
                </div>
            </Router>
        );
    } 
}

export default App;
