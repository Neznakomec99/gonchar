import React from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import './app.css';

const App = () =>{
	const todoData = [
	{label:'Create React App', important : true, id:1, done:true},
	{label:'Tell girlfriend', important : true, id:2, done:true},
	{label:'Have a lunch', important : false, id:3, done:true}
	];
	return (
		<div className="container">
			<AppHeader toDo={1} done={3}/>
			<SearchPanel />
			<TodoList todos={todoData}/>	
		</div>
	);
};

export default App;