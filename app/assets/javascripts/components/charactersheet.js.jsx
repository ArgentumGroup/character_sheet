var CharacterSheet = React.createClass({
	getInitialState:function(){
		return {count:0,weaponsData:[], armorsData:[], shieldsData: [], currentCharacter:[], capabilityBlock: [], characterClass:[], armors: 0, skills:[], skillProficiencies:[], spells:[]}
	},

	componentWillMount: function(){

		console.log('mounting')

		var self = this,
		ajaxArmorData = {url:'api/armors'},
		ajaxWeaponData = {url: 'api/weapons'},
		ajaxShieldsData = {url: 'api/shields'}
	
	$.ajax(ajaxWeaponData).then(function(responseData){
		self.setState({weaponsData:responseData.weapons})
		})

	$.ajax(ajaxArmorData).then(function(responseData){
		self.setState({armorsData:responseData.armors})
		})

	$.ajax(ajaxShieldsData).then(function(responseData){
		self.setState({shieldsData: responseData.shields})
		})

	$.ajax({
		type:"GET",
		url: "api/characters/" + this.props.character_id.toString(),
		dataType:'json'
		}).then(function(responseData){
			self.setState({currentCharacter:responseData.character,
				capabilityBlock: responseData.character.character_capabilities.ability_scores, characterClass: responseData.character.character_class, skillProficiencies: responseData.character.skill_proficiencies})
		})

	$.ajax({
		type:"GET",
		url: "api/skills",
		dataType:'json'
		}).then(function(responseData){
			self.setState({skills:responseData.skills})
		})

	$.ajax({
		type:"GET",
		url:"api/spells",
		dataType:'json'
		}).then(function(responseData){
			self.setState({spells:responseData.spells})
		})	
	},

	_goProfile:function(){

		location.hash = 'profile';

	},

	_walkieTalkie:function(){

		var self = this

		var count = 1

		self.setState({
			
			armors: count++
		})

		$.ajax({
		type:"GET",
		url: "api/characters/" + this.props.character_id.toString(),
		dataType:'json'
		}).then(function(responseData){
			self.setState({currentCharacter:responseData.character,
				capabilityBlock: responseData.character.character_capabilities.ability_scores, characterClass: responseData.character.character_class})
		});


	},	

	render:function(){


		return(
			<div id="charContainer">
				<button onClick={this._goProfile}>Go to profile</button>
				<NameInfoBox currentCharacter={this.state.currentCharacter} characterClass={this.state.characterClass}/>
				<StatsBlock currentCharacter={this.state.currentCharacter} capabilityBlock={this.state.capabilityBlock} />
				<HealthandArmorClass currentCharacter={this.state.currentCharacter} armors={this.state.armors} />
				<WeaponsandArmor parentComms={this._walkieTalkie} currentCharacter={this.state.currentCharacter} shieldsData={this.state.shieldsData} armorsData={this.state.armorsData} capabilityBlock={this.state.capabilityBlock} weaponsData={this.state.weaponsData}/>
				<SkillsAbilsMagicItems skillProfs={this.state.skillProficiencies} skills={this.state.skills} spells={this.state.spells} currentCharacter={this.state.currentCharacter} />
			</div>	
			)
	}
})


var NameInfoBox = React.createClass({


	render: function(){
		
		character = this.props.currentCharacter
		characterClass = this.props.characterClass

		

			
		return(
			<div id='charData'>	
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
				</div>
				<div>
					<p>Class</p>
					<input value={characterClass.name}ref="class" type='text' placeholder="Class"/>	
				</div>
			</div>	
			)
	}
})	





