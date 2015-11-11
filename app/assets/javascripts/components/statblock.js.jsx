var StatsBlock = React.createClass({

	render: function(){

		
		var capabilityBlock = this.props.capabilityBlock;
		var currentCharacter = this.props.currentCharacter;

		console.log('heres stats block', capabilityBlock)

		return(
			<div id='statsBlock'>
				<p>Profiency Bonus <input value={currentCharacter.proficiency_bonus}ref='proficiency' type='number'/></p>
				<p id='modifier'>Score / Modifier</p>
				<div>	
					<p>Strength<input value={capabilityBlock.strength} ref='str' type='number'/></p>
					<p>Dexterity<input value={capabilityBlock.dexterity}ref='dex' type='number'/></p>
					<p>Constitution<input value={capabilityBlock.constitution}ref='con' type='number'/></p>
					<p>Intelligence<input value={currentCharacter.intelligence_modifier}type='string'/><input value={capabilityBlock.intelligence} ref='int' type='number'/></p>
					<p>Wisdom<input value={capabilityBlock.wisdom}  ref='wis' type='number'/></p>
					<p>Charisma<input value={capabilityBlock.charisma} ref='cha' type='number'/></p>
				</div>	
			</div>	
			)
	}
})