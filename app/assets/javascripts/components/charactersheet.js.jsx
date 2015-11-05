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
			<div id="charContainer">
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

	_onRaceSelect: function(){
		var subRace,
			select = ReactDOM.findDOMNode(this.refs.race),
			value = $(select).val()
			
		if(value === 'dwarf'){
			$("#subRace1").text('Mountain Dwarf')
			$("#subRace2").text('Hill Dwarf')
		}
		if(value === 'elf'){
			$("#subRace1").text('High Elf')
			$("#subRace2").text('Wood Elf')
		}			
		if(value === 'halfling'){
			$("#subRace1").text('Stout')
			$("#subRace2").text('Lightfoot')
		}
		if(value === 'human'){
			$("#subRace1").text('Human')
			$("#subRace2").text('Hooman')
		}
		this.forceUpdate()
	},

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
					<select onChange={this._onRaceSelect} id='race' ref="race">
						<option disabled selected>Race</option>
						<option value='dwarf'>Dwarf</option>
						<option value='elf'>Elf</option>
						<option value='halfling'>Halfling</option>
						<option value='human'>Human</option>
					</select>	
				</div>	
				<div>
					<p>Sub-Race</p>
					<select>
						<option disabled selected>Sub Race</option>
						<option id='subRace1'></option>
						<option id='subRace2'></option>	
					</select>
				</div>
				<div>
					<p>Level</p>
					<input type='number'/>
					<p>Class</p>
					<select>
						<option>Rogue</option>
						<option>Fighter</option>
						<option>Wa-wa-wa-wyzzrrddd</option>
						<option>Cleric</option>
					</select>			
				</div>
				<button>Save player info.</button>
			</div>	
			)
	}
})	

