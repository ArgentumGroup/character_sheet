var SkillsAbilsMagicItems = React.createClass({


	_showSkills:function(skill){

		console.log('s',this.props)
		return(
			<SkillsList
				skill={skill}
				skills={this.props.skills}
				skillProfs={this.props.skillProfs}
				procifientOrNot={this._proficientOrNot}
				currentCharacter={this.props.currentCharacter}
				/>
			)
	},


	render: function(){

		console.log("skills list", this.props.skills)
		var skills = this.props.skills

			
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
						<p>Spell List</p>
					</div>
				</div>
			</div>
			)
	}
})
