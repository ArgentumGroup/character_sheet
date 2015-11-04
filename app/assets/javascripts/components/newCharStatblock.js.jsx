var NewCharStatBlock = React.createClass({				

	render:function(){

		return(
			<div id='newCharStatBlock'>
				<p>Strength <input ref='str' type='number'/></p>
				<p>Dexterity <input ref='dex' type='number'/></p>
				<p>Constitution <input ref='con' type='number'/></p>
				<p>Intelligence <input ref='int' type='number'/></p>
				<p>Wisdom <input ref='wis' type='number'/></p>
				<p>Charisma <input ref='cha' type='number'/></p>
			</div>	
				)
	}			
})				