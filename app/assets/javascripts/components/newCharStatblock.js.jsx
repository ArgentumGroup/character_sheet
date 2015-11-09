var NewCharStatBlock = React.createClass({				

// <button onClick={this.props.saveChar}>Save your character!</button>

	render:function(){
		var abilityScores = this.props.abilityScores
		console.log(abilityScores)
		console.log(this.props.saveChar)
		if(abilityScores === 'no'){
				return(
					<div id='newCharStatBlock'>
						<p>Strength <input ref='str' type='number'/></p>
						<p>Dexterity <input ref='dex' type='number'/></p>
						<p>Constitution <input ref='con' type='number'/></p>
						<p>Intelligence <input ref='int' type='number'/></p>
						<p>Wisdom <input ref='wis' type='number'/></p>
						<p>Charisma <input ref='cha' type='number'/></p>
						<p>Finished? move on to the next step!<input type='checkbox' /></p>
					</div>	
						)}
		else return null
	}			
})				