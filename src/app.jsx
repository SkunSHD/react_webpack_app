import React from 'react';
import EventEmitter from 'wolfy-eventemitter';

import Add from './add.jsx';
import News from './news.jsx';
	
window.ee = new EventEmitter();


var my_news = [
  {
    author: 'Саша Печкин',
    text: 'В четчерг, четвертого числа...',
    bigText: 'в четыре с четвертью часа четыре чёрненьких чумазеньких чертёнка чертили чёрными чернилами чертёж.'
  },
  {
    author: 'Просто Вася',
    text: 'Считаю, что $ должен стоить 35 рублей!',
    bigText: 'А евро 42!'
  },
  {
    author: 'Гость',
    text: 'Бесплатно. Скачать. Лучший сайт - http://localhost:3000',
    bigText: 'На самом деле платно, просто нужно прочитать очень длинное лицензионное соглашение'
  }
];


class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {news: my_news};
	}

	componentDidMount() {
		var self = this;
		window.ee.addListener('News.add', function(item) {
			var nextNews = item.concat(self.state.news);
			self.setState({news: nextNews});
		});
	}

	componentWillUnmount() {
		window.ee.removeListener('News.add');
	}

	render() {
		return (
			<div className="app">	
				<h1> Facebook I'm gonna kick your ass ! </h1>
				<Add />
				<News data={this.state.news} />
			</div>
		);
	}
}

export default App;