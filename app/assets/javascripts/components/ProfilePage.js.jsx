 var ProfilePage = React.createClass({

 	getInitialState:function(){
 		return {count: 0, charactersData:[]}
 	},

 	componentWillMount: function(){

 			console.log('step 1')
 		var self = this

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
 				{console.log("heres chracters", responseData.characters.characters)})
 				}).then(function(responseData){
 					console.log('teenagers.')
 					self.setState({charactersData: responseData.characters.characters})
 						console.log("more teenages", self.state.charactersData)})


 	},

 	_logOut: function(){

 			$.ajax({
			type: "DELETE",
			url: "api/sign_in",
			success: (function(){
				alert('logging you out.')
				location.hash = "signin"
			})
		})
 	},


 	_showCharacters:function(character){

 		return(
 			<CharacterList 
 				characterlist={this.state.characterData}
 				character={character}/>
 			)
 	},

 	render: function(){

		var characters = this.state.charactersData 
		console.log(characters)

 		return (
 			<div id="ProfilePage">
 				<button onClick={this._logOut}>Log Out</button>
 				<h1>Welcome current User!</h1>
 				<button onClick={this._createCharacter}>Create new Character</button>
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