import React from 'react';
import ReactDOM from 'react-dom';


class Add extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
		    authorIsEmpty: true,
		    textIsEmpty: true,
			agreeNotChecked: true
		};
	}

	componentDidMount() {
		ReactDOM.findDOMNode(this.refs.author).focus();
	}

	onBtnClickHandler(e) {
		e.preventDefault();
		var textEl = ReactDOM.findDOMNode(this.refs.text);

		var author = ReactDOM.findDOMNode(this.refs.author).value;
		var text = textEl.value;

		var item = [{
			author: author,
			text: text,
			bigText: '...'
		}];

		textEl.value = '';
		this.setState({textIsEmpty: true});

		window.ee.emit('News.add', item);
	}

	onFildChange(stateName, e) {
		if (e.target.value.trim().length > 0 && this.state[stateName]) {
			this.setState({[stateName]: false});
		} else if (e.target.value.trim().length == 0 && !this.state[stateName]) {
			this.setState({[stateName]: true});
		}
	}

	onCheckboxChange(e) {
		this.setState({agreeNotChecked: !this.state.agreeNotChecked});
	}

	render() {
		return (
			<form className="add cf">
				<input 
					type='text'
					className='add__author' 
					defaultValue=''
					placeholder='Author'
					onChange={this.onFildChange.bind(this, 'authorIsEmpty')}
					ref='author'
				/>

				<textarea 
					className='add__text'
					defaultValue=''
					placeholder='Message text'
					onChange={this.onFildChange.bind(this, 'textIsEmpty')}
					ref='text'
				/>

				<label className='add__checkrule'> 
					<input 
						type='checkbox' 
						defaultChecked={false} 
						ref='checkrule' 
						onChange={this.onCheckboxChange.bind(this)}/>
					I agree with rules
				</label>

				<button
					className='add__btn'
			        ref='alert_button'
			        disabled={this.state.authorIsEmpty || this.state.textIsEmpty || this.state.agreeNotChecked}
			        onClick={this.onBtnClickHandler.bind(this)}>Add news
				</button>
			</form>
		);
	}
}

export default Add;