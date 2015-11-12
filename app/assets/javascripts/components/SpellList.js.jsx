var SpellList = React.createClass({


	render:function(){

		var characterClass = this.props.currentCharacter.character_class.name.toLowerCase()
		var spell = this.props.spell

	

		if(spell[characterClass] === true){

			return(
				<p className='spellName'>{spell.name}<span className='castTime'>{spell.casting_time}</span></p>
				)

		}


	}
})