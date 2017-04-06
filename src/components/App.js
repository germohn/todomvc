import React, { Component } from 'react';

class ToDoListInput extends Component{
  constructor(props){
    super(props);

    this.state = {
      taskName: "",
      done: false
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.handleTaskNameChange = this.handleTaskNameChange.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
  }

  handleTaskNameChange(event) {
    this.setState({taskName: event.target.value});
  }

  handleCheckboxChange(event){
   // debugger;
    this.setState({done: event.target.checked});
  }

  onSubmit(event){
    event.preventDefault();
 //  debugger;
    this.props.onSubmit({
      taskName: this.state.taskName, 
      done:this.state.done
    });
    this.setState(
      {taskName: ''
      
      }
    );
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
            onChange= {this.handleTaskNameChange}
          />
          <lable>done?</lable>
          <input 
          type = "checkbox"
          value = {this.state.done}
          onChange = {this.handleCheckboxChange}
          />
          <input type="submit" value="add"/>
        </form>
      </div>
    );
  }
}

const ToDoTask = (props) =>{
  var name = props.done ?
  props.taskName : 
  <span style ={{color: "red"}}>
  {props.taskName}
  </span>
  console.log(props.taskName);
  console.log(props.done);
  return(
    <li>{name}</li>
    );
}



const ToDoList = ({tasks}) => {

  const taskElements = tasks.map((task) => {
   // console.log(task.done);
    return(
    
      <ToDoTask taskName = {task.taskName} 
          done = {task.done} 
          key={task.id}>
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
        {taskName: "test", done: true , id:1},
        {taskName: "test2", done: true , id:2},
        {taskName: "test2", done: false , id:3}
      ]
    };

    this.handleTaskSubmit = this.handleTaskSubmit.bind(this);
  }
  handleTaskSubmit(task) {
    const lastTask = this.state.tasks[this.state.tasks.length -1];
    debugger;
    this.setState({
      tasks: this.state.tasks.concat({
        taskName: task.taskName, 
        done: task.done, 
        id:lastTask.id +1})
    });
  }

  render(){
    return(
      <div>
        <h1>ToDo Tasks</h1>
        <ToDoListInput onSubmit={this.handleTaskSubmit} />
        <ToDoList tasks={this.state.tasks} />
      </div>
      );
  }
}

export default App ;
