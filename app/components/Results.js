const React = require('react');
const helpers = require('./utils/handlers.js')
const Results = React.createClass({

	saveArticle: function(event){
		event.preventDefault();
		console.log(this)
		


	},

	render: function(){
		
		return(
			<div className="row">
				<div className="panel panel-default">
		            <div className='panel-heading'>
		                <h3 className="panel-title text-center">
		                    <strong>Results</strong>
		                </h3>
		            </div>
		            <div className='panel-body text-center'>
		           	{this.props.results.map(function(article, i){
			            	return(
			            		<form className='articleForm' onSubmit="saveArticle">
				            		<div key={i} className='article'>
				            			<a href={article.web_url} name='url'><h2 className='artcileTitle' name='title'>{article.headline.main}</h2></a>
				            			<span>{article.snippet}</span>
				            			<input type="submit" value="Save"></input>
				            		</div>
				            	</form>
			            	)	
			            })
		       		}

		            </div>
		        </div>
		    </div>


		 )

	}
});

module.exports = Results;