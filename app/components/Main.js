const React = require('react');
const Search = require('./Search.js');
const Link = require('react-router').Link;
const helpers = require('./utils/handlers');

const Main = React.createClass({

	getInitialState: function(){
		return{
			searchTerm: '',
			beginYear: '',
			endYear: '',
			results: ''
		}
	},

	componentDidUpdate: function(){
		helpers.queryNYTimes(this.state.searchTerm., this.state.beginYear, this.state.endYear)
			.then( function(searchResults) {
				for(let ii in searchResults){
					if(JSON.stringify(searchResults[ii]) === JSON.stringify(this.state.results[ii])){
						return null
					}
				}
			
				console.log('Results' + searchResults);
				this.setState({results: searchResults});
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

			</div>


			);
	}
});

module.exports = Main;