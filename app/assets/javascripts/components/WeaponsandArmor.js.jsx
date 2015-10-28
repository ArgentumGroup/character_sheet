var WeaponsandArmor = React.createClass({
	
	_displayWeapons: function(weapon){
		return (
			<option key={weapon.name}>{weapon.name}, {weapon.weapon_type}, Damage Type: {weapon.damage_type}, Damage: {weapon.damage_die_number}d{weapon.damage_die_type}</option>
			)
	},

	_stealth: function(armor){
		if(armor.stealth_disadvantage === false){
			return ('No')
		}
		else return ('Yes')
	},

	_displayArmors: function(armor){

		var stealth = this._stealth(armor)

		return(
			<option key={armor.name}>{armor.name}, {armor.armor_type}, AC: {armor.armor_class}, Stealth Disadvantage: {stealth}</option>
			)
	},

	_equipWeapons: function(){
		console.log(this.refs.selectedWeapon.getDOMNode().value)

	},

	render: function(){

		console.log('hello',this.props.weaponsData)
		
		
		return(
			<div id='weaponsAndArmor'>
				<div id='weapons'>
					<h4>Weapons</h4>
					<select ref='selectedWeapon'>
						{this.props.weaponsData.map(this._displayWeapons)}
					</select>
					<button onClick={this._equipWeapons}>Equip</button>
					<h4>Equipped Weapons</h4>
				</div>
				<div id='armor'>
					<h4>Armors</h4>
					<select ref='selectedArmor'>
						{this.props.armorsData.map(this._displayArmors)}
					</select>
					<button>Equip</button>
				</div>
			</div>	
			)
	}
})