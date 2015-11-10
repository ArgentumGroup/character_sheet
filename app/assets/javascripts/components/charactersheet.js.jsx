var CharacterSheet = React.createClass({
	getInitialState:function(){
		return {count:0,weaponsData:[], armorsData:[], shieldsData: [], currentCharacter:[]
		}
	},

	componentWillMount: function(){

		console.log('mounting')

		var self = this,
		ajaxArmorData = {url:'api/armors'},
		ajaxWeaponData = {url: 'api/weapons'},
		ajaxShieldsData = {url: 'api/shields'}
	
	$.ajax(ajaxWeaponData).then(function(responseData){
		console.log('retrieving weapons',responseData)
		self.setState({weaponsData:responseData.weapons})
		})

	$.ajax(ajaxArmorData).then(function(responseData){
		console.log('retrieving armors', responseData)
		self.setState({armorsData:responseData.armors})
		})

	$.ajax(ajaxShieldsData).then(function(responseData){
		console.log('retrieving shields', responseData)
		self.setState({shieldsData: responseData.shields})
	})

	$.ajax({
		type:"GET",
		url: "api/characters/" + this.props.character_id.toString(),
		dataType:'json'
		}).then(function(responseData){
			self.setState({currentCharacter:responseData.character})
		})
	},

	_goProfile:function(){

		location.hash = 'profile'

	},	

	render:function(){


	// function(){
	// 	console.log(weaponsData.weapons)
	// 	return(weaponsData.weapons)
	// 	})
	// 	
	
		
		// console.log("here is the currentCharacter" ,this.state.currentCharacter)

		return(
			<div id="charContainer">
				<button onClick={this._goProfile}>Go to profile</button>
				<NameInfoBox currentCharacter={this.state.currentCharacter}/>
				<StatsBlock />
				<HealthandArmorClass/>
				<WeaponsandArmor shieldsData={this.state.shieldsData} armorsData={this.state.armorsData} weaponsData={this.state.weaponsData}/>
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
		
		character = this.props.currentCharacter

		console.log("namebox" , character)

			
		return(
			<div id='charData'>	
				<div>				
					<p>Player Name</p>
					<input ref='playerName' type='text' placeholder='Player Name'/>
				</div>
				<div>	
					<p>Character Name</p>
					<input value={character.character_name} ref="characterName" type='text' placeholder='Character Name'/>
				</div>
				<div>
					<p>Race</p>
					<input value={character.character_race}ref='race' type="text" placeholder='Race'/>
				</div>
				<div>
					<p>Level</p>
					<input value={character.character_level}ref='level' type='number'/>
					<p>Class</p>
					<input value={character.character_class}ref="class" type='text' placeholder="Class"/>		
				</div>
				<button>Save player info.</button>
			</div>	
			)
	}
})	

