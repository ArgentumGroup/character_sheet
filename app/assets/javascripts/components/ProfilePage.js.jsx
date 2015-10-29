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
 	},

 	render: function(){

 		this._retrieveUserInfo()

 		var userData = responseData

 		return (
 			<div id="ProfilePage">
 				<h1>hello</h1>
 			</div>
 			)

 	}
})