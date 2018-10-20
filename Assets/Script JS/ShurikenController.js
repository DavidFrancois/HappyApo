#pragma strict

public var speed : float;
public var player : JoueurControle;
public var ennemyMort : GameObject;
public var impact : GameObject;
public var vitesseRotation : float;
public var dommage : int;

function Start () {
	player = FindObjectOfType.<JoueurControle>();
	if(player.transform.localScale.x < 0)
		speed = -speed;
		vitesseRotation=-vitesseRotation;

}

function Update () {
	GetComponent.<Rigidbody2D>().velocity = new Vector2(speed,GetComponent.<Rigidbody2D>().velocity.y);
	GetComponent.<Rigidbody2D>().angularVelocity = vitesseRotation;
}

function OnTriggerEnter2D(other : Collider2D)
{
	if(other.tag == "ennemy")
	{
		//Instantiate(ennemyMort,other.transform.position,other.transform.rotation);
		//Destroy(other.gameObject);
		other.GetComponent.<VieEnnemiManager>().donnerDommage(dommage);
	}

	Instantiate(impact,transform.position,transform.rotation);
	Destroy(gameObject);
}

