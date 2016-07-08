function OnCollisionEnter(theCollision : Collision){

	if(theCollision.gameObject.name == "Cube"){
		Debug.Log("Hit the cube");
	}

}