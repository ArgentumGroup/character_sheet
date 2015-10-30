var CharacterList = React.createClass({

	render: function(){

		var character = this.props.character
		return(
			<li>
				<h3>{character.name}</h3>
				<h4>Campaign Id: {character.campaign_id}</h4>
				<p>Class: {character.class}</p>
				<p>Level: {character.level}</p>
			</li>
			)
	}
})