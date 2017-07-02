const axios = require('axios')
const NYT_API_KEY = 'd2b33304c4ff4ae485f23fe68956e33b';


let helper = {
	//Function to query NYTimes

	queryNYTimes: function(searchTerm, beginYear, endYear){

		// let queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json"
		// queryURL += '?' + $.param({
		// 	'api-key': APIKey,
		// 	'q': searchTerm,
		// 	'begin_date' : beginYear,
		// 	'end_date' : endYear

		// });


		let queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm.split('').join('+') + "&page=1&sort=newest&begin_date=" 
			+ beginYear + "0101&end_date=" + endYear + '1231' + '&api-key=' + NYT_API_KEY;


		return axios.get(queryURL).then( (response) =>{
			let articles = response.data.response.docs;
			console.log(articles);
			let top_articles = [];
			if(articles[0]){
				for(let ii = 0; ii < Math.min(articles.length, 5); ii++){
					console.log(articles[ii])
					top_articles.push(articles[ii]);
				}
				return top_articles;
				
			}
			return null

		})
		.catch( (error) =>{
			console.log(error)
			throw error;
		});	
	},

	//Function to save article to db
	saveArticle: function(articleInfo){
		return axios.post('/api/saved',{
			title: articleInfo.headline.main,
			url: articleInfo.web_url
		})
		.then( (response) =>{
			console.log(response);
		})
		.catch( (error) =>{
			console.log(error);
		})

	},

	//Function to get all saved articles in db
	getSavedArticles: function(){
		return axios.get('/api/saved')
		.then( (response) =>{
			console.log(response.data)
			return response.data
		})
		.catch( (error) =>{
			console.error(error)
			throw error
		});
	},

	//Function to call api route to remove saved article
	deleteSavedArticle: function(articleID){
		return axios.delete('/api/saved/'+arcticleID)
			.then( (response) =>{
				return axios.get('/api/saved');
			})
			.catch( (error) =>{
				console.log(error);
			})
	}

}

module.exports = helper
