
var SignUp = React.createClass({

	_getUsernameandPassword: function(){

		$.ajax({
			type: "POST",
			url: "api/users",
			data: {
				username: this.refs.username.value,
				password: this.refs.password.value
			},
			success:(function(){console.log('hello')}),
			dataType: JSON
		})
	},


	render: function(){

		return(
			<div id='SignUp'>
				<h1>Create your account here.</h1>
				<div id='userDataBlock'>
					<input ref='username' type='text' placeholder="Email"/>
					<input ref='password' type='password' placeholder="Password"/>
					<button onClick={this._getUsernameandPassword}>Create User!</button>
				</div>	
			</div>	
			)
	}
})