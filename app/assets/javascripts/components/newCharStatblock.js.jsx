var NewCharStatBlock = React.createClass({				



	render:function(){
		var checked = this.props.checked
		console.log(checked)
		console.log(this.props.saveChar)
		if(checked === 'no'){
				return(
					<div id='newCharStatBlock'>
						<p>Strength <input ref='str' type='number'/></p>
						<p>Dexterity <input ref='dex' type='number'/></p>
						<p>Constitution <input ref='con' type='number'/></p>
						<p>Intelligence <input ref='int' type='number'/></p>
						<p>Wisdom <input ref='wis' type='number'/></p>
						<p>Charisma <input ref='cha' type='number'/></p>
						<button onClick={this.props.saveChar}>Save your character!</button>
					</div>	
						)}
		else return null
	}			
})				