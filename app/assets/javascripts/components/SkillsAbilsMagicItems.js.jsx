var SkillsAbilsMagicItems = React.createClass({

	_proficientOrNot:function(event){

		console.log("hello")
		if(event.target.checked === true){
			console.log('checked')
			$.ajax({
				type: "POST",
				url: 'api/character_skill_items',
				data: {character_skill_item:{
								skill_id: 1
							},
							character_id: 1
						},
				success:(function(){console.log('successful')})
			})

		}
		if(event.target.checked === false){
			$.ajax({
				type: "DELETE",
				url: 'api/character_skill_items',
				data: {character_skill_item:{
								skill_id: 1
							},
							character_id: 1
						},
				success:(function(){console.log('successful')})
			})
		}

	},


	render: function(){

		return(
			<div id="skillsAbilsMagicItems">
				<div id='skillsBar'>
					<h2>Skills</h2>
					<div>

						<p><input onChange={this._proficientOrNot} type='checkbox'/><input type='number'/>Acrobatics(dex)</p>
						<p><input type='checkbox'/><input type='number'/>Animal Handling(wis)</p>
						<p><input type='checkbox'/><input type='number'/>Arcana(int)</p>
						<p><input type='checkbox'/><input type='number'/>Athletics(str)</p>
						<p><input type='checkbox'/><input type='number'/>Deception(cha)</p>
						<p><input type='checkbox'/><input type='number'/>History(int)</p>
						<p><input type='checkbox'/><input type='number'/>Insight(wis)</p>
						<p><input type='checkbox'/><input type='number'/>Intimidation(cha)</p>
						<p><input type='checkbox'/><input type='number'/>Investigation(int)</p>
						<p><input type='checkbox'/><input type='number'/>Medicine(wis)</p>
						<p><input type='checkbox'/><input type='number'/>Nature(int)</p>
						<p><input type='checkbox'/><input type='number'/>Perception(wis)</p>
						<p><input type='checkbox'/><input type='number'/>Performance(cha)</p>
						<p><input type='checkbox'/><input type='number'/>Persuasion(cha)</p>
						<p><input type='checkbox'/><input type='number'/>Religion(int)</p>
						<p><input type='checkbox'/><input type='number'/>Sleight of Hand(dex)</p>
						<p><input type='checkbox'/><input type='number'/>Stealth(dex)</p>
						<p><input type='checkbox'/><input type='number'/>Survival(wis)</p>
					</div>
				</div>
				<div id='abilitiesBar'>
					<h2>Abilities</h2>
					<div>
						<p>here's Abilities</p>
					</div>
				</div>
				<div id='spellsBar'>
					<h2>Spells</h2>
					<div>
						<p>Spell List</p>
					</div>
				</div>
				<div id='itemsBar'>
					<h2>Items</h2>
					<div>
						<p>Items List</p>
					</div>
				</div>

			</div>
			)
	}
})
