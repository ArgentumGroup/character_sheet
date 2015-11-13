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
						<h3>Strength <input ref='str' type='number'/></h3>
						<h3>Dexterity <input ref='dex' type='number'/></h3>
						<h3>Constitution <input ref='con' type='number'/></h3>
						<h3>Intelligence <input ref='int' type='number'/></h3>
						<h3>Wisdom <input ref='wis' type='number'/></h3>
						<h3>Charisma <input ref='cha' type='number'/></h3>
						<h3>Finished? Save these stats and move on!<input onClick={this._handleClick} type='checkbox'/></h3>
						<button id='saveCharButton' onClick={this.props.saveChar}>Save your character!</button>
					</div>	
						)}
		else return null
	}			
})				