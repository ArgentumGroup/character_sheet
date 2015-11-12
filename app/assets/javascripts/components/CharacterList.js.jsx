var CharacterList = React.createClass({

	_editChar(){

		var characterId = this.props.character.character_id
		location.hash= 'charactersheet'

		ReactDOM.render(<CharacterSheet character_id={characterId}/>, document.querySelector("#container"))
	},

// <h4>Campaign: {character.character_campaign.name}</h4>

	render: function(){

		var character = this.props.character
		console.log('character', character.character_class.name)


		return(
				<span onClick={this._editChar} className="characters">
					<h3>{character.character_name}</h3>
					<p>Class: {character.character_class.name}</p>
					<p>Level: {character.character_level}</p>
					<p>Race: {character.character_race}</p>
				</span>
			)
	}
})
