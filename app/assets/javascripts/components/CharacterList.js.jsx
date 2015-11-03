var CharacterList = React.createClass({

	render: function(){

		var character = this.props.character

		return(
			<li>
				<h3>{character.character_name}</h3>
				<h4>Campaign: {character.character_campaign.name}</h4>
				<p>Class: {character.character_class}</p>
				<p>Level: {character.character_level}</p>
				<p>Race: {character.character_race}</p>
			</li>
			)
	}
})