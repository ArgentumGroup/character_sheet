var WeaponsandArmor = React.createClass({

	getInitialState: function(){
		return {equippedWeapon: '', equippedShield: 1, equippedArmor:'', armors: '', shield: 'None', weapons:'Unarmed Strike'}
	},

	_displayWeapons: function(weapon){
		return (
			<option key={weapon.name}>{weapon.name}</option>
			)
	},

	_stealth: function(armor){
		if(armor.stealth_disadvantage === undefined){
			return ('')
		}
		else if(armor.stealth_disadvantage === false){
			return ('No')
		}
		else return ('Yes')
	},

	_displayArmors: function(armor){

		return(
			<option key={armor.name}>{armor.name}</option>
			)
	},

	_displayShields:function(shield){

		return(
			<option key={shield.name}>{shield.name}</option>
			)
	},

	_setWeapon:function(){

		var self = this
		this.props.weaponsData.forEach(function(weapon){
			if(weapon.name === self.refs.selectedWeapon.value){
				self.setState({equippedWeapon: weapon.id, weapons: weapon})
			}
		})
	},

	_setArmor: function(){

		var self = this
		this.props.armorsData.forEach(function(armor){
			if(armor.name === self.refs.selectedArmor.value){
				self.setState({equippedArmor: armor.id, armors: armor})
				
			}
		})
	},

	_setShield: function(){
		var self = this
		this.props.shieldsData.forEach(function(shield){
			if(shield.name === self.refs.selectedShield.value){
				self.setState({equippedShield: shield.id, shield: shield})
				
			}
		})

	},

	_equipWeapons: function(){

		var self = this
		var parentComms = this.props.parentComms
		

		$.ajax({
			type: "POST",
  			url:	"api/character_weapon_items",
  			data:	{character_weapon_item:{
      						weapon_id: self.state.equippedWeapon
							},
							character_id: self.props.currentCharacter.character_id
    				}
		})
		self.setState({weaponEquipped: 'yes'})
		parentComms()
	},

	_equipArmor: function(){

	var self = this;
	var parentComms = this.props.parentComms

		$.ajax({
			type: "POST",
  			url:	"api/character_armor_items",
  			data: {character_armor_item:{
									armor_id: self.state.equippedArmor
    					},
							character_id: self.props.currentCharacter.character_id
  			},
  			success: function(){
  					$.ajax({
						type:"POST",
						url: "api/character_shield_items",
						data: {character_shield_item:{
											shield_id: self.state.equippedShield
									},
									character_id: self.props.currentCharacter.character_id
						}
					})}
		})



		parentComms()
	},

	render: function(){

		var equippedWeapon = this.state.equippedWeapon,
			weapons = this.state.weapons,
			armors = this.state.armors,
			shield = this.state.shield,
			damageDice = 'd' + weapons.damage_die_type,
			numDice = weapons.damage_die_number,
			equippedArmor = this.state.equippedArmor,
			currentCharacter = this.props.currentCharacter


		return(
			<div id='weaponsAndArmor'>
				<div id='weapons'>
					<h3>Weapons</h3>
					<select onChange={this._setWeapon} ref='selectedWeapon'>
						{this.props.weaponsData.map(this._displayWeapons)}
					</select>
					<button onClick={this._equipWeapons}>Equip</button>
					<h3>Equipped Weapons</h3>
					<ul>
						<p>{weapons.name}</p>
					</ul>
					<div id="makeAttackBox">
						<h3>To Hit</h3>
						<div>
							<p>Add this to your roll {currentCharacter.weapon_to_hit}</p>
						</div>
						<h3>Damage</h3>
						<div>
							<p>Roll {numDice}{damageDice} and add it up</p>
						</div>
					</div>
				</div>
				<div id='armor'>
					<h3>Armors</h3>
					<select onChange={this._setArmor}ref='selectedArmor'>
						{this.props.armorsData.map(this._displayArmors)}
					</select>
					<h3>Shields</h3>
					<select onChange={this._setShield}ref='selectedShield'>
						{this.props.shieldsData.map(this._displayShields)}
					</select>
					<button onClick={this._equipArmor}>Equip</button>
					<h3>Equipped Armor</h3>
					<ul>
						<li>Armor Name: {armors.name}</li>
					</ul>
				</div>
			</div>
			)
	}
})
