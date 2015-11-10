var NewCharStatBlock = React.createClass({				


	_handleClick: function(){
		var parentComms = this.props.parentComms,
			self = this
			str = self.refs.str.value,
			dex = self.refs.dex.value,
			con = self.refs.con.value,
			int = self.refs.int.value,
			wis = self.refs.wis.value,
			cha = self.refs.cha.value

			parentComms(str,dex,con,int,wis,cha)
			console.log("hello", self.refs.str.value)

	},

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
						<p>Finished? Save these stats and move on!<input onClick={this._handleClick} type='checkbox'/></p>
						<button onClick={this.props.saveChar}>Save your character!</button>
					</div>	
						)}
		else return null
	}			
})				