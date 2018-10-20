#pragma strict


function Start () {


}

function Update () {

}

function OnTriggerEnter2D(other : Collider2D)
{
	if(other.tag=="destructible")
	{
		Destroy(other.gameObject);
	}


}