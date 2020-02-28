import React,{ Component } from 'react';
import './todo-list-item.css';

export default class TodoListItem extends Component{
	
	state = {
		done: false,
		important: false
	};
	
	onLabelClick = () => {
		this.setState(({done}) => {
			return {
				done: !done
			};
		});
	}
	
	onMarkImportant = () => {
		this.setState(({important}) => {
			return {
				important: !important
			};
		});
	}
	
	render(){
		const { label} = this.props;
		const {done, important} = this.state;

		let ClassNames = 'todo-list-item';
		if (important){
			ClassNames+=' important';
		}
		if (done){
			ClassNames+=' done';
		}
			
		return (
		<div className="div-group-item">
			<span onClick={this.onLabelClick} className={ClassNames}>{label}</span>
			<div className="btn-list">
					<button className="delete-button btn btn-outline-danger">
						<i className="fa fa-trash" aria-hidden="true"></i>
					</button>
					<button onClick={this.onMarkImportant} className="btn btn-outline-success">
						<i className="fa fa-exclamation" aria-hidden="true"></i>
					</button>
			</div>
		</div>
		);
	}
}