var WeaponsandArmor = React.createClass({

	_getWeapons: function(){

		var ajaxData = {url: './weapons', success: function(responseData){
			console.log(responseData)}}
		$.ajax(ajaxData)
	},
	


	render: function(){

		this._getWeapons()

		return(
			<div id='weaponsAndArmor'>
				<div id='weapons'>
					<h4>Weapon</h4>
					<select></select>
				</div>
				<div id='armor'>
					<h4>Armor</h4>
					<select></select>
				</div>
			</div>	
			)
	}
})