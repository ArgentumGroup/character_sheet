 var ProfilePage = React.createClass({

 	getInitialState:function(){
 		return {count: 0, usersData:[]}
 	},

 	componentWillMount: function(){

 		$.ajax(
 			{url: 'api/users',
 			dataType: 'json',
 			success: (function(responseData)
 				{console.log("here's data biotch", responseData)
 				return responseData})
 				})

 		$.ajax(
 			{url: 'api/characters',
 			dataType: 'json',
 			success: (function(responseData)
 				{console.log("heres chracters", responseData)
 				return responseData})
 				})
 	},

 	_logOut: function(){

 			$.ajax({
			type: "DELETE",
			url: "api/sign_in",
			success: (function(){
				alert('logging you out.')
				location.hash = "signin"
			})
		})
 	},


 	_showCharacters:function(character){

 		return(
 			<CharacterList 
 				characterlist={this.props.characterlist}
 				character={character}/>
 			)
 	},

 	render: function(){

 		var characters = this.props.characterlist

 		return (
 			<div id="ProfilePage">
 				<button onClick={this._logOut}>Log Out</button>
 				<h1>Welcome current User!</h1>
 				<div id='characterList'>
	 				<ul>
	 				</ul>
 				</div>
 				<div id="recentActivity">
 					<p>Recent stuff goes here.</p>
 				</div>	
 			</div>
 			)

 	}
})