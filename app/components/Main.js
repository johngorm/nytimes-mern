const React = require('react');
const Search = require('./Search.js');
const Link = require('react-router').Link;

const Main = React.createClass({

	render: function(){
		return(
			<div className="container">
			    <div className="row">
			        <div className="jumbotron">
				        <h1>New York Times Article Search</h1>
				        <p>Find articles that intrest you and save for future reference</p>
			        </div>
			    </div>
			    <Search/>

			</div>


			);
	}
});

module.exports = Main;