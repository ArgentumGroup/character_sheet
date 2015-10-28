
var SignUp = React.createClass({

	_getUsernameandPassword: function(){

		$.ajax({
			type: "POST",
			url: "api/users",
			data: {
				user:{
					email: this.refs.email.value,
					name: this.refs.name.value,
				} 
			},
			success:(function(){console.log('hello')}),
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
					<button onClick={this._getUsernameandPassword}>Create User!</button>
				</div>	
			</div>	
			)
	}
})