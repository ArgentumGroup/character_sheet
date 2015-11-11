 var ProfilePage = React.createClass({




 	getInitialState(){
 		return {count: 0, charactersData:[], campaigns:[], currentUser:''}
 	},

 	componentWillMount(){

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
				self.setState({currentUser: responseData.characters})
			})
 	},

 	_createNewCampaign(){

 		console.log(this.refs.campaignName.value)

 		// $.ajax({
 		// 	type:"POST",
 		// 	url:"api/campaigns",
 		// 	data:{
 		// 		campaign:{
 		// 			name: this.refs.campaignName.value
 		// 		}
 		// 	},
 		// 	success: (()=>{
 		// 		alert(this.refs.campaignName.value + " has been created!f")
 		// 	})	
 		// })
 	},

 	_logOut(){

 			$.ajax({
			type: "DELETE",
			url: "api/sign_in",
			success: (function(){
				alert('logging you out.')
				location.hash = "signin"
			})
		})
 	},

 	_showCharacters(character){

 		return(
 			<CharacterList 
 				characterlist={this.state.characterData}
 				character={character}
 				/>
 			)
 	},

 	_showCampaigns(campaign){

 		return(
 			<CampaignList 
 				campaigns={this.state.campaigns}
 				campaign={campaign}
 				characters={this.state.charactersData}
 				currentUser={this.state.currentUser}
 				/>)
 	},

 	render: function(){

		var characters = this.state.charactersData,
			campaigns = this.state.campaigns,
			lastCharacter = characters[characters.length-1]

		console.log(characters)
		console.log('heres last character',lastCharacter)

 		return (
 			<div id="ProfilePage">
 				<button onClick={this._logOut}>Log Out</button>
 				<input ref="campaignName" type="input" placeholder="name your campaign"></input>
 				<button onClick={this._createNewCampaign}>create new campaign</button>
 				<div id="charactersCampaigns">
	 				<h3>Your Characters</h3>
	 				<div id='characterList'>
		 			{characters.map(this._showCharacters)}
	 				</div>
	 				<div id='campaignList'>
	 				<h3>Campaign List</h3>
	 					<ul>
	 						{campaigns.map(this._showCampaigns)}
	 					</ul>	
	 				</div>
	 				<div id="recentActivity">
	 					<p>Recent stuff goes here.</p>
	 				</div>
	 			</div>		
 			</div>
 			)

 	}
})