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
		

		
		return(
			<div id='statsBlock'>
				<h3>Profiency Bonus <span className='profBonus'>{currentCharacter.proficiency_bonus}</span></h3>
				<p id='modifier'>Score / Modifier</p>
				<div>	
					<h3>Strength<span className='modifiers'>{strength_modifier}</span><span className='abilityScores'>{capabilityBlock.strength}</span></h3>
					<h3>Dexterity<span className='modifiers'>{dexterity_modifier}</span><span className='abilityScores'>{capabilityBlock.dexterity}</span></h3>
					<h3>Constitution<span className='modifiers'>{constitution_modifier}</span><span className='abilityScores'>{capabilityBlock.constitution}</span></h3>
					<h3>Intelligence<span className='modifiers'>{intelligence_modifier}</span><span className='abilityScores'>{capabilityBlock.intelligence}</span></h3>
					<h3>Wisdom<span className='modifiers'>{wisdom_modifier}</span><span className='abilityScores'>{capabilityBlock.wisdom}</span></h3>
					<h3>Charisma<span className='modifiers'>{charisma_modifier}</span><span className='abilityScores'>{capabilityBlock.charisma}</span></h3>
				</div>	
			</div>	
			)
	}
})