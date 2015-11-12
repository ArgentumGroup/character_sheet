
var SignUp = React.createClass({

	_getUsernameandPassword: function(){

		$.ajax({
			type: "POST",
			url: "api/users",
			data: {
				user:{
					email: this.refs.email.value,
					name: this.refs.name.value,
					password: this.refs.password.value,
					password_confirmation: this.refs.confirm_password.value
				} 
			},
			success:(function(){
				location.hash = 'profile'
			}),
			dataType: 'json'
		})
	},


	render: function(){

		return(
			<div id='SignUp'>
				<h1>Create your account here.</h1>
				<div id='userDataBlock'>
					<input ref='email' type='text' placeholder="Email"/>
					<input ref='name' type='text' placeholder="Name"/>
					<input ref='password' type='password' placeholder="Password"/>
					<input ref='confirm_password' type='password' placeholder="Confirm Password"/>
					<button onClick={this._getUsernameandPassword}>Create User!</button>
					<div>
						<a href='#signin'>Have an account? Go back to Sign In</a>
					</div>	
				</div>	
			</div>	
			)
	}
})
