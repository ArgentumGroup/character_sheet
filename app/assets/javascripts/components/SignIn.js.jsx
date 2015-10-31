var SignIn = React.createClass({

	
	_logIn: function(){

		$.ajax({
			type: "POST",
			url: "api/sign_in",
			data: {
				user:{
					email: this.refs.email.value,
					password: this.refs.password.value,
				} 
			},
			success:(function(){
				location.hash = 'profile'
			}),
		})
	},

	_logOut: function(){

		$.ajax({
			type: "DELETE",
			url: "api/sign_in",
			success: (function(){
				alert('logging you out.')
			})
		})
	},

	render: function(){

		return(
			<div id='SignIn'>
				<h1>Sign In</h1>
				<div id="inputBox">
					<input ref='email' type='text' placeholder='Email Address'/>
					<input ref='password' type='password' placeholder='Password'/>
					<button onClick={this._logIn}>Click to Sign in</button>
					<a href="/#signup">Don't have an account? Sign up here!</a>
					<button onClick={this._logOut}>Log Out</button>
				</div>	
			</div>	
			)
	}
})