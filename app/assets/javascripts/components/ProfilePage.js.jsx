 var ProfilePage = React.createClass({

 	getInitialState:function(){
 		return {count: 0, charactersData:[], campaigns:[], currentUser:''}
 	},

 	componentWillMount: function(){

 			console.log('step 1')
 		var self = this

 		$.ajax(
 			{url: 'api/characters',
 			dataType: 'json'
 			}).then(function(responseData){
 					self.setState({charactersData: responseData.characters.characters})
 				})

 		$.ajax(
 			{url: 'api/campaigns',
 			dataType: 'json'
 			}).then(function(responseData){
 				self.setState({campaigns: responseData.campaigns})
 				})	

		$.ajax(
			{url: 'api/characters',
			dataType: 'json'
			}).then(function(responseData){
				self.setState({currentUser: responseData.characters.user_id})
			})
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

	_editCharacter:function(){

		location.hash = "newcharacter"
	},

 	_showCharacters:function(character){

 		return(
 			<CharacterList 
 				characterlist={this.state.characterData}
 				character={character}
 				/>
 			)
 	},

 	_createCharacter: function(){

 		var characters = this.state.charactersData,
 			lastCharacter = characters[characters.length-1]

		console.log(characters)
		console.log(lastCharacter)

 		$.ajax({
			type: "POST",
 			url: "api/characters",
  			data: {
    			character:{
      				user_id: this.state.currentUser,
      				campaign_id: 2
    				}
  				}
 		
		}) 
			
		ReactDOM.render(<NewCharacter charactersData={this.state.charactersData}/>, document.querySelector('#container'))
		
 	},

 	render: function(){

		var characters = this.state.charactersData,
			lastCharacter = characters[characters.length-1]

		console.log(characters)
		console.log('heres last character',lastCharacter)

 		return (
 			<div id="ProfilePage">
 				<button onClick={this._logOut}>Log Out</button>
 				<h1>Welcome!</h1>
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