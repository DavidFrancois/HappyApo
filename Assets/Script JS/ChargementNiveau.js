#pragma strict

private var joueurDansLaZone : boolean;

public var niveauAcharger : String;

function Start () {

joueurDansLaZone = false;

}

function Update () {

if(Input.GetKeyDown(KeyCode.E) && joueurDansLaZone)
	{
		Application.LoadLevel(niveauAcharger);

	}



}
function OnTriggerEnter2D(other : Collider2D)
{
	if(other.tag =="Player")
	{
		joueurDansLaZone = true;

	}
}

function OnTriggerExit2D(other : Collider2D)
{
	if(other.tag =="Player")
	{
		joueurDansLaZone = false;

	}
}