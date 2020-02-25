// Register a new user
firebase
	.auth()
	.createUserWithEmailAndPassword(email, password)
	.catch(function(err) {
		// Handle errors
	});

// Sign in existing user
firebase
	.auth()
	.signInWithEmailAndPassword(email, password)
	.catch(function(err) {
		// Handle errors
	});

// Sign out user
firebase
	.auth()
	.signOut()
	.catch(function(err) {
		// Handle errors
	});

this.db = app.firestore();
this.db.doc(`users_codedamn_video/${this.auth.currentUser.uid}`).set({
	quote,
});

/* al pastor
asada
barbacoa
chorizo
carnitas
pescado
vegetal
ground beef
shrimp
*/
