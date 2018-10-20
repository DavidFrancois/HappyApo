#pragma strict

public var dommage :int;

public var rebomdir : float;

private var myrigidbody2D : Rigidbody2D;

function Start () {

myrigidbody2D = transform.parent.GetComponent.<Rigidbody2D>();

}

function Update () {

}

function OnTriggerEnter2D(other : Collider2D)
{
	if(other.tag=="ennemy")
	{
		other.GetComponent.<VieEnnemiManager>().donnerDommage(dommage);
		myrigidbody2D.velocity = new Vector2(myrigidbody2D.velocity.x,rebomdir);
	}


}