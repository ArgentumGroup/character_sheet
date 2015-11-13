var HealthandArmorClass = React.createClass({

	render: function(){

		var currentCharacter= this.props.currentCharacter

		return(
			<div id='armorStats'>
				<div id='armorClassBlock'>
					<div>
						<h3>Armor Class </h3>
						<h4>{currentCharacter.armor_class}</h4>
					</div>	
					<div>
						<h3>Initiative </h3>
						<h4>{currentCharacter.initiative}</h4>
					</div>
					<div>
						<h3>Speed </h3>
						<h4>30ft</h4>
					</div>	
				</div>
				<div id="healthandDeathSaves">
					<div id="saves">
						<h3 id="saveTitle">Saves</h3>
						<p>Strength<span className='saves'>{currentCharacter.strength_save}</span></p>
						<p>Dexterity<span className='saves'>{currentCharacter.dexterity_save}</span></p>
						<p>Constitution<span className='saves'>{currentCharacter.constitution_save}</span></p>
						<p>Intelligence<span className='saves'>{currentCharacter.intelligence_save}</span></p>
						<p>Wisdom<span className='saves'>{currentCharacter.wisdom_save}</span></p>
						<p>Charisma<span className='saves'>{currentCharacter.charisma_save}</span></p>
					</div>
					<div>
						<h3>Health</h3>
						<p>Maximum Health</p>
						<p>{currentCharacter.hit_points}</p>
						<p>Current Health</p>
						<input type='number'/>
						<p>Temporary Health</p>
						<input type='number'/>
					</div>
					<div>
						<h3>Death Saves</h3>
						<p>Successes:</p>
						<span className='deathSaves'>
							<select>
								<option>0</option>
								<option>1</option>
								<option>2</option>
								<option>3</option>
							</select> of 3
						</span>
						<p>Failures:</p>
						<span className='deathSaves'> 
							<select>
								<option>0</option>
								<option>1</option>
								<option>2</option>
								<option>3</option>
							</select> of 3
						</span>		
					</div>	
				</div>
			</div>	
			)
	}
})