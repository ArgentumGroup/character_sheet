var StatsBlock = React.createClass({

	render: function(){

		
		var capabilityBlock = this.props.capabilityBlock

		console.log('heres stats block', capabilityBlock)

		return(
			<div id='statsBlock'>
				<p>Profiency Bonus <input ref='proficiency' type='number'/></p>
				<p>Strength <input value={capabilityBlock.strength} ref='str' type='number'/></p>
				<p>Dexterity <input value={capabilityBlock.dexterity}ref='dex' type='number'/></p>
				<p>Constitution <input value={capabilityBlock.constitution}ref='con' type='number'/></p>
				<p>Intelligence <input value={capabilityBlock.intelligence} ref='int' type='number'/></p>
				<p>Wisdom <input value={capabilityBlock.wisdom}  ref='wis' type='number'/></p>
				<p>Charisma <input value={capabilityBlock.charisma} ref='cha' type='number'/></p>
			</div>	
			)
	}
})