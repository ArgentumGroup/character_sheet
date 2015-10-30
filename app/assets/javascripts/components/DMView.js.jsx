var DMView = React.createClass({
	
	_activePlayers: function(player){

		return(
			<Players 
				players={this.props.players}
				player={player}
				/>
			)
	},


	render: function(){

		var players = this.props.players

		return (
			<div id="dmView">
				<h1>Campaign Name</h1>
				<ul>
					{players.map(this._activePlayers)}
				</ul>
			</div>		


			)
	}
})