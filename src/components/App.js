import React, { Component } from 'react';

class ToDoListInput extends Component{
  constructor(props){
    super(props);
    this.state = {
      taskName: ""
    };
  }
  handleTaskNameChange(event) {
    this.setState(taskName: event.target.value);
  }
  onSubmit(event){
    event.preventDefault();
    this.props.onSubmit(this.state.taskName);
    this.setState({item: ''});
    React.findDOMNode(this.refs.taskName).focus();
    return;
  }  
  render(){
    return(
      <div className="todoListMain">
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            ref="task"
            placeholder="enter task"
            value={this.state.taskName}
            onChange= {this.handleTaskNameChange}
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
class ToDoList extends Component{
  render(){
    const createTask = (props) =>{
      return(
        <ToDoTask>{props}</ToDoTask>
        );
    };
    return(
      <ul>{this.props.tasks.map(createTask)}</ul>
      );
  }
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      tasks: [
        {taskName: "test"}
      ]
    };
  }
  handleTaskSubmit(taskName){
    this.setState({
      tasks: this.state.tasks.concat([taskName])
    });
  }

  render(){
    return(
      <ToDoListInput onSubmit={this.handleTaskSubmit} />,
      <ToDoList tasks={this.state.tasks} />
      );
  }
}

export default App ;
