var TraitsandFlaws = React.createClass({

	render: function(){

		return (
			<div id="traitsBox">
				<div>
					<p>Personality Traits</p>
					<textarea rows="10" columns="10"/>
				</div>
				<div>
					<p>Ideals</p>
					<textarea rows="10" columns="10"/>
				</div>
				<div>
					<p>Bonds</p>
					<textarea rows="10" columns="10"/>
				</div>
				<div>
					<p>Flaws</p>
					<textarea rows="10" columns="10"/>
				</div>
				<button>Save this data.</button>
			</div>
			)
	}
})