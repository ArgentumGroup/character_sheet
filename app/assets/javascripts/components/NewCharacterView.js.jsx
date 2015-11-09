var NewCharacter = React.createClass({

		getInitialState:function(){
			return {currentUser:'', abilityScores:'no', currentCharacter:'', str: null, dex: null, con: null, int: null, wis: null, cha: null}
		},

		componentWillMount:function(){
			var self = this
			var character_id = this.props.charactersData[this.props.charactersData.length-1].character_id
			var real_character_id = (character_id + 1).toString()
			console.log(character_id);
			console.log(real_character_id);
			$.ajax(
 				{url: 'api/characters/' + real_character_id,
 				dataType: 'json'
 				}).then(function(responseData){
 					self.setState({currentUser: responseData.character_user_id,currentCharacter: responseData.character})
 				})
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
		var select = ReactDOM.findDOMNode(this.refs.class),
			value = $(select).val()
		if(value === 'rogue'){
			console.log('rogue')
			$("#classDescription").html("<h3>Rogue</h3>\
										<p>Do you want to skulk in the shadows, striking with deadly precision and tumbling from danger? If yes then Rogue is for you!</p>")
		}
		if(value === 'fighter'){
			$("#classDescription").html("<h3>Fighter</h3>\
										<p>Do you like to rush head first into battle, wielding all manner of deadly weapons? Do you like being the biggest, strongest, most threatening person in the room? Then Fighter will be your calling.</p>")
		}
		if(value === 'cleric'){
			$("#classDescription").html("<h3>Cleric</h3>\
										<p>Do you want to wear your faith like armor, smiting your foes and healing your friends with the power of the gods? Reach out and touch faith, with a Cleric</p>")
		}
		if(value === 'wizard'){
			$("#classDescription").html("<h3>Wizard</h3>\
										<p>Are you fan of dusty tomes, eldritch formulae, and pulling back the curtain of reality? Do you want to tap into the ambient energy of nature, bending it to your will? Wizard will be your calling.</p>")
		}
	},

	_saveChar: function(){

		var classes = ReactDOM.findDOMNode(this.refs.class),
			charClass = $(classes).val()
			name = this.refs.charName.value,
			level = this.refs.level.value,
			races = ReactDOM.findDOMNode(this.refs.subRace)
			selectedRace = $(races).val(),
			character_id = this.state.currentCharacter.character_id.toString()
			console.log(character_id)

			console.log('saving')
			$.ajax({
			type: "PATCH",
 			url: "api/characters/" + character_id,
  			data: {character:{
    			name: name,
    			level: level,
    			klass: charClass,
    			race: selectedRace}
  				}
  			})
  			ReactDOM.render(<ProfilePage />, document.querySelector("#container"))
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
					<p>Level</p>
					<input ref='level' type='number'/>
					<p>Class</p>
					<select  id="classSelect" onChange={this._classSelect} ref="class">
						<option disabled selected>Class</option>
						<option value="Rogue">Rogue</option>
						<option value="Fighter">Fighter</option>
						<option value="Wizard">Wa-wa-wa-wyzzrrddd</option>
						<option value="Cleric" >Cleric</option>
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
