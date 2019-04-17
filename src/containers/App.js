import React, { Component } from 'react';
import './App.css';
import Person from '../Person/Person.js';  
import Cockpit from '../Cockpit/Cockpit.js';

class App extends Component {
	state = {
		person: [
			{ name: 'Max', age: '28'},
			{ name: 'Manu', age: '29'},
			{ name: 'Stephanie', age: '31'}
		],
		showPersonPane: false
	}
  
  switchNameHandler = () => {
  	//console.log("Was Clicked!!")
  	this.setState({
  		person: [
			{ name: 'sub', age: '1'},
			{ name: 'Manu', age: '1'},
			{ name: 'Stephanie', age: '1'}
		]
  	});
  }

   togglePersonHandler = ()  => {
  	const showPersonPane = this.state.showPersonPane;
  	this.setState({
  		showPersonPane : !showPersonPane
  	})
  }

  deletePersonHandler = (personIndex) => {
  	const person = [...this.state.person]; 

  	person.splice(personIndex, 1);

  	this.setState({
  		person: person
  	});
  }

  componentDidMount() {
    console.log("Component Did Mount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  componentDidUpdate() {
    console.log("component Did Update");
  }

 	render() {
 		const style = {
 			background: 'green',
 			color: 'white',
 			font: 'inherit',
 			padding: '8px',
 			cursor: 'pointer'
 		};

 		let persons = null;	

  		if (this.state.showPersonPane) {
  			persons = (
  				<div>
      				{
      					this.state.person.map((a, index) => {
      						return <Person click={() => this.deletePersonHandler(index)} name={a.name} age={a.age}/>
      					})
      				}
      			</div>
  			);
  			style.background = 'red';
  		}

    	return (
      		<div className="App">
      		<button style={style} onClick={this.togglePersonHandler}>toggle person </button>
      		<Cockpit title={this.props.appTitle}
          			   showPersons={this.state.showPersons}
          			   person={this.state.person}
          			   clicked={this.togglePersonsHandler}/>
      		{persons}
      		</div>
    	);
  }
}

export default App;

 