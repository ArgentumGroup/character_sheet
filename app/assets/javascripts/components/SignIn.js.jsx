var SignIn = React.createClass({

	render: function(){

		return(
			<div id='SignIn'>
				<h1>Sign In</h1>
				<div id="inputBox">
					<input type='text' placeholder='Email Address'/>
					<input type='password' placeholder='Password'/>
					<button>Click to Sign in</button>
					<a href="/#signup">Don't have an account? Sign up here!</a>
				</div>	
			</div>	
			)
	}
})