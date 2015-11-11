var StatsBlock = React.createClass({

	render: function(){

		
		var capabilityBlock = this.props.capabilityBlock;
		var currentCharacter = this.props.currentCharacter;
		var intelligence_modifier = currentCharacter.intelligence_modifier;
		var strength_modifier = currentCharacter.strength_modifier;
		var dexterity_modifier = currentCharacter.dexterity_modifier;
		var constitution_modifier = currentCharacter.constitution_modifier;
		var wisdom_modifier = currentCharacter.wisdom_modifier;
		var charisma_modifier = currentCharacter.charisma_modifier;

		console.log('heres stats block', capabilityBlock)

		return(
			<div id='statsBlock'>
				<p>Profiency Bonus <input value={currentCharacter.proficiency_bonus}ref='proficiency' type='string'/></p>
				<p id='modifier'>Score / Modifier</p>
				<div>	
					<p>Strength<input value={strength_modifier} type='string'/><input value={capabilityBlock.strength} ref='str' type='number'/></p>
					<p>Dexterity<input value={dexterity_modifier} type='string'/><input value={capabilityBlock.dexterity}ref='dex' type='number'/></p>
					<p>Constitution<input value={constitution_modifier} type='string'/><input value={capabilityBlock.constitution}ref='con' type='number'/></p>
					<p>Intelligence<input value={intelligence_modifier}type='string'/><input value={capabilityBlock.intelligence} ref='int' type='number'/></p>
					<p>Wisdom<input value={wisdom_modifier} type='string'/><input value={capabilityBlock.wisdom}  ref='wis' type='number'/></p>
					<p>Charisma<input value={charisma_modifier} type='string'/><input value={capabilityBlock.charisma} ref='cha' type='number'/></p>
				</div>	
			</div>	
			)
	}
})