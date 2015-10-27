var CharacterSheet = React.createClass({

	render: function(){

		return(
			<div id="container">
				<NameInfoBox />
				<StatsBlock />
				<HealthandArmorClass />
				<WeaponsandArmor />
				<SkillsAbilsMagicItems />
				<TraitsandFlaws />
			</div>	
			)
	}
})


var NameInfoBox = React.createClass({

	render: function(){

		return(
			<div id='charData'>	
				<div>				
					<p>Player Name</p>
					<input type='text' placeholder='Player Name'/>
				</div>
				<div>	
					<p>Character Name</p>
					<input type='text' placeholder='Character Name'/>
				</div>
				<div>
					<p>Race</p>
					<select placeholder='Race'>
						<option>Dwarf</option>
						<option>Elf</option>
						<option>Halfling</option>
						<option>Human</option>
					</select>	
				</div>	
				<div>
					<p>Sub-Race</p>
					<select>
						<option>Hill Dwarf - Dwarf</option>
						<option>Mountain Dwarf - Dwarf</option>
						<option>High Elf - Elf</option>
						<option>Wood Elf - Elf</option>
						<option>Light Foot - Halfling</option>
						<option>Stout - Halfling</option>
						<option>Human - Human</option> 	
					</select>
				</div>
				<div>
					<p>Level</p>
					<input type='number'/>		
				</div>
			</div>	
			)
	}
})	

