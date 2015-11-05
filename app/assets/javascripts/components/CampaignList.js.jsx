var CampaignList = React.createClass({

 	_createCharacter: function(){

		var characters = this.props.characters,
			currentUser = this.props.currentUser,
			campaign = this.props.campaign.id
		

	console.log('ninja turtles', characters)
	console.log('masterblaster',lastCharacter)

		$.ajax({
		type: "POST",
			url: "api/characters",
			data: {
			character:{
  				user_id: currentUser,
  				campaign_id: campaign
				}
				}
		
	}) 
		
	ReactDOM.render(<NewCharacter 
						charactersData={this.props.characters}
						/>, document.querySelector('#container'))
		
 	},

	render: function(){
		var campaign = this.props.campaign,
			campaigns = this.props.campaign

		return(
			<li>
				{campaign.name}
 				<button onClick={this._createCharacter}>Create new Character</button>
 			</li>	
			)



		
	}
})