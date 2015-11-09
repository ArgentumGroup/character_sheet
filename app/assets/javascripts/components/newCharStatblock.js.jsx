var NewCharStatBlock = React.createClass({				

// 
 // <button onClick={this._goToSkills}>Finished? move on to the next step!</button>
	_handleClick: function(){
		var parentComms = this.props.parentComms,
			str = this.refs.str.value,
			dex = this.refs.dex.value,
			con = this.refs.con.value,
			int = this.refs.int.value,
			wis = this.refs.wis.value,
			cha = this.refs.cha.value

			parentComms(str,dex,con,int,wis,cha)
			console.log("hello", this.refs.str.value)

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