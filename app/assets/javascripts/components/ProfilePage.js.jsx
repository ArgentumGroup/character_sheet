 var ProfilePage = React.createClass({

 	getInitialState:function(){
 		return {count: 0, usersData:[]}
 	},

 	componentWillMount: function(){

 		$.ajax(
 			{url: 'api/users',
 			dataType: 'json',
 			success: (function(responseData)
 				{console.log("here's data biotch", responseData)
 				return responseData})
 				})

 		$.ajax(
 			{url: 'api/characters',
 			dataType: 'json',
 			success: (function(responseData)
 				{console.log("heres chracters", responseData)
 				return responseData})
 				})
 	},

 	_showCharacters:function(character){

 		return(
 			<CharacterList 
 				characterlist={this.props.characterlist}
 				character={character}/>
 			)
 	},

 	render: function(){

 		var characters = this.props.characterlist

 		return (
 			<div id="ProfilePage">
 				<h1>Welcome current User!</h1>
 				<div id='characterList'>
	 				<ul>
	 					{characters.map(this._showCharacters)}
	 				</ul>
 				</div>
 				<div id="recentActivity">
 					<p>Recent stuff goes here.</p>
 				</div>	
 			</div>
 			)

 	}
})