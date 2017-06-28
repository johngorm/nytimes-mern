const React = require('react');

const Results = React.createClass({

	render: function(){
		
		return(
			<div className="row">
				<div className="panel panel-default">
		            <div className='pandel-heading'>
		                <h3 className="panel-title text-center">
		                    <strong>Results</strong>
		                </h3>
		            </div>
		            <div className='panel-body text-center'>
		           	{this.props.results.map(function(article, i){
			            	return(
			            		<div key={i} className='article'>
			            			<a href={article.web_url}><h2 className='artcileTitle'>{article.headline.main}</h2></a>
			            			<p>{article.snippet}</p>
			            		</div>
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