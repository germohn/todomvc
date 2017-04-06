import React, { Component } from 'react';

class ToDoListInput extends Component{
  constructor(props){
    super(props);
    this.state = {
      taskName: ""
    };
    this.onSubmit = this.onSubmit.bind(this);
  }
  handleTaskNameChange(event) {
    this.setState({taskName: event.target.value});
  }
  onSubmit(event){
    event.preventDefault();
    this.props.onSubmit(this.state.taskName);
    this.setState({item: ''});

    return;
  }  
  render(){
    return(
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="enter task"
            value={this.state.taskName}
            onChange= {this.handleTaskNameChange.bind(this)}
          />
          <input type="submit" value="add"/>
        </form>
      </div>
    );
  }
}

class ToDoTask extends Component{
  render(){
    return(
      <li>{this.props.children}</li>)
  }
}

const ToDoList = (props) => {
  const taskElements = props.tasks.map((task) => {
    return(<ToDoTask key={task.id}>
      {task.taskName}
      </ToDoTask>
      );
  });
  return(
    <ul>{taskElements}</ul>
    );
};


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      tasks: [
        {taskName: "test", id:1},
        {taskName: "test2", id:2}
      ]
    };
  }
  handleTaskSubmit(taskName){
    const lastTask = this.state.tasks[this.state.tasks.length -1];
    this.setState({
      tasks: this.state.tasks.concat({taskName, id:lastTask.id +1})
    });
  }

  render(){
    return(
      <div>
        <h1>ToDo Tasks</h1>
        <ToDoListInput onSubmit={this.handleTaskSubmit.bind(this)} />
        <ToDoList tasks={this.state.tasks} />
      </div>
      );
  }
}

export default App ;
