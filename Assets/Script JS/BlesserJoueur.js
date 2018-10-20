#pragma strict

public var dommage :int;

function Start () {
	
}

function Update () {

}

function OnTriggerEnter2D(other: Collider2D){

	if(other.name == "Joueur")
	{
		SanteManager.BlesserJoueur(dommage);
		other.GetComponent.<AudioSource>().Play();

		var player = other.GetComponent.<JoueurControle>();
		player.knockbackCount = player.knockbackLength;

		if(other.transform.position.x < transform.position.x)
			player.knockbackRight = true;
		else
			player.knockbackRight = false;

	}
}
