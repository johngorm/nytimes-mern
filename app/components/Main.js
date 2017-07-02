const React = require('react');
const Search = require('./Search.js');
const Results = require('./Results.js');
const Saved = require('./Saved.js');
const Link = require('react-router').Link;
const helpers = require('./utils/handlers');

const Main = React.createClass({

	getInitialState: function(){
		return{
			searchTerm: '',
			beginYear: '',
			endYear: '',
			results: [],
			saved_articles: []
		}
	},

	componentDidMount: function(){
		console.log(helpers.getSavedArticles);
		helpers.getSavedArticles()
		.then(function(results){
			this.setState({saved_articles: results})
		}.bind(this));
	},

	componentDidUpdate: function(){
		helpers.queryNYTimes(this.state.searchTerm, this.state.beginYear, this.state.endYear)
			.then( function(searchResults) {
				if(JSON.stringify(this.state.results) !== JSON.stringify(searchResults)){
					
					this.setState({results: searchResults});
				}
				helpers.getSavedArticles()
				.then( function(savedArticles){
		
					if(JSON.stringify(this.state.saved_articles) !== JSON.stringify(savedArticles)){
						this.setState({saved_articles: savedArticles});
					}
				}.bind(this))
		}.bind(this));
	},

	setQuery: function(params){
		this.setState({
			searchTerm: params.searchTerm.trim(),
			beginYear: params.beginYear.trim(),
			endYear: params.endYear.trim()
		})
	},

	render: function(){

		return(
			<div className="container">
			    <div className="row">
			        <div className="jumbotron">
				        <h1>New York Times Article Search</h1>
				        <p>Find articles that intrest you and save for future reference</p>
			        </div>
			    </div>
			    <Search setQuery={this.setQuery}/>
			    <Results results={this.state.results}/>
			    <Saved saved={this.state.saved_articles}/>

			</div>


			);
	}
});

module.exports = Main;