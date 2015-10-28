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
		if(armor.stealth_disadvantage === false){
			return ('No')
		}
		else return ('Yes')
	},

	_displayArmors: function(armor){

		var stealth = this._stealth(armor)

		return(
			<option key={armor.name}>{armor.name}</option>
			)
	},

	_equipWeapons: function(){

		var self = this
		this.props.weaponsData.forEach(function(weapon){
			if(weapon.name === self.refs.selectedWeapon.value){
				self.setState({equippedWeapon: weapon})
				console.log(self.state.equippedWeapon)
			}
		})
		// console.log(this.refs.selectedWeapon.getDOMNode().value)

	},

	_equipArmor: function(){
		var self = this
		this.props.armorsData.forEach(function(armor){
			if(armor.name === self.refs.selectedArmor.value){
				self.setState({equippedArmor: armor})
				console.log(self.state.equippedArmor)
			}
		})
	},

	render: function(){
		
		
		return(
			<div id='weaponsAndArmor'>
				<div id='weapons'>
					<h4>Weapons</h4>
					<select ref='selectedWeapon'>
						{this.props.weaponsData.map(this._displayWeapons)}
					</select>
					<button onClick={this._equipWeapons}>Equip</button>
					<h4>Equipped Weapon</h4>
					<p>{this.state.equippedWeapon.name}</p>
				</div>
				<div id='armor'>
					<h4>Armors</h4>
					<select ref='selectedArmor'>
						{this.props.armorsData.map(this._displayArmors)}
					</select>
					<button onClick={this._equipArmor}>Equip</button>
					<h4>Equipped Armor</h4>
					<p>{this.state.equippedArmor.name}</p>
				</div>
			</div>	
			)
	}
})