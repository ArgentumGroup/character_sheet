var NewCharacter = React.createClass({

		getInitialState:function(){
			return {currentUser:[]}
		}, 

		componentWillMount:function(){
			var self = this
			$.ajax(
 				{url: 'api/characters',
 				dataType: 'json'
 				}).then(function(responseData){
 					self.setState({currentUser: responseData.characters.user_id})
 				})
		},
	
		_onRaceSelect: function(){
		var select = ReactDOM.findDOMNode(this.refs.race),
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

	_classSelect:function(){
		var select = ReactDOM.findDOMNode(this.refs.class),
			value = $(select).val()
		if(value === 'rogue'){
			console.log('rogue')
			$("#classDescription").html("<h3>Rogue</h3>\
										<p>Do you want to skulk in the shadows? Striking with deadly precision and tumbling from danger? If yes then Rogue is for you!</p>")
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

	_saveCharacter:function(){

		$.ajax({
			type: "POST",
			url: "api/characters",
			data: {character:
					{user_id: this.state.currentUser,
					campaign: 2}
					}
		})

	},

	render:function(){

		return(
			<div id="newCharacter">			
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
					<p>Class</p>
					<select onChange={this._classSelect} ref="class">
						<option disabled selected>Class</option>
						<option value="rogue">Rogue</option>
						<option value="fighter">Fighter</option>
						<option value="wizard">Wa-wa-wa-wyzzrrddd</option>
						<option value="cleric" >Cleric</option>
					</select>
					<div id="classDescription">
					</div>
					<button onClick={this._saveCharacter}>Submit your character!</button>	
				</div>
			</div>	
				)
	}
})