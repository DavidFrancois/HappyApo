#pragma strict

public var lifeTime : float;

function Start () {

}

function Update () {

	lifeTime -= Time.deltaTime;

	if(lifeTime < 0)
	{
		Destroy(gameObject);
	}

}