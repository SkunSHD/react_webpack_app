import React from 'react';
import Article from './article.jsx';

class News extends React.Component {
	render() {
		var data = this.props.data;
		var newsTemplates;

		if (data && data.length > 0) {
			newsTemplates = data.map(function(item, index) {
				return (
					<div key={data.length - index}>
						<Article arr={item} />
					</div>
				);
			});
		} else {
			newsTemplates = <p>No news to show</p>
		}

		return (
			<div className="news">
				<h3>Fresh news are below !</h3>
				{newsTemplates}
				<strong
					className={"news__count " + (data.length > 0 ? "":"none")}>
					News count: {data.length}
				</strong>
			</div>
		);
	}
}


News.propTypes = {
	data: React.PropTypes.array.isRequired
}

export default News;