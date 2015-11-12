var HealthandArmorClass = React.createClass({

	render: function(){

		var currentCharacter= this.props.currentCharacter

		return(
			<div id='armorStats'>
				<div id='armorClassBlock'>
					<div>
						<h3>Armor Class </h3>
						<input value={currentCharacter.armor_class} type='number'/>
					</div>	
					<div>
						<h3>Initiative </h3>
						<input value={currentCharacter.initiative}type='string' />
					</div>
					<div>
						<h3>Speed </h3>
						<input value='30ft' type='string' />
					</div>	
				</div>
				<div id="healthandDeathSaves">
					<div id="saves">
						<h4>Saves</h4>
						<p>Strength</p>
						<span>{currentCharacter.strength_save}</span>
						<p>Dexterity</p>
						<span>{currentCharacter.dexterity_save}</span>
						<p>Constitution</p>
						<span>{currentCharacter.constitution_save}</span>
						<p>Intelligence</p>
						<span>{currentCharacter.intelligence_save}</span>
						<p>Wisdom</p>
						<span>{currentCharacter.wisdom_save}</span>
						<p>Charisma</p>
						<span>{currentCharacter.charisma_save}</span>
					</div>
					<div>
						<h4>Health</h4>
						<p>Maximum Health</p>
						<p>{currentCharacter.hit_points}</p>
						<p>Current Health</p>
						<input type='number'/>
						<p>Temporary Health</p>
						<input type='number'/>
					</div>
					<div>
						<h3>Death Saves</h3>
						<p>Successes:&nbsp;
							<select>
								<option>0</option>
								<option>1</option>
								<option>2</option>
								<option>3</option>
							</select> of 3
						</p>
						<p>Failures:&nbsp; 
							<select>
								<option>0</option>
								<option>1</option>
								<option>2</option>
								<option>3</option>
							</select> of 3
						</p>	
					</div>	
				</div>
			</div>	
			)
	}
})