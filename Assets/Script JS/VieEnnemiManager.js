#pragma strict

public var vieEnnemi : int;
public var effetMort : GameObject;
public var pointsMort : int;

function Start () {

}

function Update () {

	if(vieEnnemi <= 0)
	{
		Instantiate(effetMort,transform.position,transform.rotation);
		Destroy(gameObject);
		ScoreManager.AjouterPoints(pointsMort);
	}

}

function donnerDommage(dommageADonner : int)
{
	vieEnnemi -= dommageADonner;
	GetComponent.<AudioSource>().Play();

}