const React = require('react');

const Search = React.createClass({

	getInitialState : function(){
		return{
			searchTerm: '',
			beginYear : '',
			endYear   : '',
		};
	},

	handleChange : function(event){
		
		switch(event.target.id) {
			case 'searchTerm': 
			    this.setState({searchTerm: event.target.value});
			    break;
			case 'beginYear': 
			    this.setState({beginYear: event.target.value});
			    break;
			case 'endYear' : 
			    this.setState({endYear : event.target.value});
			    break;
			default: 
			    console.error(`ERROR: event.target.id (${event.target.id}) is invalid`);
			    break;
		}
		
	},
	handleSubmit: function(event){
		event.preventDefault();

		//Set the parent to have the query params
		let queryObj={
			searchTerm: this.state.searchTerm,
			beginYear: this.state.beginYear,
			endYear: this.state.endYear
		}
		this.props.setQuery(queryObj);
		this.setState({
			searchTerm: "",
			beginYear: "",
			endYear: ""
		})
	},
	render: function(){
		return(
			<div className="row">
				<div className="panel panel-default">
		            <div className='pandel-heading'>
		                <h3 className="panel-title text-center">
		                    <strong>Search Term</strong>
		                </h3>
		            </div>

		           	<div className="panel-body text-center">
		           		<form onSubmit={this.handleSubmit}>
		           			<div className="form-group">
		           			
		           			<input
		           			    value={this.state.searchTerm}
		           			    type='text'
		           			    className='form-control'
		           			    id='searchTerm'
		           			    onChange={this.handleChange}
		           			    required
		           			 />
		           			 <br />
		           			 <input 
		           			     value={this.state.beginYear}
		           			     type="text"
		           			     className="form-control"
		           			     id="beginYear"
		           			     onChange={this.handleChange}
		           			     required
		           			 />
		           			 <br />
		           			 <input 
		           			     value={this.state.endYear}
		           			     type='text'
		           			     className='form-control'
		           			     id="endYear"
		           			     onChange={this.handleChange}
		           			     required
		           			/>
		           			<br />
		           			<button
		           			     type="submit"
		           			     className='btn btn-lg btn-primary'
		           			>
		           			    Submit
		           			</button>
		           			</div>

		           		</form>
		            </div>
		           
		        </div>
		    </div>
		)
	}
});

module.exports = Search;