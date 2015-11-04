
$( document ).ready(function() {

	var App = Backbone.Router.extend({

		routes:{

			'signup': 'showSignUp',
			'profile': 'showProfile',
			'signin': 'showSignIn',
			'newcharacter': 'showCharacterbuilder',
			'viewcharacter' : 'viewCharacter'

		},

		showSignIn(){
	
			ReactDOM.render( <SignIn/>, document.querySelector('#container'))
		},

		showSignUp(){

			ReactDOM.render( <SignUp/> , document.querySelector('#container'))
		},

		showCharacterbuilder(){

			ReactDOM.render( <NewCharacter/> , document.querySelector('#container'))
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


