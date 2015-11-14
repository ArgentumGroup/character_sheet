
$( document ).ready(function() {

	var App = Backbone.Router.extend({

		routes:{
			'': 'showProfile',
			'profile': 'showProfile',
			'viewcharacter' : 'viewCharacter'

		},

		showSignIn(){

			ReactDOM.render( <SignIn/>, document.querySelector('#container'))
		},

		showSignUp(){

			ReactDOM.render( <SignUp/> , document.querySelector('#container'))
		},

		showProfile(){

			ReactDOM.render( <ProfilePage />, document.querySelector('#container'))
		},

		viewCharacter(){

			ReactDOM.render( <CharacterSheet />, document.querySelector('#container'))
		},

		initialize: function(){
			console.log('getting routey')
			Backbone.history.start()
		}
	})


	var route = new App()

});
