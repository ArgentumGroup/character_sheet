var SkillsAbilsMagicItems = React.createClass({


	_showSkills:function(skill){

		
		return(
			<SkillsList
				skill={skill}
				skills={this.props.skills}
				skillProfs={this.props.skillProfs}
				procifientOrNot={this._proficientOrNot}
				currentCharacter={this.props.currentCharacter}
				parentComms={this.props.parentComms}
				/>
			)
	},

	_showSpells:function(spell){

		var characterClass = this.props.currentCharacter.character_class.name.toLowerCase()

		console.log(characterClass)


		if(spell[characterClass] === true){
		return(
			<SpellList
				spell={spell}
				spells={this.props.spells}
				currentCharacter={this.props.currentCharacter}
				/>)
		}
		else null
				

	},


	render: function(){

		var skills = this.props.skills;
		var spells = this.props.spells;

			
		return(
			<div id="skillsAbilsMagicItems">
				<div id='skillsBar'>
					<h2>Skills</h2>
					<div>
						{skills.map(this._showSkills)}
					</div>
				</div>
				<div id='spellsBar'>
					<h2>Spells</h2>
					<div>
						{spells.map(this._showSpells)}
					</div>
				</div>
			</div>
			)
	}
})
