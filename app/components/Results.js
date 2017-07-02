const React = require('react');

const Results = React.createClass({

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
			            		<form className='articleForm'>
				            		<div key={i} className='article'>
				            			<a href={article.web_url}><h2 className='artcileTitle'>{article.headline.main}</h2></a>
				            			<span>{article.snippet}</span>
				            			<button>Save</button>
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