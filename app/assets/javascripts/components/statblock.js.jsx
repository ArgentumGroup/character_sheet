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
				<p>Profiency Bonus <span className='profBonus'>{currentCharacter.proficiency_bonus}</span></p>
				<p id='modifier'>Score / Modifier</p>
				<div>	
					<p>Strength<span className='modifiers'>{strength_modifier}</span><span className='abilityScores'>{capabilityBlock.strength}</span></p>
					<p>Dexterity<span className='modifiers'>{dexterity_modifier}</span><span className='abilityScores'>{capabilityBlock.dexterity}</span></p>
					<p>Constitution<span className='modifiers'>{constitution_modifier}</span><span className='abilityScores'>{capabilityBlock.constitution}</span></p>
					<p>Intelligence<span className='modifiers'>{intelligence_modifier}</span><span className='abilityScores'>{capabilityBlock.intelligence}</span></p>
					<p>Wisdom<span className='modifiers'>{wisdom_modifier}</span><span className='abilityScores'>{capabilityBlock.wisdom}</span></p>
					<p>Charisma<span className='modifiers'>{charisma_modifier}</span><span className='abilityScores'>{capabilityBlock.charisma}</span></p>
				</div>	
			</div>	
			)
	}
})