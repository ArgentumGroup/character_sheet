var Players = React.createClass({

	render: function(){

		var player = this.props.player

		return(
			<li>
				<h3>{player.name}</h3>
				<p>{player.class}</p>
				<p>{player.level}</p>
			</li>	
			)
			
	}
})