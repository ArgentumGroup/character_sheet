var WeaponsandArmor = React.createClass({

	getInitialState: function(){
		return {equippedWeapon: '', equippedArmor:''}
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

	_equipWeapons: function(){

		var self = this
		this.props.weaponsData.forEach(function(weapon){
			if(weapon.name === self.refs.selectedWeapon.value){
				self.setState({equippedWeapon: weapon.id})
				console.log(self.state.equippedWeapon)
			}
		})
		console.log("posting to inventory", this.state.equippedWeapon)

		$.ajax({
			type: "POST",
  			url: "api/character_weapon_items",
  			data: {character_weapon_item:{
      						weapon_id: this.state.equippedWeapon
    								}
  			}
		})
	},

	_equipArmor: function(){
		var self = this
		this.props.armorsData.forEach(function(armor){
			if(armor.name === self.refs.selectedArmor.value){
				self.setState({equippedArmor: armor.id})
				console.log(self.state.equippedArmor)
			}
		})

		$.ajax({
			type: "POST",
  			url: "api/character_armor_items",
  			data: {character_armor_item:{
      						armor_id: this.state.equippedArmor
    								}
  			}
		})

		$.ajax({
			type:"POST",
			url: "api/character_shield_items",
			data: {character_shield_item:{
							shield_id: this.state.equippedShield
			}}
		})
	},

	render: function(){

		var equippedWeapon = this.state.equippedWeapon,
			equippedArmor = this.state.equippedArmor

		return(
			<div id='weaponsAndArmor'>
				<div id='weapons'>
					<h4>Weapons</h4>
					<select ref='selectedWeapon'>
						{this.props.weaponsData.map(this._displayWeapons)}
					</select>
					<button onClick={this._equipWeapons}>Equip</button>
					<h4>Equipped Weapons</h4>
					<ul>
						<p>Placeholder</p>
					</ul>
					<div id="makeAttackBox">
						<h4>Make an Attack</h4>
						<div>
							<p>{equippedWeapon.name}</p>
						</div>
					</div>
				</div>
				<div id='armor'>
					<h4>Armors</h4>
					<select ref='selectedArmor'>
						{this.props.armorsData.map(this._displayArmors)}
					</select>
					<h4>Shields</h4>
					<select ref='selectedShield'>
						{this.props.shieldsData.map(this._displayShields)}
					</select>
					<button onClick={this._equipArmor}>Equip</button>
					<h4>Equipped Armor</h4>
					<ul>
						<li>Armor Name: {equippedArmor.name}</li>
					</ul>
				</div>
			</div>
			)
	}
})
