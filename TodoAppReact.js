//JS and CSS COde



import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import './style.css';

let id = 0;
const Todo = (props) => (
  <li>
    <button onClick={props.onDelete}>Delete</button>
    <span> {props.todo.text}</span>
  </li>
);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: [],
    };
  }

  deleteTodo = (id) => {
    this.setState({
      todo: this.state.todo.filter((todo) => todo.id !== id),
    });
  };

  addTodo = () => {
    const task = prompt('Enter Todo');
    this.setState({
      todo: [...this.state.todo, { text: task, id: id++ }],
    });
  };

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <p>Task Count :{this.state.todo.length}</p>
        <button onClick={() => this.addTodo()}>Add Task</button>
        <ul>
          {this.state.todo.map((todo) => (
            <Todo onDelete={() => this.deleteTodo(todo.id)} todo={todo} />
          ))}
        </ul>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));








// COde for STyling the Page


// h1,
// p,
// span {
//   font-family: Verdana, Geneva, Tahoma, sans-serif;
//   color: white;
//   text-align: center;
// }

// ul {
//   list-style-type: none;
// }
// li {
//   background-color: rgba(6, 104, 250, 0.808);
//   border-radius: 5px;
//   padding: 5px;
//   width: max-content;
//   margin: 10px;
// }

// button {
//   background-color: rgb(97, 20, 220);
//   padding: 5px;
//   border-radius: 5px;
//   color: white;
//   border: none;
// }

// body {
//   background: rgb(0, 30, 163);
//   border: 5px solid white;
//   height: 100vh;
//   padding: 10px;
// }
