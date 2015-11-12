var NewCharacter = React.createClass({

		getInitialState:function(){
			return {lastCharacterId:'' ,currentUser:'', abilityScores:'no', currentCharacter:'', str: null, dex: null, con: null, int: null, wis: null, cha: null}
		},

		componentWillMount:function(){
			var self = this

			// var charactersData = this.props.charactersData,
			// 	lastCharacter = _.last(charactersData),
			// 	real_character_id = lastCharacter.character_id


			$.ajax(
				{url: 'api/characters',
				dataType: 'json'
				}).then((responseData)=>{
					var charactersData = responseData.characters.characters,
						lastCharacter = _.last(charactersData),
						real_character_id = lastCharacter.character_id
					self.setState({lastCharacterId: real_character_id})
				}).then(function(){
					console.log("ajax last character", self.state.lastCharacterId)
					$.ajax(
 						{url: 'api/characters/' + self.state.lastCharacterId,
 						dataType: 'json',
 						success: function(responseData){
						self.setState({currentUser: responseData.character.character_user_id,currentCharacter: responseData.character})
 							},
 						}
					)
				})

 				console.log("this where last character should be", self.state.lastCharacterId)
		},

		_onRaceSelect: function(){
		var select = ReactDOM.findDOMNode(this.refs.race),
			value = $(select).val()


		if(value === 'dwarf'){
			$('#selectSubRace').html("<option disabled selected>Choose Sub Race</option>\
									<option value='Dwarf, Mountain'>Mountain Dwarf</option>\
									<option value='Dwarf, Hill'>Hill Dwarf</option>")
		}
		if(value === 'elf'){
			$('#selectSubRace').html("<option disabled selected>Choose Sub Race</option>\
									<option value='Elf, High'>High Elf</option>\
									<option value='Elf, Wood'>Wood Elf</option>")
		}
		if(value === 'halfling'){
			$('#selectSubRace').html("<option disabled selected>Choose Sub Race</option>\
									<option value='Halfling, Stout'>Stout</option>\
									<option value='Halfling, Lightfoot'>Lightfoot</option>")
		}
		if(value === 'human'){
			$('#selectSubRace').html("<option disabled selected>Choose Sub Race</option>\
									<option value='Human'>Human</option>\
									<option value='Hooman'>Hooman</option>")
		}
		this.forceUpdate()
	},

	_classSelect:function(){

		console.log(this.state.currentCharacter.character_capabilities)
		var select = ReactDOM.findDOMNode(this.refs.class),
			value = $(select).val();


		// var arches = [
		// 	{
		// 		name: 'Rogue',
		// 		desc: '<p>Do you want to skulk in the...';
		// 	},
		// 	{
		// 		name: 'Rogue',
		// 		desc: '<p>Do you want to skulk in the...';
		// 	},
		// 	{
		// 		name: 'Rogue',
		// 		desc: '<p>Do you want to skulk in the...';
		// 	},

		// ];

		// arches.forEach(function(archetype) {
		// 	if(value === archetype.name) {
		// 		console.log(archetype.name);
		// 		$("#classDescription").html(archetype.desc);
		// 	}
		// });

		if(value === '3'){
			console.log('rogue')
			$("#classDescription").html("<h3>Rogue</h3>\
										<p>Do you want to skulk in the shadows, striking with deadly precision and tumbling from danger? If yes then Rogue is for you!</p>")
		}
		if(value === '2'){
			$("#classDescription").html("<h3>Fighter</h3>\
										<p>Do you like to rush head first into battle, wielding all manner of deadly weapons? Do you like being the biggest, strongest, most threatening person in the room? Then Fighter will be your calling.</p>")
		}
		if(value === '1'){
			$("#classDescription").html("<h3>Cleric</h3>\
										<p>Do you want to wear your faith like armor, smiting your foes and healing your friends with the power of the gods? Reach out and touch faith, with a Cleric</p>")
		}
		if(value === '4'){
			$("#classDescription").html("<h3>Wizard</h3>\
										<p>Are you fan of dusty tomes, eldritch formulae, and pulling back the curtain of reality? Do you want to tap into the ambient energy of nature, bending it to your will? Wizard will be your calling.</p>")
		}
	},

	_saveChar: function(){

		var classes = ReactDOM.findDOMNode(this.refs.class),
			charClass = $(classes).val(),
			charClassId = parseInt(charClass),
			name = this.refs.charName.value,
			level = this.refs.level.value,
			races = ReactDOM.findDOMNode(this.refs.subRace),
			selectedRace = $(races).val(),
			character_id = this.state.currentCharacter.character_id.toString(),
			capabilityBlockId = this.state.currentCharacter.character_capabilities.ability_scores.capability_block_id,
			abilityScoresId = this.state.currentCharacter.character_capabilities.ability_scores.id
			console.log("saving", capabilityBlockId, abilityScoresId)


			$.ajax({
			type: "PATCH",
 			url: "api/characters/" + character_id,
  			data: {
  				character:{
    				name: name,
    				level: 1,
    				klass_id: charClassId,
    				race: selectedRace,
	    			capability_block_attributes:{
	    				id: capabilityBlockId,
	    				ability_score_block_attributes:{
	    					id: abilityScoresId,
	    					strength:this.state.str,
	    					dexterity:this.state.dex,
	    					constitution: this.state.con,
	    					intelligence: this.state.int,
	    					wisdom: this.state.wis,
	    					charisma: this.state.cha
						}
    				}
    			}
  			}
  			})
  		
		location.hash= 'charactersheet'

		ReactDOM.render(<CharacterSheet character_id={character_id}/>, document.querySelector("#container"))
	},
  		

	_returnToProfile: function(){

		location.hash = 'profile'
		ReactDOM.render(<ProfilePage />, document.querySelector("#container"))
	},

	_showAbilityScores: function(){


		this.setState({abilityScores: 'yes'})
		ReactDOM.render(<NewCharStatBlock str={this.state.str} dex={this.state.dex} con={this.state.con} int={this.state.int} wis={this.state.wis} cha={this.state.cha} saveChar={this._saveChar} parentComms={this._walkieTalkie} abilityScores={this.state.abilityScores}/>, document.querySelector("#newCharStatBlock"))
		if(this.state.abilityScores === 'yes'){
			this.setState({abilityScores: 'no'})
		}

	},

	_walkieTalkie: function(str,dex,con,int,wis,cha){

		this.setState({
			str:str,
			dex:dex,
			con:con,
			int:int,
			wis:wis,
			cha:cha
		})
		console.log('wheeeee', this.state.str)

	},

	render:function(){

		return(
			<div id="newCharacter">
				<button onClick={this._returnToProfile}>Go back to profile</button>
				<div>
					<p>Character Name</p>
					<input ref="charName" type='text' placeholder='Character Name'/>
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
					<select id="selectSubRace" ref="subRace">
					</select>
				</div>
				<div>
					<p>Class</p>
					<select  id="classSelect" onChange={this._classSelect} ref="class">
						<option disabled selected>Class</option>
						<option value='3'>Rogue</option>
						<option value='2'>Fighter</option>
						<option value='4'>Wizard</option>
						<option value='1'>Cleric</option>
					</select>
					<input onClick={this._showAbilityScores} type="checkbox"/>
					<div id="classDescription">
					</div>
					<div id='newCharStatBlock'>
					</div>
				</div>
			</div>
				)
	}
})
