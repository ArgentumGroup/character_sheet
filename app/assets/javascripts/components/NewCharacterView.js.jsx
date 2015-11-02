var NewCharacter = React.createClass({
	
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

	_classSelect:function(){


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
					<p>Level</p>
					<input type='number'/>
				</div>
				<div>	
					<p>Class</p>
					<select onChange={this._classSelect} ref="class">
						<option disabled defaultValue>Class</option>
						<option value="rogue">Rogue</option>
						<option value="fighter">Fighter</option>
						<option value="wizard">Wa-wa-wa-wyzzrrddd</option>
						<option value="cleric" >Cleric</option>
					</select>			
				</div>
			</div>	
				)
	}
})