var WeaponsandArmor = React.createClass({

	getInitialState: function(){
		return {equippedWeapon: '', equippedArmor:'', armors:'', shield:'', weapons:'', armorEquipped:'no', weaponEquipped:'no'}
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
				console.log(self.state.equippedWeapon)
			}
		})
	},

	_setArmor: function(){

		var self = this
		this.props.armorsData.forEach(function(armor){
			if(armor.name === self.refs.selectedArmor.value){
				self.setState({equippedArmor: armor.id, armors: armor})
				console.log(self.state.equippedArmor)
			}
		})
	},

	_setShield: function(){
		var self = this
		this.props.shieldsData.forEach(function(shield){
			if(shield.name === self.refs.selectedShield.value){
				self.setState({equippedShield: shield.id, shield: shield})
				console.log(self.state.equippedShield)
			}
		})

	},

	_equipWeapons: function(){

		var self = this
		console.log("posting to inventory", self.state.equippedWeapon)

		$.ajax({
			type: "POST",
  			url: "api/character_weapon_items",
  			data: {character_weapon_item:{
      						weapon_id: self.state.equippedWeapon
    								}
    				}
		})
		self.setState({weaponEquipped: 'yes'})
	},

	_equipArmor: function(){
	
	var self = this

		$.ajax({
			type: "POST",
  			url: "api/character_armor_items",
  			data: {character_armor_item:{
      						armor_id: self.state.equippedArmor
    								}
  			}
		})

		$.ajax({
			type:"POST",
			url: "api/character_shield_items",
			data: {character_shield_item:{
							shield_id: self.state.equippedShield
							}
			}
		})
		self.setState({armorEquipped: 'yes'})
	},

	render: function(){

		var equippedWeapon = this.state.equippedWeapon,
			equippedArmor = this.state.equippedArmor,
			weapons = this.state.weapons,
			armors = this.state.armors,
			shield = this.state.shield

		return(
			<div id='weaponsAndArmor'>
				<div id='weapons'>
					<h4>Weapons</h4>
					<select onChange={this._setWeapon} ref='selectedWeapon'>
						{this.props.weaponsData.map(this._displayWeapons)}
					</select>
					<button onClick={this._equipWeapons}>Equip</button>
					<h4>Equipped Weapons</h4>
					<ul>
						<p>{weapons.name}</p>
					</ul>
					<div id="makeAttackBox">
						<h4>Make an Attack</h4>
						<div>
							
						</div>
					</div>
				</div>
				<div id='armor'>
					<h4>Armors</h4>
					<select onChange={this._setArmor}ref='selectedArmor'>
						{this.props.armorsData.map(this._displayArmors)}
					</select>
					<h4>Shields</h4>
					<select onChange={this._setShield}ref='selectedShield'>
						{this.props.shieldsData.map(this._displayShields)}
					</select>
					<button onClick={this._equipArmor}>Equip</button>
					<h4>Equipped Armor</h4>
					<ul>
						<li>Armor Name: {armors.name}</li>
					</ul>
				</div>
			</div>
			)
	}
})
