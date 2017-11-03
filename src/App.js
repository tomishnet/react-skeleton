import React, {Component} from 'react';
// import ReactDOM from 'react-dom';
// import Game from './components/tictactoe';


const todosData = [
    {"id":"00001","task":"Wake up","complete":"false"},
    {"id":"00002","task":"Eat breakfast","complete":"false"},
    {"id":"00003","task":"Go to work","complete":"false"}
];

class TodoBox extends Component {

    render() {
        return (
        <div className="well">
            <h1 className="vert-offset-top-0">To do:</h1>
            <TodoList data={this.state.data} removeNode={this.handleNodeRemoval} toggleComplete={this.handleToggleComplete} />
            <TodoForm onTaskSubmit={this.handleSubmit} />
        </div>
        );
    }


}

class TotoList extends Component {
    render() {

    }
}

class TodoItem extends Component {
    render() {

    }
}

export default class App extends Component {
    render() {
        return <TodoBox />
    }
}