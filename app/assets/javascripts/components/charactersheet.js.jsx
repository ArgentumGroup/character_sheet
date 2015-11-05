var CharacterSheet = React.createClass({
	getInitialState:function(){
		return {count:0,weaponsData:[], armorsData:[], currentCharacter:[]
		}
	},

	componentWillMount: function(){

		console.log('mounting')

		var self = this

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

	$.ajax({
		type:"GET",
		url: "api/characters/" + this.props.character_id.toString(),
		dataType:'json'
		}).then(function(responseData){
			self.setState({currentCharacter:responseData.character})
		})
	},	

	render: function(){


	// function(){
	// 	console.log(weaponsData.weapons)
	// 	return(weaponsData.weapons)
	// 	})
		
		console.log("here is the currentCharacter" ,this.state.currentCharacter)

		return(
			<div id="charContainer">
				<NameInfoBox />
				<StatsBlock />
				<HealthandArmorClass/>
				<WeaponsandArmor  armorsData={this.state.armorsData} weaponsData={this.state.weaponsData}/>
				<SkillsAbilsMagicItems character={this.props.character} />
				<TraitsandFlaws />
			</div>	
			)
	}
})


var NameInfoBox = React.createClass({

	// _onRaceSelect: function(){
	// 	var subRace,
	// 		select = ReactDOM.findDOMNode(this.refs.race),
	// 		value = $(select).val()
			
	// 	if(value === 'dwarf'){
	// 		$("#subRace1").text('Mountain Dwarf')
	// 		$("#subRace2").text('Hill Dwarf')
	// 	}
	// 	if(value === 'elf'){
	// 		$("#subRace1").text('High Elf')
	// 		$("#subRace2").text('Wood Elf')
	// 	}			
	// 	if(value === 'halfling'){
	// 		$("#subRace1").text('Stout')
	// 		$("#subRace2").text('Lightfoot')
	// 	}
	// 	if(value === 'human'){
	// 		$("#subRace1").text('Human')
	// 		$("#subRace2").text('Hooman')
	// 	}
	// 	this.forceUpdate()
	// },

	render: function(){
	

			
		return(
			<div id='charData'>	
				<div>				
					<p>Player Name</p>
					<input ref='playerName' type='text' placeholder='Player Name'/>
				</div>
				<div>	
					<p>Character Name</p>
					<input id='characterName' ref="characterName" type='text' placeholder='Character Name'/>
				</div>
				<div>
					<p>Race</p>
					<input ref='race' type="text" placeholder='Race'/>
				</div>
				<div>
					<p>Level</p>
					<input ref='level' type='number'/>
					<p>Class</p>
					<input ref="class" type='text' placeholder="Class"/>		
				</div>
				<button>Save player info.</button>
			</div>	
			)
	}
})	

