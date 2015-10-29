var CharacterSheet = React.createClass({
	getInitialState:function(){
		return {count:0,weaponsData:[], armorsData:[]}
	},

	componentWillMount: function(){

		console.log('mounting')

	var weaponsData,
		armorsData,
		ajaxArmorData = {url:'api/armors',success: function(responseData){
			armorsData = responseData
			return (armorsData)
		}},

		ajaxWeaponData = {url: 'api/weapons', success: function(responseData){
			weaponsData = responseData
			return (weaponsData)
		}}
	
	// var weaponsData = 
	$.ajax(ajaxWeaponData).then((d)=>{
		this.props.weaponsData = d
		console.log('retrieving weapons',d)
		this.setState({weaponsData:d.weapons})
		})

	$.ajax(ajaxArmorData).then((d)=>{
		this.props.armorsData = d
		console.log('retrieving armors', d)
		this.setState({armorsData:d.armors})
		})
	},

	render: function(){


	// function(){
	// 	console.log(weaponsData.weapons)
	// 	return(weaponsData.weapons)
	// 	})

		return(
			<div id="container">
				<NameInfoBox />
				<StatsBlock />
				<HealthandArmorClass />
				<WeaponsandArmor armorsData={this.state.armorsData} weaponsData={this.state.weaponsData}/>
				<SkillsAbilsMagicItems />
				<TraitsandFlaws />
			</div>	
			)
	}
})


var NameInfoBox = React.createClass({

	render: function(){

		return(
			<div id='charData'>	
				<div>				
					<p>Player Name</p>
					<input type='text' placeholder='Player Name'/>
				</div>
				<div>	
					<p>Character Name</p>
					<input type='text' placeholder='Character Name'/>
				</div>
				<div>
					<p>Race</p>
					<select placeholder='Race'>
						<option>Dwarf</option>
						<option>Elf</option>
						<option>Halfling</option>
						<option>Human</option>
					</select>	
				</div>	
				<div>
					<p>Sub-Race</p>
					<select>
						<option>Hill Dwarf - Dwarf</option>
						<option>Mountain Dwarf - Dwarf</option>
						<option>High Elf - Elf</option>
						<option>Wood Elf - Elf</option>
						<option>Light Foot - Halfling</option>
						<option>Stout - Halfling</option>
						<option>Human - Human</option> 	
					</select>
				</div>
				<div>
					<p>Level</p>
					<input type='number'/>		
				</div>
				<button>Save player info.</button>
			</div>	
			)
	}
})	

