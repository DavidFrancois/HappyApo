#pragma strict

public var pointsAAjouter : int;
public var sonPiece : AudioSource;

function OnTriggerEnter2D(other : Collider2D)
{
	if(other.GetComponent.<JoueurControle>() == null)
		return;	

	ScoreManager.AjouterPoints(pointsAAjouter);

	sonPiece.Play();

	Destroy(gameObject);
}

