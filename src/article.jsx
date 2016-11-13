import React from 'react';

class Article extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			visible: false
		}
	}

	readMoreClick(e) {
		e.preventDefault();
		this.setState({visible: true});
	}

	render() {
		var visible = this.state.visible; // значение считывается из состояния компонента

		return(
			<div className="article">
				<p className="news__author">{this.props.arr.author}</p>
				<p className="news__text">{this.props.arr.text}</p>
				<a 
					href="#" 
					onClick={this.readMoreClick.bind(this)} 
					className={'news__readmore ' + (visible ? 'none':'')}>
					Подробнее
				</a>
				<p className={'news__big-text ' + (visible ? '':'none')}>{this.props.arr.bigText}</p>
			</div>
		);
	}
}

Article.propTypes = {
	arr: React.PropTypes.shape({
		author: React.PropTypes.string.isRequired,
		text: React.PropTypes.string.isRequired,
		bigText: React.PropTypes.string.isRequired
	})
};

export default Article;