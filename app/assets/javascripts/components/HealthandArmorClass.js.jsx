var HealthandArmorClass = React.createClass({

	render: function(){

		return(
			<div id='armorStats'>
				<div id='armorClassBlock'>
					<div>
						<h3>Armor Class </h3>
						<input type='number'/>
					</div>	
					<div>
						<h3>Initiative </h3>
						<input type='number' />
					</div>
					<div>
						<h3>Speed </h3>
						<input type='number' />
					</div>	
				</div>
				<div id="healthandDeathSaves">
					<div id="saves">
						<h4>Saves</h4>
						<p>Strength<input type="number"/></p>
						<p>Dexterity<input type="number"/></p>
						<p>Constitution<input type="number"/></p>
						<p>Intelligence<input type="number"/></p>
						<p>Wisdom<input type="number"/></p>
						<p>Charisma<input type="number"/></p>
					</div>
					<div>
						<p>Maximum Health</p>
						<input type='number'/>
						<p>Current Health</p>
						<input type='number'/>
						<p>Temporary Health</p>
						<input type='number'/>
					</div>
					<div>
						<h3>Death Saves</h3>
						<p>Successes :
							<select>
								<option>0</option>
								<option>1</option>
								<option>2</option>
								<option>3</option>
							</select> of 3
						</p>
						<p>Failures : 
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