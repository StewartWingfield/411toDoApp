import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: "",
      listOfTodos: [],
    };
  }

  /*   click = () => {
    this.setState({
      isClicked: !this.state.isClicked,
    });
  }; */

  handleChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      listOfTodos: [...this.state.listOfTodos, this.state.inputValue],
    });
    this.setState({ inputValue: "" });
  };

  deleteTodo = (index) => {
    this.setState({
      ...this.state,
      listOfTodos: this.state.listOfTodos.filter((_, i) => i !== index),
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={this.state.inputValue}
              onChange={this.handleChange}
            ></input>
            <button type="submit">Add to list</button>
          </form>
          <ol>
            {this.state.listOfTodos.map((todo, index) => {
              return (
                <li key={index}>
                  {todo}
                  <button onClick={() => this.deleteTodo(index)}>Delete</button>
                </li>
              );
            })}
          </ol>

          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
