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

 		
 		var self = this

 		$.ajax({
 			type:"POST",
 			url:"api/campaigns",
 			data:{
 				campaign:{
 					name: self.refs.campaignName.value
 				}
 			},
 			success: (function(){
 			
 				alert(self.refs.campaignName.value + " has been created!")
 				self.setState({count: self.state.count + 1})
 					$.ajax(
 						{url: 'api/campaigns',
 						dataType: 'json'
 						}).then(function(responseData){
 						self.setState({campaigns: responseData.campaigns})
 						})
 			})
 		})
 		
 	
 	},

 	_logOut(){

 			$.ajax({
			type: "DELETE",
			url: "api/sign_in",
			success: (function(){
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
 				count={this.state.count}
 				/>)
 	},

 	_createCharacter: function(){

		var characters = this.state.charactersData,
			currentUser = this.state.currentUser.user_id,
			self = this




		$.ajax({
		type: "POST",
			url: "api/characters",
			data: {
			character:{
  				user_id: currentUser,
          klass_id: 1}
				}
			})

	ReactDOM.render(<NewCharacter
						charactersData={this.state.charactersData}
						/>, document.querySelector('#container'))

 	},

 		// campaign stuff that we probably won't ever ever need.
 		// 
 		// <div id='campaignList'>
	 	// 			<h3>Campaign List</h3>
	 	// 				<ul>
	 	// 					{campaigns.map(this._showCampaigns)}
	 	// 				</ul>
	 	// 			</div>
	 	// 			<div id="recentActivity">
	 	// 				<p>Recent stuff goes here.</p>
	 	// 			</div>
	 	// 	========================
	 	// 		more stuff we probably won't ever ever need
	 	// 					
	 	// 			<input ref="campaignName" type="input" placeholder="name your campaign"></input>
 		// 			<button onClick={this._createNewCampaign}>create new campaign</button>

 	render: function(){

		var characters = this.state.charactersData,
			campaigns = this.state.campaigns
			



 		return (
 			<div id="ProfilePage">
 				<button id='logOutButton' onClick={this._logOut}>Log Out</button>
 				<div id="charactersCampaigns">
	 				<h3>Your Characters</h3>
	 				<div id='characterList'>
		 			{characters.map(this._showCharacters)}
		 			<span onClick={this._createCharacter} className="characters">
		 				<h3>Create a new Character</h3>
		 			</span>	
	 				</div>
	 			</div>
 			</div>
 			)

 	}
})
