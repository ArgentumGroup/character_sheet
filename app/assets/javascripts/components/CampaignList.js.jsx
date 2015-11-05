var CampaignList = React.createClass({

 	_createCharacter: function(){

		var characters = this.props.charactersData,
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
		
	ReactDOM.render(<NewCharacter 
						charactersData={this.state.charactersData}
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