#pragma strict

public var vitesseDeplacement : float;
public var deplacementDroite : boolean; 

var LeMurOk : Transform;
var LeMurRadius : float;
var leMur : LayerMask;
private var toucheLeMur : boolean;

private var toucheLeVide : boolean;
var LeVideOk : Transform;


function Start () {


}

function Update () {

	toucheLeMur = Physics2D.OverlapCircle(LeMurOk.position,LeMurRadius,leMur);
	toucheLeVide = Physics2D.OverlapCircle(LeVideOk.position,LeMurRadius,leMur);

	if(toucheLeMur || !toucheLeVide)
	{
		deplacementDroite = !deplacementDroite;
	}



	if(deplacementDroite)
	{
		transform.localScale = new Vector3 (-2f, 2.5f, 1f);
		GetComponent.<Rigidbody2D>().velocity = new Vector2(vitesseDeplacement,GetComponent.<Rigidbody2D>().velocity.y);
	}else {
		transform.localScale = new Vector3 (2f, 2.5f, 1f);
		GetComponent.<Rigidbody2D>().velocity = new Vector2(-vitesseDeplacement,GetComponent.<Rigidbody2D>().velocity.y);
	}

}