#pragma strict

public var joueur : JoueurControle;
public var isFollowing : boolean;

public var xset: float;
public var yset : float;

function Start () {

	joueur = FindObjectOfType.<JoueurControle>();

	isFollowing = true;

}

function Update () {

	if(isFollowing)
		transform.position = new Vector3(joueur.transform.position.x + xset,joueur.transform.position.y + yset,-10f);

}