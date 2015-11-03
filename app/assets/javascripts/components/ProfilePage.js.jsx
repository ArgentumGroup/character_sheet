 var ProfilePage = React.createClass({

 	getInitialState:function(){
 		return {count: 0, charactersData:[], campaigns:[], currentUser:[]}
 	},

 	componentWillMount: function(){

 			console.log('step 1')
 		var self = this

 		$.ajax(
 			{url: 'api/characters',
 			dataType: 'json'
 			}).then(function(responseData){
 					self.setState({charactersData: responseData.characters.characters, currentUser:responseData.characters.id})
 						console.log("more teenages", self.state.charactersData, self.state.currentUser)})

 		$.ajax(
 			{url: 'api/campaigns',
 			dataType: 'json'
 			}).then(function(responseData){
 				self.setState({campaigns: responseData.campaigns})
 					console.log("bingo bango" , self.state.campaigns)
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


 	_showCharacters:function(character){

 		return(
 			<CharacterList 
 				characterlist={this.state.characterData}
 				character={character}
 				/>
 			)
 	},

 	// _showCampaigns:function(campaign){

 	// 	return(
 	// 		<CampaignList 
 	// 			campaigns={this.state.campaigns}
 	// 			campaign={campaign}
 	// 			/>
 	// 		)
 	// },

 	_createCharacter: function(){
 		location.hash = "newcharacter"
 	},

 	render: function(){

		var characters = this.state.charactersData
		console.log(characters)

 		return (
 			<div id="ProfilePage">
 				<button onClick={this._logOut}>Log Out</button>
 				<h1>Welcome {}!</h1>
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