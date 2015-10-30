
$( document ).ready(function() {

	var App = Backbone.Router.extend({

		routes:{

			'signup': 'showSignUp',
			'profile': 'showProfile',
			'signin': 'showSignIn',
			'character': 'showCharacterbuilder'

		},

		showSignIn(){
	
			ReactDOM.render( <SignIn/>, document.querySelector('#container'))
		},

		showSignUp(){
			console.log('backbone and nothingness')

			ReactDOM.render( <SignUp/> , document.querySelector('#container'))
		},

		showCharacterbuilder(){

			ReactDOM.render( <CharacterSheet/> , document.querySelector('#container'))
		},

		showProfile() {
			console.log('na na na nana na')

			ReactDOM.render( <ProfilePage />, document.querySelector('#container'))
		},
		initialize: function(){
			console.log('getting routey')
			Backbone.history.start()
		}
	})


	var route = new App()

});


