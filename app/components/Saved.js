const React = require('react')


const Saved = React.createClass({

	render: function() {
		return(
			<div className="row">
				<div className='panel panel-default'>
					<div className='panel-heading'>
						<h3 className='panel-title text-center'>
							<strong>Saved Articles</strong>
						</h3>
					</div>
					<div className='panel-body text-center'>
					
					{this.props.saved.map(function(article, i){
						console.log(article)
		            	return(
		            		<form className='mongoForm'>
			            		<div key={i} className='dbArticle'>
			            			<a href={article.url}><h2 className='artcileTitle'>{article.title}</h2></a>
			            			<span>Saved on: {article.date}</span>
			            			<button>Remove</button>
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

module.exports = Saved;