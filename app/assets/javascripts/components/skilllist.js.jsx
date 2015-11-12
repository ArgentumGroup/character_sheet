var SkillsList = React.createClass({


	_proficientOrNot:function(event){

		var character_id = this.props.currentCharacter.character_id;


		var clickedSkillId = event.target.getAttribute('data');

		var updated_skill_model = this.props.skills.find(function(skill_model){
			return skill_model.id === parseInt(clickedSkillId)
		});

		var parentComms = this.props.parentComms

		// if(event.target.checked === true){
		// 	console.log('checked')

		// 	var attrChanged = event.target
		//
		var params4Rails = {
			character: {
				character_id: character_id
			}
		};

		params4Rails.character[ updated_skill_model.name.toLowerCase().replace(/ /g,"_") ] = event.target.checked

			$.ajax({
				type: "PATCH",
				url: 'api/characters/' + character_id,
				data: params4Rails,
				success: parentComms
			}).then(function(data){
				
			})




	},

	render:function(){

		var skill = this.props.skill
		var skillKey = skill.name.toLowerCase().replace(/ /g,"_")
		var proficiency = skill.name.toLowerCase().replace(/ /g,"_") + '_proficiency'
		var myProficiencies = this.props.skillProfs[skillKey]
		var checked




		// if(this.props.skillProfs[proficiency] === false) {

		// 	checked = 'false'
		// 	console.log('but now Im', checked)
		// }	

		return(
			<p key={skill.id}><input key={skill.name}  onChange={this._proficientOrNot} type='checkbox'  data={skill.id}/><span className='proficiencyBonus'>{myProficiencies}</span>{skill.name}</p>
			)
	}	
	
})
